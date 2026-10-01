import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { loadPersistedStore } from '@/lib/partner-store-server'
import { INITIAL_OFFICIAL_PARTNERS } from '@/lib/partner-store'

export const dynamic = 'force-static'

export async function GET() {
  const storeMap = loadPersistedStore()
  const initialList = Array.from(storeMap.values())
  const initialMap = new Map(initialList.map(p => [p.company_name.toLowerCase().trim(), p]))

  try {
    // Runs once at build time (force-static) and is emitted as a static JSON file,
    // so the service role never reaches the browser. employer_requests is not
    // readable with the anon key: it holds partner contact details.
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://skecspzevwmempzsywwp.supabase.co'
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!key) {
      throw new Error('SUPABASE_SERVICE_ROLE_KEY is required at build time to list approved partners')
    }
    const supabase = createClient(url, key, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    let liveRows: any[] = []

    // 1. Try fetching from Supabase DB
    const { data, error } = await supabase
      .from('employer_requests')
      .select('id, company_name, partner_type, badge, logo_url, website_url, status')
      .eq('status', 'APPROVED')
      .order('submitted_at', { ascending: false })

    if (!error && data && data.length > 0) {
      liveRows = data
    } else {
      // 2. Try fetching from admin API fallback
      const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3001'
      try {
        const adminRes = await fetch(`${adminUrl}/api/partners/requests`, { cache: 'no-store' })
        if (adminRes.ok) {
          const adminData = await adminRes.json()
          if (adminData.requests) {
            liveRows = adminData.requests.filter((r: any) => r.status === 'APPROVED')
          }
        }
      } catch (adminErr) {
        console.warn('[Approved Partners API] Admin API fallback notice:', adminErr)
      }
    }

    // Combine live rows with disk-persisted fallback partners
    const formatted = liveRows.map((p: any) => {
      const nameKey = (p.company_name || p.name || '').toLowerCase().trim()
      const fallback = initialMap.get(nameKey)
      return {
        id: p.id || fallback?.id || nameKey,
        name: p.company_name || p.name || fallback?.company_name || 'Partner',
        category: p.partner_type || fallback?.partner_type || 'Hiring Partner',
        badge: p.badge || fallback?.badge || 'Official Partner',
        logo_url: p.logo_url || fallback?.logo_url || '',
        website_url: p.website_url || fallback?.website_url || '',
      }
    })

    const seenNames = new Set<string>()
    const mergedList: any[] = []

    for (const item of formatted) {
      const normName = item.name.toLowerCase().trim()
      if (normName && !seenNames.has(normName)) {
        seenNames.add(normName)
        mergedList.push(item)
      }
    }

    // Add remaining disk/memory official partners
    for (const partner of initialList) {
      const normName = partner.company_name.toLowerCase().trim()
      if (!seenNames.has(normName)) {
        seenNames.add(normName)
        mergedList.push({
          id: partner.id,
          name: partner.company_name,
          category: partner.partner_type,
          badge: partner.badge,
          logo_url: partner.logo_url || '',
          website_url: partner.website_url,
        })
      }
    }

    return NextResponse.json({
      success: true,
      partners: mergedList,
    })
  } catch (err: any) {
    console.error('[Approved Partners API Error]:', err)
    return NextResponse.json({
      success: true,
      partners: initialList.map(p => ({
        id: p.id,
        name: p.company_name,
        category: p.partner_type,
        badge: p.badge,
        logo_url: p.logo_url || '',
        website_url: p.website_url,
      })),
    })
  }
}

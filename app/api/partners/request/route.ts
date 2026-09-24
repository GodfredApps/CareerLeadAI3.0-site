import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://skecspzevwmempzsywwp.supabase.co'
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient(url, key)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      companyName,
      contactName,
      email,
      phone,
      partnerType,
      companySize,
      notes,
    } = body

    if (!companyName || !email || !contactName) {
      return NextResponse.json(
        { error: 'Company name, contact name, and email are required.' },
        { status: 400 }
      )
    }

    const payload = {
      id: `partner_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      company_name: companyName,
      contact_name: contactName,
      email,
      phone: phone || '',
      partner_type: partnerType || 'Hiring Partner',
      company_size: companySize || '10-50 employees',
      notes: notes || '',
      status: 'PENDING',
      submitted_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }

    const supabase = getSupabaseAdmin()
    const { error: dbError } = await supabase.from('employer_requests').insert([payload])

    if (dbError) {
      console.warn('[api/partners/request] Supabase insert warning:', dbError.message)
    }

    return NextResponse.json({
      success: true,
      message: 'Partnership request submitted successfully.',
      data: payload,
    })
  } catch (err: any) {
    console.error('[api/partners/request] Error:', err)
    return NextResponse.json(
      { error: err.message || 'Failed to submit partner request' },
      { status: 500 }
    )
  }
}

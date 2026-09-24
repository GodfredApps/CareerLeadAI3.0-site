export interface OfficialPartnerData {
  id: string
  company_name: string
  contact_name: string
  email: string
  phone: string
  partner_type: string
  badge: string
  logo_url: string
  website_url: string
  company_size: string
  hiring_volume: string
  notes: string
  status: 'APPROVED' | 'CONTACTED' | 'PENDING' | 'REJECTED'
  submitted_at: string
}

export const DEFAULT_PARTNER_LOGOS: Record<string, string> = {
  'empowered vision initiative': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 50" width="220" height="50"><rect width="220" height="50" rx="8" fill="%230369a1"/><circle cx="30" cy="25" r="12" fill="%2338bdf8"/><circle cx="30" cy="25" r="6" fill="%23ffffff"/><text x="52" y="28" font-family="system-ui, sans-serif" font-weight="900" font-size="13" fill="%23ffffff">EMPOWERED VISION</text><text x="52" y="40" font-family="system-ui, sans-serif" font-weight="700" font-size="9" fill="%23bae6fd">INITIATIVE</text></svg>',
  'ai leap africa': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="200" height="50"><rect width="200" height="50" rx="8" fill="%230f766e"/><path d="M25 15 L35 35 L45 15 L50 25 L35 40 L20 25 Z" fill="%232dd4bf"/><text x="60" y="32" font-family="system-ui, sans-serif" font-weight="900" font-size="16" fill="%23ffffff">AI LEAP</text><text x="135" y="32" font-family="system-ui, sans-serif" font-weight="600" font-size="14" fill="%2399f6e4">AFRICA</text></svg>',
  'diginno technologies africa': 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 50" width="210" height="50"><rect width="210" height="50" rx="8" fill="%23312e81"/><rect x="20" y="16" width="8" height="18" rx="2" fill="%23818cf8"/><rect x="31" y="12" width="8" height="26" rx="2" fill="%23c7d2fe"/><rect x="42" y="20" width="8" height="14" rx="2" fill="%236366f1"/><text x="58" y="28" font-family="system-ui, sans-serif" font-weight="900" font-size="14" fill="%23ffffff">DIGINNO</text><text x="125" y="28" font-family="system-ui, sans-serif" font-weight="600" font-size="13" fill="%23a5b4fc">AFRICA</text></svg>',
}

export const INITIAL_OFFICIAL_PARTNERS: Record<string, OfficialPartnerData> = {
  emp_evi_1: {
    id: 'emp_evi_1',
    company_name: 'Empowered Vision Initiative',
    contact_name: 'Lead Administrator',
    email: 'info@empoweredvision.org',
    phone: '+233 24 555 0192',
    partner_type: 'CSR / Foundation',
    badge: 'Foundational Partner',
    logo_url: DEFAULT_PARTNER_LOGOS['empowered vision initiative'],
    website_url: 'https://empoweredvision.org',
    company_size: '50-200 employees',
    hiring_volume: '5-10 roles/year',
    notes: 'Official foundational partner driving youth leadership, career empowerment, and mentorship initiatives across Africa.',
    status: 'APPROVED',
    submitted_at: '2026-08-25T10:00:00.000Z',
  },
  emp_aileap_2: {
    id: 'emp_aileap_2',
    company_name: 'AI Leap Africa',
    contact_name: 'Ecosystem Director',
    email: 'contact@aileap.africa',
    phone: '+233 20 888 0143',
    partner_type: 'Ecosystem / Incubator',
    badge: 'Innovation Partner',
    logo_url: DEFAULT_PARTNER_LOGOS['ai leap africa'],
    website_url: 'https://aileap.africa',
    company_size: '10-50 employees',
    hiring_volume: '5-10 roles/year',
    notes: 'Strategic ecosystem partner accelerating AI skills adoption, tech mentorship, and career readiness for young innovators.',
    status: 'APPROVED',
    submitted_at: '2026-09-04T10:00:00.000Z',
  },
  emp_diginno_3: {
    id: 'emp_diginno_3',
    company_name: 'Diginno Technologies Africa',
    contact_name: 'Partnerships Lead',
    email: 'partners@diginno.africa',
    phone: '+233 27 777 0981',
    partner_type: 'Enterprise Partner',
    badge: 'Tech Partner',
    logo_url: DEFAULT_PARTNER_LOGOS['diginno technologies africa'],
    website_url: 'https://diginno.africa',
    company_size: '50-200 employees',
    hiring_volume: '10+ roles/year',
    notes: 'Enterprise partner focusing on digital transformation, tech skills training, and direct talent pipeline integration.',
    status: 'APPROVED',
    submitted_at: '2026-09-14T10:00:00.000Z',
  },
}

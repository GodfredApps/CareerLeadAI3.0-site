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

export const INITIAL_OFFICIAL_PARTNERS: Record<string, OfficialPartnerData> = {
  emp_evi_1: {
    id: 'emp_evi_1',
    company_name: 'Empowered Vision Initiative',
    contact_name: 'Lead Administrator',
    email: 'info@empoweredvision.org',
    phone: '+233 24 555 0192',
    partner_type: 'CSR / Foundation',
    badge: 'Foundational Partner',
    logo_url: '',
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
    logo_url: 'https://www.aileapafrica.org/images/logo.png',
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
    logo_url: 'https://skecspzevwmempzsywwp.supabase.co/storage/v1/object/public/images/partner-logos/1790331374433_yku10.png',
    website_url: 'https://diginno.africa',
    company_size: '50-200 employees',
    hiring_volume: '10+ roles/year',
    notes: 'Enterprise partner focusing on digital transformation, tech skills training, and direct talent pipeline integration.',
    status: 'APPROVED',
    submitted_at: '2026-09-14T10:00:00.000Z',
  },
}

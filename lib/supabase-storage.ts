// Supabase Storage URL Helper
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://skecspzevwmempzsywwp.supabase.co'
const STORAGE_BUCKET = 'images'

export const getSupabaseImageUrl = (imageName: string): string => {
  return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${imageName}`
}

// Predefined image URLs for easy access
export const IMAGES = {
  logo: getSupabaseImageUrl('careerlead-ai-logo.png'),
  dashboard: getSupabaseImageUrl('ai-career-dashboard.png'),
} as const
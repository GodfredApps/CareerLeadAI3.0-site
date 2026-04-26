declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, params)
}

export function trackSignupClick(location: string, buttonText: string) {
  trackEvent('signup_click', {
    event_category: 'conversion',
    event_label: buttonText,
    signup_location: location,
  })
}

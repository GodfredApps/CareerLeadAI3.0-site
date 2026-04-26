'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackSignupClick } from '@/lib/analytics'

const PAGE_LABELS: Record<string, string> = {
  '/': 'homepage',
  '/how-it-works': 'how_it_works',
  '/about': 'about',
  '/blog': 'blog',
  '/faq': 'faq',
}

function getButtonText(el: HTMLElement): string {
  return (el.innerText || el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60)
}

function getLocation(el: HTMLElement, pathname: string): string {
  const page = PAGE_LABELS[pathname] ?? pathname.replace(/\//g, '_').slice(1)

  // Check for explicit data-ga-location attribute on the element or its ancestors
  const tagged = el.closest('[data-ga-location]')
  if (tagged instanceof HTMLElement) {
    return `${page}__${tagged.dataset.gaLocation}`
  }

  // Infer from nearest section id
  const section = el.closest('section[id], header[id], nav[id]')
  if (section) {
    return `${page}__${section.id}`
  }

  // Fall back to nav vs body
  const inNav = !!el.closest('header, nav')
  return inNav ? `${page}__nav` : page
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href') ?? ''
      if (!href.includes('/signup')) return

      const location = getLocation(anchor, pathname)
      const buttonText = getButtonText(anchor)
      trackSignupClick(location, buttonText)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [pathname])

  return null
}

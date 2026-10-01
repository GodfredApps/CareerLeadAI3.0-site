'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import { IMAGES } from '@/lib/supabase-storage'
import { ModeToggle } from '@/components/mode-toggle'
import {
  AUTH_LINKS,
  PUBLIC_NAV_LINKS,
  isActiveLink,
  resolveSiteHref,
} from '@/lib/site-nav'

const CURRENT_SITE = 'marketing' as const
const SIGN_IN_HREF = resolveSiteHref(AUTH_LINKS.signIn, CURRENT_SITE)
const SIGN_UP_HREF = resolveSiteHref(AUTH_LINKS.signUp, CURRENT_SITE)

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Shared with the main app's public navbar via lib/site-nav.ts
  const navItems = PUBLIC_NAV_LINKS.map(link => ({
    name: link.name,
    href: resolveSiteHref(link, CURRENT_SITE),
    active: isActiveLink(link, CURRENT_SITE, pathname),
  }))

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-950/80 transition-colors">
      <div className="container flex h-[4.5rem] items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-11 w-11 flex-shrink-0">
              <Image
                src={IMAGES.logo}
                alt="CareerLead AI Logo"
                fill
                className="rounded-xl object-contain"
                priority
              />
            </div>
            <span className="text-lg font-black tracking-tight text-slate-950 dark:text-white">CareerLead AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map(item => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} rounded-full bg-transparent text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-950/50 hover:text-teal-800 dark:hover:text-teal-300 data-[active]:bg-teal-50 dark:data-[active]:bg-teal-950/60 data-[active]:text-teal-800 dark:data-[active]:text-teal-300`}
                      active={item.active}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" className="rounded-full font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                <a href={SIGN_IN_HREF}>{AUTH_LINKS.signIn.name}</a>
              </Button>
              <Button asChild className="rounded-full bg-teal-600 px-5 font-bold text-white shadow-sm hover:bg-teal-700">
                <a href={SIGN_UP_HREF}>{AUTH_LINKS.signUp.name}</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex xl:hidden items-center gap-4">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                {/* Logo in mobile menu */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-10 h-10">
                    <Image
                      src={IMAGES.logo}
                      alt="CareerLead AI Logo"
                      fill
                      className="rounded-md object-contain"
                    />
                  </div>
                  <span className="font-bold text-lg">CareerLead AI</span>
                </div>

                {navItems.map(item => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}

                <div className="h-px bg-border my-2" />
                <Button
                  variant="ghost"
                  className="justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={SIGN_IN_HREF}>{AUTH_LINKS.signIn.name}</a>
                </Button>
                <Button
                  className="justify-start bg-primary hover:bg-primary/90"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={SIGN_UP_HREF}>{AUTH_LINKS.signUp.name}</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar

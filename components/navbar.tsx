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

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Navigation items that are consistent for marketing site
  const getNavItems = () => {
    return [
      { name: 'Home', href: '/' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: "What's New", href: '/whats-new' },
      { name: 'About', href: '/about' },
      { name: 'FAQ', href: '/faq' },
    ]
  }

  const navItems = getNavItems()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-1">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 flex-shrink-0">
              <Image
                src={IMAGES.logo}
                alt="CareerLead AI Logo"
                fill
                className="rounded-lg object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg sm:text-xl">CareerLead AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map(item => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === item.href}
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
              <Button asChild variant="ghost">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}>Sign In</a>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>Sign Up</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
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
                  <a href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}>Sign In</a>
                </Button>
                <Button
                  className="justify-start bg-primary hover:bg-primary/90"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`${process.env.NEXT_PUBLIC_APP_URL}/signup`}>Sign Up</a>
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

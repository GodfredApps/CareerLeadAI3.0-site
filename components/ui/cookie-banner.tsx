"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("careerlead-cookie-consent")
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("careerlead-cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("careerlead-cookie-consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md border border-teal-100 dark:bg-slate-900/90 dark:border-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
              {/* Decorative background blob */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-xl"></div>
              
              <div className="flex-shrink-0 bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full">
                <Cookie className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  We value your privacy
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
                  <Link href="/privacy" className="text-teal-600 hover:underline dark:text-teal-400 font-medium">
                    Read our Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="flex flex-row gap-3 w-full md:w-auto justify-center">
                <Button 
                  variant="outline" 
                  onClick={handleDecline}
                  className="rounded-xl border-gray-200 hover:bg-gray-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  Decline
                </Button>
                <Button 
                  onClick={handleAccept}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 rounded-xl px-6"
                >
                  Accept All
                </Button>
              </div>

              <button 
                onClick={handleDecline}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

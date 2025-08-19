"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"



interface MobileMenuProps {
  scrolled: boolean
}

export function MobileMenu({ scrolled }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="lg:hidden text-gray-900 hover:bg-gray-100 border border-gray-200"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col h-full overflow-y-auto pt-12">
          <nav className="flex flex-col gap-4 px-4">
          <Link
            href="/"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          
          <div className="py-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Services</h3>
            <div className="space-y-1">
              <Link href="/electricity-bill" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>⚡</span><span className="text-sm">Electricity Bill</span>
              </Link>
              <Link href="/water-bill" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>💧</span><span className="text-sm">Water Bill</span>
              </Link>
              <Link href="/broadband-bill" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>📞</span><span className="text-sm">Broadband</span>
              </Link>
              <Link href="/gas-bill" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>🔥</span><span className="text-sm">Gas Bill</span>
              </Link>
              <Link href="/mobile-recharge" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>📱</span><span className="text-sm">Mobile Recharge</span>
              </Link>
              <Link href="/dth-recharge" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>📺</span><span className="text-sm">DTH Recharge</span>
              </Link>
              <Link href="/mobile-bill" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>📋</span><span className="text-sm">Mobile Bill</span>
              </Link>
            </div>
          </div>
          
          <Link
            href="/#about"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          
          <div className="py-2">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Company Policy</h3>
            <div className="space-y-1">
              <Link href="/terms" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>📜</span><span className="text-sm">Terms & Conditions</span>
              </Link>
              <Link href="/refund-policy" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>💰</span><span className="text-sm">Refund Policy</span>
              </Link>
              <Link href="/privacy" className="flex items-center gap-3 px-2 py-2 text-gray-700 hover:text-purple-600 transition-colors" onClick={() => setOpen(false)}>
                <span>🔒</span><span className="text-sm">Privacy Policy</span>
              </Link>
            </div>
          </div>
          
          <Link
            href="/#faqs"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            FAQs
          </Link>
          <Link
            href="/#contact"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="border-t border-gray-200 my-4 mx-2"></div>
          <div className="space-y-4 px-2 pb-6">
            <Link href="/login" onClick={() => setOpen(false)}>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Login
              </Button>
            </Link>
            <Link href="/register" onClick={() => setOpen(false)}>
              <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                Register
              </Button>
            </Link>
          </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}

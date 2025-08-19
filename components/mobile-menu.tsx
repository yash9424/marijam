"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { useAppContext } from "./providers"

export function MobileMenu() {
  const { scrolled } = useAppContext()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`lg:hidden ${scrolled ? "text-gray-900" : "text-white"}`}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="block px-4 py-3 text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
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
          <div className="border-t border-gray-200 my-4"></div>
          <div className="px-4 space-y-4">
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
      </SheetContent>
    </Sheet>
  )
}

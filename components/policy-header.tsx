"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export function PolicyHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MT</span>
            </div>
            <span className="font-bold text-gray-800">MARIJAM TECHNOLOGIES</span>
          </div>
        </div>
      </div>
    </header>
  )
}
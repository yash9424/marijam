import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ScrollAnimation } from "@/components/scroll-animation"
import { HydrationBoundary } from "@/components/hydration-boundary"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head />
      <body className="overflow-x-hidden" suppressHydrationWarning={true}>
        <HydrationBoundary>
          <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            {children}
          </Suspense>
        </HydrationBoundary>
        <ScrollAnimation />
      </body>
    </html>
  )
}
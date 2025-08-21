"use client"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/static-header"
import { SharedFooter } from "@/components/shared-footer"

import { HydrationBoundary } from "@/components/hydration-boundary"

export default function FastagRecharge() {
  return (
    <HydrationBoundary>
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      <SharedHeader />
      
      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
              FASTag
            </span>
            <br />
            <span className="text-gray-900">Recharge</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            <span className="text-cyan-600 font-semibold">Recharge your FASTag wallet instantly</span>, for seamless highway travel experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Recharge FASTag
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3">
            <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
              <img src="/comprehensive-mobile-interface.png" alt="FASTag Recharge Interface" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">FASTag</span> <span className="text-teal-600">Advantages</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">All Banks Supported</h3>
              <p className="text-gray-600">Recharge FASTag from all major banks and wallet providers</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Activation</h3>
              <p className="text-gray-600">Your FASTag balance is updated within seconds</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛣️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Ready</h3>
              <p className="text-gray-600">Never worry about toll payments during your journey</p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
    </HydrationBoundary>
  )
}

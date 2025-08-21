"use client"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/static-header"
import { SharedFooter } from "@/components/shared-footer"

import { HydrationBoundary } from "@/components/hydration-boundary"

export default function PostpaidBill() {
  return (
    <HydrationBoundary>
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      <SharedHeader />
      
      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Postpaid
            </span>
            <br />
            <span className="text-gray-900">Bill Payment</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            <span className="text-blue-600 font-semibold">Clear your postpaid bills instantly</span>, with detailed usage breakdown and rewards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Pay Bill Now
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3">
            <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
              <img src="/comprehensive-mobile-interface.png" alt="Postpaid Bill Payment Interface" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Postpaid</span> <span className="text-purple-600">Benefits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">All Networks</h3>
              <p className="text-gray-600">Support for Airtel, Jio, Vi, BSNL and all major networks</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Usage Analytics</h3>
              <p className="text-gray-600">Detailed breakdown of calls, data, and SMS usage</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cashback Rewards</h3>
              <p className="text-gray-600">Earn cashback and rewards on every bill payment</p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
    </HydrationBoundary>
  )
}

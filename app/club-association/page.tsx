"use client"
import { Button } from "@/components/ui/button"
import { SharedHeader } from "@/components/static-header"
import { SharedFooter } from "@/components/shared-footer"

import { HydrationBoundary } from "@/components/hydration-boundary"

export default function ClubAssociation() {
  return (
    <HydrationBoundary>
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      <SharedHeader />
      
      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Club &
            </span>
            <br />
            <span className="text-gray-900">Association Fees</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            <span className="text-green-600 font-semibold">Pay club and association fees easily</span>, with membership management and event bookings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Pay Fees
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3">
            <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
              <img src="/comprehensive-mobile-interface.png" alt="Club Association Fee Payment Interface" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Club</span> <span className="text-emerald-600">Benefits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sports Clubs</h3>
              <p className="text-gray-600">Pay fees for sports clubs, fitness centers, and recreational facilities</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Membership Management</h3>
              <p className="text-gray-600">Track membership status, renewals, and exclusive benefits</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Bookings</h3>
              <p className="text-gray-600">Book club events, facilities, and special programs seamlessly</p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
    </HydrationBoundary>
  )
}

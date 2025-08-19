"use client"
import { Button } from "@/components/ui/button"
import { StaticHeader } from "@/components/static-header"
import { SharedFooter } from "@/components/shared-footer"

export default function Insurance() {
  return (
    <div className="min-h-screen bg-white">
      <StaticHeader />
      
      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Insurance
            </span>
            <br />
            <span className="text-gray-900">Premium Payment</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            <span className="text-purple-600 font-semibold">Pay insurance premiums effortlessly</span>, with automated renewals and policy management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Pay Premium
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3">
            <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
              <img src="/comprehensive-mobile-interface.png" alt="Insurance Premium Payment Interface" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-purple-600">Insurance</span> <span className="text-pink-600">Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">All Insurance Types</h3>
              <p className="text-gray-600">Life, Health, Motor, and General insurance premium payments</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Auto Renewal</h3>
              <p className="text-gray-600">Set up automatic premium payments and never miss renewals</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Management</h3>
              <p className="text-gray-600">Track all your policies and payment history in one place</p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
"use client"
import { Button } from "@/components/ui/button"
import { StaticHeader } from "@/components/static-header"
import { SharedFooter } from "@/components/shared-footer"

export default function WaterBill() {
  return (
    <div className="min-h-screen bg-white">
      <StaticHeader />
      
      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Water Bill
            </span>
            <br />
            <span className="text-gray-900">Payment</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8">
            <span className="text-blue-600 font-semibold">Pay your water bills effortlessly</span>, anytime and anywhere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3">
            <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
              <img src="/comprehensive-mobile-interface.png" alt="Water Bill Payment Interface" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">Smart Water</span> <span className="text-cyan-600">Bill Solutions</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Processing</h3>
              <p className="text-gray-600">Fast and reliable water bill processing</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multiple Payment Options</h3>
              <p className="text-gray-600">Pay using cards, net banking, UPI</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Friendly</h3>
              <p className="text-gray-600">Optimized for mobile devices</p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </div>
  )
}
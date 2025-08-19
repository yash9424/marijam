"use client"

import Image from "next/image"

export function PhoneDisplay() {
  return (
    <div className="flex-1 flex justify-center relative animate-slide-in-right">
      <div className="relative max-w-full">
        {/* Main phone with enhanced effects */}
        <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3 relative hover:scale-105 transition-all duration-700 scroll-animate group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
            <Image
              src="/comprehensive-mobile-interface.png"
              alt="MARIJAM TECHNOLOGIES App Interface"
              className="w-full h-full object-cover object-top"
              width={400}
              height={800}
              priority
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
          </div>
          {/* Floating elements around main phone */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80 shadow-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse opacity-70 shadow-lg"></div>
        </div>

        {/* Side phone with enhanced styling */}
        <div className="hidden md:block absolute -right-20 top-16 w-64 h-[480px] bg-gradient-to-b from-gray-800 via-black to-gray-900 rounded-[2.5rem] shadow-xl p-2 opacity-80 hover:opacity-100 transition-all duration-500 scroll-animate-delayed hover:scale-105 group">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-500/20 to-blue-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative shadow-inner">
            <Image
              src="/comprehensive-mobile-interface.png"
              alt="MARIJAM TECHNOLOGIES App Interface"
              className="w-full h-full object-cover object-top"
              width={400}
              height={800}
              priority
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

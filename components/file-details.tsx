"use client"

import Image from "next/image"

export function FileDetails() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="w-48 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-4">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
            <Image
              src="/comprehensive-mobile-interface.png"
              alt="MARIJAM TECHNOLOGIES App Interface"
              className="w-full h-full object-cover object-top"
              width={400}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
        <div className="absolute -right-8 -top-4 w-32 h-64 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-3 opacity-80">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
            <Image
              src="/comprehensive-mobile-interface.png"
              alt="MARIJAM TECHNOLOGIES App Interface"
              className="w-full h-full object-cover object-top"
              width={400}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

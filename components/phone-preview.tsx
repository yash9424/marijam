"use client"

import Image from "next/image"

export function PhonePreview() {
  return (
    <div className="flex justify-center">
      <div className="w-72 h-[500px] bg-black rounded-[3rem] shadow-2xl p-2">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
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
  )
}

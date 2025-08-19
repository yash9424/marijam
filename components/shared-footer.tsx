import Link from "next/link"

export function SharedFooter() {
  return (
    <footer className="bg-gray-100 py-12 scroll-animate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                <div className="text-white font-bold">MT</div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 text-lg leading-tight">MARIJAM</span>
                <span className="font-semibold text-gray-600 text-sm leading-tight">TECHNOLOGIES</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Mobile recharge & bill payments is fastest growing online/offline business of India because of vast
              population and growing communication needs about 97% of users are using prepaid connection. Because of
              high user density and good margin mobile recharge has become fastest growing business. Lots of
              entrepreneurs are investing in mobile recharge business.
            </p>
            <div className="text-gray-600 text-sm">
              <h4 className="font-semibold text-gray-800 mb-2">MARIJAM TECHNOLOGIES PRIVATE LIMITED</h4>
              <p className="leading-relaxed">
                Floor No.: Basement
                <br />
                Building No./Flat No.: Seat No 9, Ideashacks
                <br />
                Metro Piller No 564, Mathura Road
                <br />
                City/Town/Village: Faridabad - 121003
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-blue-500">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/#faqs" className="hover:text-blue-500">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-4">Download App</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <img src="/app-store-badge.png" alt="Download on App Store" className="h-10" />
              </a>
              <a href="#" className="block">
                <img src="/google-play-badge.png" alt="Get it on Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2025 <span className="font-semibold">MARIJAM TECHNOLOGIES PRIVATE LIMITED</span>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronDown, Sparkles, Zap } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"

export function SharedHeader() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [policyOpen, setPolicyOpen] = useState(false)
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null)
  const [policyTimeout, setPolicyTimeout] = useState<NodeJS.Timeout | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout)
      setServicesTimeout(null)
    }
    setServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
    setServicesTimeout(timeout)
  }

  const handlePolicyMouseEnter = () => {
    if (policyTimeout) {
      clearTimeout(policyTimeout)
      setPolicyTimeout(null)
    }
    setPolicyOpen(true)
  }

  const handlePolicyMouseLeave = () => {
    const timeout = setTimeout(() => {
      setPolicyOpen(false)
    }, 150)
    setPolicyTimeout(timeout)
  }

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] border-b shadow-2xl transition-colors duration-300 ${scrolled ? "bg-white/90 border-gray-200" : "backdrop-blur-xl bg-white/5 border-white/10"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <div className="text-white font-bold text-xl relative z-10">MT</div>
              <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-300 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="flex flex-col group-hover:scale-105 transition-transform duration-300">
            <span className={`font-bold text-2xl leading-tight drop-shadow-lg tracking-wide transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>MARIJAM</span>
            <span className={`font-semibold text-sm leading-tight drop-shadow-md tracking-wider transition-colors duration-300 ${scrolled ? "text-gray-700" : "text-white/90"}`}>TECHNOLOGIES</span>
          </div>
        </Link>

        <nav className={`hidden lg:flex items-center gap-1 transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
          <Link href="/" className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
            <span className="relative z-10">Home</span>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
          </Link>
          
          <div className="relative" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
            <button className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`} onClick={() => setServicesOpen(!servicesOpen)}>
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""} ${scrolled ? "text-gray-900" : "text-white"}`} />
            </button>
            
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-[101]" style={{ animation: 'fadeInDown 0.3s ease-out' }}>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-3">
                    <Link href="/electricity-bill" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">⚡</span>
                      <span className="font-medium">Electricity Bill</span>
                    </Link>
                    <Link href="/water-bill" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">💧</span>
                      <span className="font-medium">Water Bill Payment</span>
                    </Link>
                    <Link href="/broadband-bill" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">📞</span>
                      <span className="font-medium">Landline / Broadband</span>
                    </Link>
                    <Link href="/gas-bill" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-orange-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">🔥</span>
                      <span className="font-medium">Gas Bill Payment</span>
                    </Link>
                    <Link href="/mobile-recharge" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">📱</span>
                      <span className="font-medium">Mobile Recharge</span>
                    </Link>
                    <Link href="/dth-recharge" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">📺</span>
                      <span className="font-medium">DTH Recharge</span>
                    </Link>
                    <Link href="/mobile-bill" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group/item">
                      <span className="text-xl group-hover/item:scale-110 transition-transform duration-300">📋</span>
                      <span className="font-medium">Mobile Bill Payment</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/#about" className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
            <span className="relative z-10">About</span>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
          </Link>
          
          <div className="relative" onMouseEnter={handlePolicyMouseEnter} onMouseLeave={handlePolicyMouseLeave}>
            <button className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`} onClick={() => setPolicyOpen(!policyOpen)}>
              <span>Company Policy</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${policyOpen ? "rotate-180" : ""} ${scrolled ? "text-gray-900" : "text-white"}`} />
            </button>
            
            {policyOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-[101]" style={{ animation: 'fadeInDown 0.3s ease-out' }}>
                <div className="p-6 space-y-3">
                  <Link href="/terms" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">📜</span>
                    <span className="font-medium">Terms & Conditions</span>
                  </Link>
                  <Link href="/refund-policy" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">💰</span>
                    <span className="font-medium">Refund Policy</span>
                  </Link>
                  <Link href="/privacy" className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔒</span>
                    <span className="font-medium">Privacy Policy</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/#faqs" className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
            <span className="relative z-10">FAQs</span>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
          </Link>
          
          <Link href="/#contact" className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}>
            <span className="relative z-10">Contact</span>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/register">
            <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group font-semibold">
              <span className="relative z-10">Register</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="absolute top-2 right-2 w-4 h-4 text-yellow-200 opacity-0 group-hover:opacity-100 animate-pulse" />
            </Button>
          </Link>
          <Link href="/login">
            <Button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden group font-semibold">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </Link>
        </div>

        <MobileMenu scrolled={scrolled} />
      </div>
    </header>
  )
}
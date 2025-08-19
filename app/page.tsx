"use client"
import { ChevronDown, Star, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [servicesTimeout, setServicesTimeout] = useState<NodeJS.Timeout | null>(null);
  const [policyTimeout, setPolicyTimeout] = useState<NodeJS.Timeout | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServicesMouseEnter = () => {
    if (servicesTimeout) {
      clearTimeout(servicesTimeout);
      setServicesTimeout(null);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
    setServicesTimeout(timeout);
  };

  const handlePolicyMouseEnter = () => {
    if (policyTimeout) {
      clearTimeout(policyTimeout);
      setPolicyTimeout(null);
    }
    setPolicyOpen(true);
  };

  const handlePolicyMouseLeave = () => {
    const timeout = setTimeout(() => {
      setPolicyOpen(false);
    }, 150);
    setPolicyTimeout(timeout);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated background elements for funky design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-ping"></div>
      </div>

  <header className={`fixed top-0 left-0 w-full z-[100] border-b shadow-2xl transition-colors duration-300 ${mounted && scrolled ? "bg-white/90 border-gray-200" : "backdrop-blur-xl bg-white/5 border-white/10"}`}>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 hover:rotate-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="text-white font-bold text-xl relative z-10">MT</div>
                <Sparkles className="absolute top-2 right-2 w-4 h-4 text-yellow-300 animate-pulse" />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col group-hover:scale-105 transition-transform duration-300">
              <span className={`font-bold text-2xl leading-tight drop-shadow-lg tracking-wide transition-colors duration-300 ${mounted && scrolled ? "text-gray-900" : "text-white"}`}>MARIJAM</span>
              <span className={`font-semibold text-sm leading-tight drop-shadow-md tracking-wider transition-colors duration-300 ${mounted && scrolled ? "text-gray-700" : "text-white/90"}`}>TECHNOLOGIES</span>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className={`hidden lg:flex items-center gap-1 transition-colors duration-300 ${mounted && scrolled ? "text-gray-900" : "text-white"}`}>
            {/* Home Link */}
            <a 
              href="#" 
              className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <span className="relative z-10">Home</span>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mounted && scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""} ${mounted && scrolled ? "text-gray-900" : "text-white"}`}
                />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-[101]"
                  style={{ animation: 'fadeInDown 0.3s ease-out' }}
                >
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

            {/* About Link */}
            <a 
              href="#about" 
              className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <span className="relative z-10">About</span>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mounted && scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
            </a>
            
            {/* Company Policy Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handlePolicyMouseEnter}
              onMouseLeave={handlePolicyMouseLeave}
            >
              <button
                className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                onClick={() => setPolicyOpen(!policyOpen)}
              >
                <span>Company Policy</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${policyOpen ? "rotate-180" : ""} ${mounted && scrolled ? "text-gray-900" : "text-white"}`}
                />
              </button>
              
              {policyOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-[101]"
                  style={{ animation: 'fadeInDown 0.3s ease-out' }}
                >
                  <div className="p-6 space-y-3">
                    <Link
                      href="/terms"
                      className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">📜</span>
                      <span className="font-medium">Terms & Conditions</span>
                    </Link>
                    <Link
                      href="/refund-policy"
                      className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">💰</span>
                      <span className="font-medium">Refund Policy</span>
                    </Link>
                    <Link
                      href="/privacy"
                      className="flex items-center gap-3 p-3 rounded-2xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">🔒</span>
                      <span className="font-medium">Privacy Policy</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* FAQs Link */}
            <a 
              href="#faqs" 
              className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <span className="relative z-10">FAQs</span>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mounted && scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
            </a>
            
            {/* Contact Link */}
            <a 
              href="#contact" 
              className={`relative group px-4 py-3 rounded-2xl transition-all duration-300 font-medium ${mounted && scrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            >
              <span className="relative z-10">Contact</span>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mounted && scrolled ? "bg-gray-100" : "bg-gradient-to-r from-cyan-400/20 to-blue-500/20"}`}></div>
            </a>
          </nav>

          {/* Action Buttons */}
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

          {/* Mobile Menu */}
          <MobileMenu scrolled={mounted && scrolled} />
        </div>
      </header>

      <section className="relative z-0 flex flex-col lg:flex-row items-center justify-between px-6 py-12 pt-32 max-w-7xl mx-auto">
        <div className="flex-1 max-w-lg animate-slide-in-left text-center lg:text-left mb-12 lg:mb-0">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                One app
              </span>
              <br />
              <span className="text-white">for all your</span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                utility needs
              </span>
            </h1>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
            <div className="absolute top-8 -right-8 w-6 h-6 bg-pink-400 rounded-full animate-ping opacity-60"></div>
          </div>
          <p className="text-white/90 text-lg md:text-xl mb-8 drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-200 to-pink-200 bg-clip-text text-transparent font-semibold">
              Recharges & Bill Payments
            </span>
            , and a lot more
          </p>          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl animate-pulse w-full sm:w-auto">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-transparent w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="relative max-w-full">
            {/* Main phone with enhanced effects */}
            <div className="w-64 sm:w-72 md:w-80 h-[500px] sm:h-[550px] md:h-[600px] bg-gradient-to-b from-gray-900 via-black to-gray-800 rounded-[3.5rem] shadow-2xl p-3 relative hover:scale-105 transition-transform duration-700 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative shadow-inner">
                <img
                  src="/comprehensive-mobile-interface.png"
                  alt="MARIJAM TECHNOLOGIES App Interface"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10"></div>
              </div>
              {/* Floating elements around main phone */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-80 shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-pulse opacity-70 shadow-lg"></div>
            </div>

            {/* Side phone with enhanced styling - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute -right-20 top-16 w-64 h-[480px] bg-gradient-to-b from-gray-800 via-black to-gray-900 rounded-[2.5rem] shadow-xl p-2 opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-500/20 to-blue-500/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative shadow-inner">
                <img
                  src="/comprehensive-mobile-interface.png"
                  alt="MARIJAM TECHNOLOGIES App Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute top-32 -left-12 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-32 -right-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full animate-bounce opacity-50 shadow-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Supported Operators</h3>
            <p className="text-gray-600">Recharge with all major network providers</p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            {/* Jio */}
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-lg">Jio</div>
            </div>

            {/* Airtel */}
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-sm">airtel</div>
            </div>

            {/* Vi */}
            <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-lg">Vi</div>
            </div>

            {/* BSNL */}
            <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-sm">BSNL</div>
            </div>

            {/* TATA */}
            <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-xs">TATA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-pink-500">Recharges</span> & <span className="text-blue-400">Bill Payments</span>
            </h2>
            <p className="text-gray-600">Recharge and pay every bill in one place</p>
          </div>

          {/* Service Grid with improved spacing */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            {/* Row 1 */}
            <ServiceCard icon="📱" title="Mobile Recharge" color="bg-blue-100" href="/mobile-recharge" />
            <ServiceCard icon="🚗" title="DTH" color="bg-gray-100" href="/dth-recharge" />
            <ServiceCard icon="💡" title="Electricity" color="bg-yellow-100" href="/electricity-bill" />
            <ServiceCard icon="💰" title="Loan Repayment" color="bg-green-100" href="/loan-repayment" />

            {/* Row 2 */}
            <ServiceCard icon="⛽" title="Piped Gas" color="bg-orange-100" href="/piped-gas" />
            <ServiceCard icon="📱" title="Postpaid Bill" color="bg-pink-100" href="/postpaid-bill" />
            <ServiceCard icon="🏪" title="Fastag Recharge" color="bg-blue-100" href="/fastag-recharge" />
            <ServiceCard icon="🛡️" title="Insurance" color="bg-purple-100" href="/insurance" />

            {/* Row 3 */}
            <ServiceCard icon="📺" title="Cable TV" color="bg-red-100" href="/cable-tv" />
            <ServiceCard icon="📶" title="Broadband" color="bg-blue-100" href="/broadband-bill" />
            <ServiceCard icon="🚰" title="Water" color="bg-cyan-100" href="/water-bill" />
            <ServiceCard icon="💳" title="Credit Card" color="bg-green-100" href="/credit-card" />

            {/* Row 4 */}
            <ServiceCard icon="🏛️" title="Municipal Tax" color="bg-purple-100" href="/municipal-tax" />
            <ServiceCard icon="⚽" title="Club & Association" color="bg-green-100" href="/club-association" />
            <ServiceCard icon="🎓" title="Education" color="bg-blue-100" href="/education" />
            <ServiceCard icon="🏥" title="Hospital" color="bg-pink-100" href="/hospital" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-pink-500">About</span> <span className="text-blue-400">Company</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MARIJAM TECHNOLOGIES PRIVATE LIMITED is a leading and API Recharge Company in India. We provide the
                facility of our own technology that makes our customers happy. We provide all types of recharge and bill
                payment services, facilities, electricity bill payment services, with the help of our platform, all
                recharge and bill payment services. We provide our customers with the best service and the best offers
                by using our single API for multiple services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our aim is to make recharge facilities accessible to everyone. We offer unlimited recharge for all
                prepaid/postpaid operator according to the client, transaction, data, WhatsApp, SMS, Recharge, Bills,
                Payment, DTH and all other services. We provide our customers with the best service and the best offers
                by using our single API for multiple services.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-4">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/comprehensive-mobile-interface.png"
                      alt="MARIJAM TECHNOLOGIES App Interface"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute -right-8 -top-4 w-32 h-64 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-3 opacity-80">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/comprehensive-mobile-interface.png"
                      alt="MARIJAM TECHNOLOGIES App Interface"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-48 h-80 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-4">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/comprehensive-mobile-interface.png"
                      alt="MARIJAM TECHNOLOGIES App Interface"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="absolute -right-8 -top-4 w-32 h-64 bg-gradient-to-b from-gray-900 to-black rounded-3xl shadow-lg p-3 opacity-80">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <img
                      src="/comprehensive-mobile-interface.png"
                      alt="MARIJAM TECHNOLOGIES App Interface"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-pink-500">Terms</span> & <br />
                <span className="text-blue-400">Conditions</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-sm leading-relaxed">
                  By using FentraPay Services, you are agreeing to be bound by the following terms and conditions. The
                  following terminology applies to these Terms and Conditions.
                </p>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Eligibility</h3>
                  <p className="text-sm leading-relaxed">
                    You must be at least 18 years old to use our services. By using our services, you represent and
                    warrant that you meet this age requirement and have the legal capacity to enter into these terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-16 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Company</span> <span className="text-blue-600">FAQs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">What is MARIJAM TECHNOLOGIES PRIVATE LIMITED ?</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-600 leading-relaxed">
                  We are extremely driven professionals serving with a vision to deliver our best to enrich the customer
                  experience. In fact, MARIJAM TECHNOLOGIES PRIVATE LIMITED works as multi-utility and 24*7 recharge
                  platform that leads recharge and bill payment service provider. DTH & Data Card operators through
                  internet & mobile channels. MARIJAM TECHNOLOGIES is a highly reliable website servicing more than 1.5
                  million plus registered customers and offers various payment options to its customers for real time
                  recharge which includes all types of Credit Cards, Debit Cards, Net Banking & Wallets as per their
                  convenience. Here, we are focused on Any Time Recharge (ATR) service platform to get the benefit of it
                  in a simpler way with no restrictions of regions and time frame. MARIJAM TECHNOLOGIES PRIVATE LIMITED
                  is committed to deliver the fast & secure zone to its customers to transact safely with 24*7 support
                  team.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-blue-500 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      😊
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-800">1057</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-500 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      🎯
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-800">28</div>
                  <div className="text-gray-600">Active Services</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-500 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      👥
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-800">869</div>
                  <div className="text-gray-600">Active Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-500 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      ☕
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-800">901</div>
                  <div className="text-gray-600">Bonus Rewards</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-72 h-[500px] bg-black rounded-[3rem] shadow-2xl p-2">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/comprehensive-mobile-interface.png"
                    alt="MARIJAM TECHNOLOGIES App Interface"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Customers</span> <span className="text-blue-600">Feedback</span>
            </h2>
            <p className="text-gray-600">Every feedback is valuable for us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Anuj Choudhary" rating={5} feedback="Excellent should in every one" avatar="👨" />
            <TestimonialCard
              name="Ankita Bhat"
              rating={4}
              feedback="Good performance & excellent customer support"
              avatar="👩"
            />
            <TestimonialCard name="Sandeep Kumar" rating={5} feedback="Excellent platform to recharge" avatar="👨" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Recharge</span> <span className="text-blue-600">Operators</span>
            </h2>
            <p className="text-gray-600">Mobile recharge & bill payments operators</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <OperatorCard name="Airtel" color="bg-red-500" />
            <OperatorCard name="BSNL" color="bg-gray-500" />
            <OperatorCard name="Vi" color="bg-purple-600" />
            <OperatorCard name="Jio" color="bg-blue-600" />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-50 scroll-animate">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Contact</span> <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-gray-600">
              Got a Question? We&apos;d love to hear from you. Send us a message and we will respond you as soon as possible
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>This question is about...</option>
                <option>Technical Support</option>
                <option>Billing</option>
                <option>General Inquiry</option>
              </select>
              <textarea
                placeholder="Your Message..."
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <div className="text-center">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg">
                  Send Your Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
                  <a href="#" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Contact Us
                  </a>
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
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  rating: number
  feedback: string
  avatar: string
}

function TestimonialCard({ name, rating, feedback, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
        {avatar}
      </div>
      <h3 className="font-semibold text-gray-800 mb-2">{name}</h3>
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-600 text-sm italic">&quot;{feedback}&quot;</p>
    </div>
  )
}

interface OperatorCardProps {
  name: string
  color: string
}

function OperatorCard({ name, color }: OperatorCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className={`${color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
        <span className="text-white font-bold text-sm sm:text-base md:text-lg">{name.charAt(0)}</span>
      </div>
      <h3 className="text-center font-semibold text-gray-800 text-sm sm:text-base">{name}</h3>
    </div>
  )
}

interface ServiceCardProps {
  icon: string
  title: string
  color: string
  href: string
}

function ServiceCard({ icon, title, color, href }: ServiceCardProps) {
  return (
    <Link href={href} className="flex flex-col items-center text-center group cursor-pointer p-2 sm:p-4">
      <div
        className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform shadow-sm`}
      >
        <span className="text-xl sm:text-2xl">{icon}</span>
      </div>
      <span className="text-xs sm:text-sm text-gray-700 font-medium leading-tight">{title}</span>
    </Link>
  )
}



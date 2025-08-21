"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    captcha: "",
  })

  const captchaCode = "09e99d"

  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate captcha
    if (formData.captcha !== captchaCode) {
      toast({
        variant: "destructive",
        title: "Invalid Captcha",
        description: "Please enter the correct captcha code."
      })
      return
    }
    
    try {
      // Handle registration logic here
      console.log("Registration data:", formData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Registration successful - redirect to login
      toast({
        title: "Registration Successful!",
        description: "Please login with your credentials."
      })
      
      setTimeout(() => router.push("/login"), 1500)
    } catch (error) {
      console.error("Registration failed:", error)
      toast({
        variant: "destructive",
        title: "Registration Failed",
        description: "Please try again later."
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex items-center justify-center p-4">
      {/* Registration Form */}
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-600">Join MARIJAM TECHNOLOGIES today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email ID *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Password *</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Captcha *</label>
              <div className="flex items-center gap-4 mb-3 justify-center">
                <div className="bg-gray-100 px-6 py-3 rounded-lg border-2 border-dashed border-gray-300">
                  <span className="font-mono text-2xl font-bold text-gray-800 tracking-wider">{captchaCode}</span>
                </div>
              </div>
              <div className="max-w-md mx-auto">
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 text-center"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="max-w-md mx-auto">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Register
              </Button>
            </div>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-600 hover:text-purple-700 font-semibold">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

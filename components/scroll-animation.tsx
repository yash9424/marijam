"use client"

import { useEffect, useState } from "react"

export function ScrollAnimation() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're now on the client side and add js-enabled class
    setIsClient(true)
    document.documentElement.classList.add('js-enabled')
  }, [])

  useEffect(() => {
    // Only run the intersection observer after hydration is complete
    if (!isClient) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    // Small delay to ensure hydration is complete
    const timeoutId = setTimeout(() => {
      const animateElements = document.querySelectorAll(".scroll-animate, .scroll-animate-delayed")
      animateElements.forEach((el) => observer.observe(el))
      
      // Immediately show elements that are already in view
      animateElements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animate')
        }
      })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [isClient])

  return null
}

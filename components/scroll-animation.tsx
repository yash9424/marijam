"use client"

import { useEffect, useState } from "react"

export function ScrollAnimation() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're now on the client side
    setIsClient(true)
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
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [isClient])

  return null
}

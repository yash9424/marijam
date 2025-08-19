"use client"

import { createContext, useContext, useEffect, useState } from "react"

interface AppContextType {
  scrolled: boolean
  isLoaded: boolean
}

const AppContext = createContext<AppContextType>({
  scrolled: false,
  isLoaded: false
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log("AppProvider mounted")
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    // Force immediate load
    setIsLoaded(true)
    handleScroll()
    
    window.addEventListener("scroll", handleScroll)

    return () => {
      console.log("AppProvider cleanup")
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppContext.Provider value={{ scrolled, isLoaded }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

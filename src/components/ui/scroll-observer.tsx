"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface ScrollObserverContextType {
    scrollY: number
}

const ScrollObserverContext = createContext<ScrollObserverContextType>({
    scrollY: 0,
})

export function ScrollObserver({ children }: { children: React.ReactNode }) {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return <ScrollObserverContext.Provider value={{ scrollY }}>{children}</ScrollObserverContext.Provider>
}

export function useScrollObserver() {
    return useContext(ScrollObserverContext)
}


"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

interface HoverEffectProps {
    items: {
        title: string
        description: string
        icon: string
    }[]
    className?: string
}

export function HoverEffect({ items, className }: HoverEffectProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseLeave = () => setHoveredIndex(null)
        const container = containerRef.current

        if (container) {
            container.addEventListener("mouseleave", handleMouseLeave)
            return () => {
                container.removeEventListener("mouseleave", handleMouseLeave)
            }
        }
    }, [])

    return (
        <div ref={containerRef} className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
            {items.map((item, idx) => (
                <div key={idx} className="relative group block p-2 h-full w-full" onMouseEnter={() => setHoveredIndex(idx)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-zinc-800/[0.8] block rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="relative h-full w-full p-4 rounded-lg bg-zinc-900 overflow-hidden">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">{item.icon}</span>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="mt-2 text-zinc-400 text-sm">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}


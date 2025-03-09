"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AnimatedTooltipProps {
    items: {
        id: number
        name: string
        designation: string
        image: string
    }[]
    className?: string
}

export function AnimatedTooltip({ items, className }: AnimatedTooltipProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div className={cn("flex flex-row items-center gap-2", className)}>
            {items.map((item, idx) => (
                <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="relative h-8 w-8 rounded-full overflow-hidden">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    {hoveredIndex === idx && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 10,
                                },
                            }}
                            exit={{ opacity: 0, y: 20, scale: 0.6 }}
                            className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                        >
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 transform rotate-45 w-2 h-2 bg-black" />
                            <div className="flex flex-col items-center">
                                <p className="text-sm font-bold text-white">{item.name}</p>
                                <p className="text-xs text-zinc-400">{item.designation}</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    )
}


"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    link: string
}

interface FloatingNavProps {
    navItems: NavItem[]
    className?: string
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)

            const sections = navItems.map((item) => {
                const element = document.querySelector(item.link)
                if (!element) return { id: item.link, top: 0, bottom: 0 }

                const rect = element.getBoundingClientRect()
                return {
                    id: item.link,
                    top: rect.top + window.scrollY - 100,
                    bottom: rect.bottom + window.scrollY - 100,
                }
            })

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i]
                if (window.scrollY >= section.top && window.scrollY < section.bottom) {
                    setActiveIndex(i)
                    document.title = `${navItems[i].name}`
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            document.title = "Portfolio"
        }
    }, [navItems])

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className={cn(
                "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
                scrollY > 100 ? "opacity-100" : "opacity-0",
                className,
            )}
        >
            <div className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-full p-2 flex items-center justify-center shadow-lg">
                <nav className="flex items-center gap-1">
                    {navItems.map((item, index) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className={cn(
                                "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200",
                                activeIndex === index ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" })
                            }}
                        >
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute inset-0 bg-white/10 rounded-full"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}


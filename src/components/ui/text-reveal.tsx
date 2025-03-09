"use client"

import { useEffect, useState } from "react"
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText"

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, delay * 1000)

        return () => clearTimeout(timer)
    }, [delay])

    return (
        <div className="relative overflow-hidden">
            <div
                className={`transition-transform duration-1000 ${isVisible ? "translate-y-0" : "translate-y-full"}`}
            >
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={6}
                    showBorder={false}
                    className="text-center px-1"
                    textClassName={className}
                >
                    {text}
                </GradientText>
            </div>
        </div>
    )
}


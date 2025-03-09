"use client"

import { useEffect, useState } from "react"

interface TextGenerateEffectProps {
    words: string
    className?: string
}

export function TextGenerateEffect({ words, className }: TextGenerateEffectProps) {
    const [displayedText, setDisplayedText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isGenerating, setIsGenerating] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isGenerating) {
                    setIsGenerating(true)
                }
            },
            { threshold: 0.5 },
        )

        const element = document.getElementById("text-generate-effect")
        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [isGenerating])

    useEffect(() => {
        if (!isGenerating) return

        if (currentIndex < words.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(words.substring(0, currentIndex + 1))
                setCurrentIndex(currentIndex + 1)
            }, 5)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, isGenerating, words])

    return (
        <div id="text-generate-effect" className={className}>
            {displayedText}
            {isGenerating && currentIndex < words.length && (
                <span className="inline-block w-1 h-4 ml-0.5 bg-blue-500 animate-blink" />
            )}
        </div>
    )
}


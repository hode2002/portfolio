"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"
import { cn } from "@/lib/utils"

type AnimationVariant = "fadeIn" | "slideUp" | "slideRight" | "slideLeft" | "scale" | "stagger"

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    variant?: AnimationVariant
    delay?: number
    duration?: number
    threshold?: number
    once?: boolean
}

const variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    fadeIn: {
        opacity: 1,
        y: 0,
    },
    slideUp: {
        opacity: 1,
        y: 0,
    },
    slideRight: {
        opacity: 1,
        x: 0,
    },
    slideLeft: {
        opacity: 1,
        x: 0,
    },
    scale: {
        opacity: 1,
        scale: 1,
    },
    stagger: {
        opacity: 1,
        y: 0,
    },
}

const getInitialState = (variant: AnimationVariant): Variant => {
    switch (variant) {
        case "fadeIn":
            return { opacity: 0, y: 0 }
        case "slideUp":
            return { opacity: 0, y: 50 }
        case "slideRight":
            return { opacity: 0, x: -50 }
        case "slideLeft":
            return { opacity: 0, x: 50 }
        case "scale":
            return { opacity: 0, scale: 0.8 }
        case "stagger":
            return { opacity: 0, y: 20 }
        default:
            return { opacity: 0, y: 20 }
    }
}

export function ScrollReveal({
    children,
    className,
    variant = "fadeIn",
    delay = 0,
    duration = 0.5,
    threshold = 0.1,
    once = true,
}: ScrollRevealProps) {
    const controls = useAnimation()
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                    controls.start(variant)
                } else if (!entry.isIntersecting && !once && isVisible) {
                    setIsVisible(false)
                    controls.start("hidden")
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -100px 0px",
            },
        )

        const currentRef = ref.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [controls, isVisible, once, threshold, variant])

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: getInitialState(variant),
                [variant]: variants[variant],
            }}
            transition={{
                duration,
                delay,
                ease: "easeOut",
                staggerChildren: variant === "stagger" ? 0.1 : 0,
            }}
            className={cn("", className)}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                stagger: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}


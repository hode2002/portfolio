"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Facebook, Github, Mail } from "lucide-react"
import { Spotlight } from "./ui/spotlight"
import { TextReveal } from "./ui/text-reveal"
import { motion } from "framer-motion"
import { useScrollObserver } from "./ui/scroll-observer"
import { FloatingNav } from "@/components/ui/floating-nav"
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles"
import { LinkPreview } from "@/components/ui/link-preview"

const navItems = [
    {
        name: "Home",
        link: "#home",
    },
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    // {
    //     name: "Contact",
    //     link: "#contact",
    // },
]

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    const { scrollY } = useScrollObserver()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <section
            id="home"
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
        >
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(59, 130, 246, 0.15)" />
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <TextReveal text="Hồ Văn Dễ" className="text-4xl md:text-6xl font-bold tracking-tighter" />
                    <TextReveal
                        text="Web Developer"
                        className="text-xl md:text-2xl font-medium"
                        delay={0.5}
                    />

                    <div className="w-[40rem] h-40 relative">
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        <SparklesCore
                            background="transparent"
                            minSize={0.4}
                            maxSize={1}
                            particleDensity={1200}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />

                        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>

                    <div
                        className="flex items-center justify-center space-x-4 mt-6 animate-fade-in"
                        style={{ animationDelay: "1s", animationFillMode: "forwards", opacity: 0 }}
                    >
                        <LinkPreview
                            url="https://github.com/hode2002"
                            className="text-white rounded-full p-2 border border-white/20 hover:bg-white/10 transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </LinkPreview>
                        <LinkPreview
                            url="https://www.facebook.com/hvd.070602"
                            imageSrc="/images/fb-profile.png"
                            isStatic
                            className="text-white rounded-full p-2 border border-white/20 hover:bg-white/10 transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </LinkPreview>
                        <LinkPreview
                            url="https://zalo.me/0916777730"
                            className="text-white rounded-full p-2 border border-white/20 hover:bg-white/10 transition-colors">
                            <Image width={200} height={200} src="/zalo.svg" alt="zalo" className="bg-white rounded-full w-5 h-5" />
                            <span className="sr-only">Zalo</span>
                        </LinkPreview>
                        <LinkPreview
                            url="mailto:hvd07062002@gmail.com"
                            imageSrc="/images/email.png"
                            isStatic
                            className="text-white rounded-full p-2 border border-white/20 hover:bg-white/10 transition-colors">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </LinkPreview>
                    </div>
                </div>
            </div>
            <FloatingNav navItems={navItems} />

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                    opacity: scrollY > 100 ? 0 : 1,
                }}
                transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                }}
            >
                <ChevronDown className="h-6 w-6 text-white/70" />
            </motion.div>
        </section>
    )
}
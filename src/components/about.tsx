"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TracingBeam } from "./ui/tracing-beam"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { ScrollReveal } from "./ui/scroll-reveal"
import Image from "next/image"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import TextPressure from "@/blocks/TextAnimations/TextPressure/TextPressure"

export default function About() {
    const aboutText = `As a recent graduate, I am looking forward to working in a professional environment where I can apply 
    the knowledge I have gained in school. I specialize in React, Next.js, Node.js, Nest.js and modern web technologies.
    I am always eager to learn and improve my programming skills to write clean, maintainable code.`

    return (
        <section id="about" className="py-24 bg-zinc-950">
            <TracingBeam className="px-6">
                <div className="container mx-auto max-w-4xl">
                    <ScrollReveal variant="slideUp">
                        <div className="relative">
                            <TextPressure
                                text="About Me"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#ffffff"
                                strokeColor="#ff0000"
                                className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal variant="fadeIn" delay={0.2}>
                        <Card className="border-none bg-zinc-900/50 backdrop-blur-sm">
                            <CardContent className="p-6 md:p-10">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <ScrollReveal variant="slideRight" delay={0.3}>
                                        <div className="relative aspect-square overflow-hidden rounded-xl">
                                            <div className="absolute inset-0 bg-gradient-xy from-blue-500 to-purple-600"></div>
                                            <Image
                                                src="/images/avatar.png"
                                                alt="Profile"
                                                quality={100}
                                                fill
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                    </ScrollReveal>
                                    <ScrollReveal variant="slideLeft" delay={0.4}>
                                        <div>
                                            <TextGenerateEffect words={aboutText} className="text-zinc-300" />
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                <HoverBorderGradient
                                                    containerClassName="rounded-full"
                                                    className="px-3 py-1 bg-[#21162a] text-purple-400 rounded-full text-sm"
                                                >
                                                    <span>Frontend</span>
                                                </HoverBorderGradient>
                                                <HoverBorderGradient
                                                    containerClassName="rounded-full"
                                                    className="px-3 py-1 bg-[#0f2418] text-green-400 rounded-full text-sm"
                                                >
                                                    <span>Backend</span>
                                                </HoverBorderGradient>
                                                <HoverBorderGradient
                                                    containerClassName="rounded-full"
                                                    className="px-3 py-1 bg-[#131c2a] text-blue-400 rounded-full text-sm"
                                                >
                                                    <span>Web Development</span>
                                                </HoverBorderGradient>
                                                <HoverBorderGradient
                                                    containerClassName="rounded-full"
                                                    className="px-3 py-1 bg-[#291f10] text-amber-400 rounded-full text-sm"
                                                >
                                                    <span> API Development</span>
                                                </HoverBorderGradient>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                </div>
            </TracingBeam>
        </section>
    )
}


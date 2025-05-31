"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TracingBeam } from "./ui/tracing-beam"
import { ScrollReveal } from "./ui/scroll-reveal"
import Image from "next/image"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText"
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus"

export default function About() {
    const aboutText = `I want to be a Fullstack Intern who works hard, learns quickly, and is ready to try new technologies like Next.js, NestJS, and Docker. I hope to join real projects to get more experience, solve problems better, and learn from skilled developers.`

    return (
        <section id="about" className="py-24 bg-zinc-950">
            <TracingBeam className="px-6">
                <div className="container mx-auto max-w-4xl">
                    <ScrollReveal variant="slideUp" className="text-center text-white mb-12">
                        <TrueFocus
                            sentence="About Me"
                            manualMode={false}
                            blurAmount={5}
                            borderColor="#00D9FF"
                            animationDuration={2}
                            pauseBetweenAnimations={0.5}
                        />
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
                                        <BlurText
                                            text={aboutText}
                                            delay={50}
                                            animateBy="words"
                                            direction="bottom"
                                            className="text-xl text-white"
                                        />
                                        <div>
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


"use client"
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard"
import { ScrollReveal, StaggerItem } from "./ui/scroll-reveal"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Image from "next/image"
import ColourfulText from "@/components/ui/colourful-text"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { useEffect, useState } from "react"
import skillsData from "@/data/skills.json"
import technologiesData from "@/data/technologies.json"
import random from "random"

const { skills } = skillsData;
const { technologies } = technologiesData;

export default function Skills() {
    const [shuffledTechs, setShuffledTechs] = useState(technologies);

    useEffect(() => {
        const shuffledTechsArray = random.shuffler(technologies)
        setShuffledTechs(shuffledTechsArray());
    }, []);

    return (
        <section id="skills" className="py-24 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal variant="slideUp">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative mb-12 z-2 font-sans">
                        <ColourfulText text="Skills" /> & <ColourfulText text="Technologies" />
                    </h1>
                </ScrollReveal>

                <ScrollReveal variant="stagger" className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {skills.map((skill, idx) => (
                            <StaggerItem key={idx} delay={idx * 0.1}>
                                <BackgroundGradient containerClassName="p-[1px]">
                                    <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                                        <div className="flex items-center gap-2">
                                            <span className="text-3xl">{skill.icon}</span>
                                            <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                                        </div>
                                        <p className="mt-2 text-zinc-400 text-sm">{skill.description}</p>
                                    </SpotlightCard>
                                </BackgroundGradient>
                            </StaggerItem>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal variant="fadeIn" delay={0.3}>
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-zinc-300">
                        <ColourfulText text="Technologies" />
                    </h3>
                    <div className="rounded-md overflow-hidden">
                        <div className="mt-6 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
                            {shuffledTechs.map((tech, idx) => (
                                <div key={idx} className="flex justify-center text-center">
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-black text-white flex items-center space-x-1 md:space-x-2"
                                    >
                                        <Image src={tech.image} width={32} height={32} alt={tech.name} className={tech?.className ?? ''} />
                                        <span className="text-xs md:text-sm text-nowrap">{tech.name}</span>
                                    </HoverBorderGradient>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}

"use client"
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard"
import { ScrollReveal, StaggerItem } from "./ui/scroll-reveal"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import Image from "next/image"
import ColourfulText from "@/components/ui/colourful-text"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const skills = [
    {
        title: "Programming Language",
        description: "TypeScript, PHP, Python",
        icon: "🧑‍💻",
    },
    {
        title: "Frontend",
        description: "TypeScript, ReactJS, NextJS, Tailwind CSS",
        icon: "💻",
    },
    {
        title: "Backend",
        description: "NodeJS, Express, NestJS, Prisma, REST API",
        icon: "⚙️",
    },
    {
        title: "Databases",
        description: "MySQL, MongoDB, Redis",
        icon: "🛢️",
    },
    {
        title: "DevOps",
        description: "Docker, Render, Vercel",
        icon: "🚀",
    },
    {
        title: "Tools",
        description: "Git, GitHub, VS Code, Postman, Insomnia",
        icon: "🔧",
    },
]

const technologies = [
    {
        name: "Typescript",
        image: "/technologies/typescript.svg",
    },
    {
        name: "ReactJS",
        image: "/technologies/react.png",
    },
    {
        name: "NextJS",
        image: "/technologies/nextjs.svg",
    },
    {
        name: "NodeJS",
        image: "/technologies/nodejs.png",
    },
    {
        name: "NestJS",
        image: "/technologies/nestjs.svg",
    },
    {
        name: "JWT",
        image: "/technologies/json-web-token.svg",
    },
    {
        name: "MySQL",
        image: "/technologies/mysql.svg",
    },
    {
        name: "MongoDB",
        image: "/technologies/mongodb.svg",
    },
    {
        name: "Redis",
        image: "/technologies/redis.svg",
    },
    {
        name: "Tailwind CSS",
        image: "/technologies/tailwind-css.svg",
    },
    {
        name: "Shadcn UI",
        image: "/technologies/shadcn-ui.png",
    },
    {
        name: "Redux Toolkit",
        image: "/technologies/redux.svg",
    },
    {
        name: "Zustand",
        image: "/technologies/zustand.svg",
    },
    {
        name: "React Query",
        image: "/technologies/react-query.png",
    },
    {
        name: "ExpressJS",
        image: "/technologies/express.svg",
        className: "bg-white rounded-full p-1",
    },
    {
        name: "Prisma",
        image: "/technologies/prisma-orm.svg",
        className: "bg-white rounded-full p-1",
    },
    {
        name: "Docker",
        image: "/technologies/docker.svg",
    },
    {
        name: "Vercel",
        image: "/technologies/vercel.png",
    },
    {
        name: "Render",
        image: "/technologies/render.png",
    },
    {
        name: "Postman",
        image: "/technologies/postman.png",
    },
    {
        name: "Git",
        image: "/technologies/git.svg",
    },
    {
        name: "GitHub",
        image: "/technologies/github.png",
    },
    {
        name: "NPM",
        image: "/technologies/npm.png",
    },
]

export default function Skills() {
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
                            <StaggerItem key={idx}>
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
                            {technologies.map((tech, idx) => (
                                <div className="flex justify-center text-center" key={idx}>
                                    <HoverBorderGradient
                                        containerClassName="rounded-full"
                                        as="button"
                                        className="bg-black text-white flex items-center space-x-1 md:space-x-2"
                                    >
                                        <Image src={tech.image} width={32} height={32} alt={tech.name} className={tech?.className ?? ''} />
                                        <span className="text-xs md:text-sm">{tech.name}</span>
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

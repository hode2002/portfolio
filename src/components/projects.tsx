"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { BackgroundGradient } from "./ui/background-gradient"
import { AnimatedTooltip } from "./ui/animated-tooltip"
import { ScrollReveal, StaggerItem } from "./ui/scroll-reveal"
import { LinkPreview } from "@/components/ui/link-preview"
import Image from "next/image"
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText"

const projects = [

    {
        title: "Smart Tech Store",
        description: "A retail website for electronic devices, supporting search, reviews, ordering, and online payment.",
        image: "/images/smart-tech-store.gif",
        tags: ["Typescript", "Nextjs", "Shadcn", "Tailwind CSS", "Redux", "Nestjs", "MySQL", "MongoDB", "Redis"],
        github: "https://github.com/hode2002/smart-tech-store",
        demo: "https://smart-tech-store.vercel.app",
    },
    {
        title: "Youtube Clone",
        description: "A YouTube clone website with features for uploading videos, watching videos, creating playlists, commenting, and liking videos.",
        image: "/images/youtube.webp",
        tags: ["Typescript", "Nextjs", "ReactPlayer", "Tailwind CSS", "Zustand", "Nestjs", "MongoDB", "Redis"],
        github: "https://github.com/hode2002/youtube-clone",
        demo: "https://youtu.be/lf3AO2-CQnQ",
    },
    {
        title: "Shopping Online",
        description:
            "Full featured online shopping with product management, shopping cart, payment processing, store opening and admin panel.",
        image: "/placeholder.png",
        tags: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
        github: "https://github.com/hode2002/Shopping-MVC",
        demo: "",
    },
]

const people = [
    {
        id: 1,
        name: "Lam Thanh Vy",
        designation: "Developer",
        image: "/images/collaborator-1.png",
    },
    {
        id: 2,
        name: "Nguyen Thanh Loi",
        designation: "Developer",
        image: "/images/collaborator-2.png",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="pt-24 pb-48 bg-zinc-950">
            <div className="container mx-auto px-4 md:px-6">
                <ScrollReveal variant="slideUp">
                    <div className="flex justify-center items-center">
                        <BlurText
                            text="Featured Projects"
                            delay={100}
                            animateBy="words"
                            direction="bottom"
                            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
                        />
                    </div>
                    <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
                        Here are some of my recent projects that showcase my skills and expertise.
                    </p>
                </ScrollReveal>

                <ScrollReveal variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <StaggerItem key={index}>
                            <BackgroundGradient className="rounded-[22px] p-0.5 bg-zinc-900">
                                <Card className="rounded-[20px] border-0 bg-zinc-900 h-full">
                                    <CardHeader className="p-0">
                                        <div className="overflow-hidden rounded-t-[20px] relative h-48">
                                            <Image
                                                src={project.image || "/placeholder.png"}
                                                alt={project.title}
                                                fill
                                                quality={100}
                                                className="object-cover transition-transform hover:scale-105 duration-500"
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <CardTitle className="text-xl mb-2 text-white">{project.title}</CardTitle>
                                        <CardDescription className="text-zinc-400 mb-4">{project.description}</CardDescription>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => (
                                                <Badge key={i} variant="secondary" className="bg-zinc-800 text-zinc-300">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        {index === 2 && (
                                            <div className="mt-4">
                                                <p className="text-sm text-zinc-400 mb-2">Collaborators:</p>
                                                <div className="flex text-zinc-400">
                                                    <AnimatedTooltip items={people} />
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="p-6 pt-0 flex gap-2">
                                        <Button variant="outline" size="sm" className="gap-1" asChild>
                                            <LinkPreview url={project.github} _target="_blank" >
                                                <Github className="h-4 w-4" />
                                                Code
                                            </LinkPreview>
                                        </Button>
                                        {project.demo && <Button size="sm" className="gap-1" asChild>
                                            <LinkPreview url={project.demo} _target="_blank">
                                                <ExternalLink className="h-4 w-4" />
                                                Live Demo
                                            </LinkPreview>
                                        </Button>}
                                    </CardFooter>
                                </Card>
                            </BackgroundGradient>
                        </StaggerItem>
                    ))}
                </ScrollReveal>
            </div >
        </section >
    )
}

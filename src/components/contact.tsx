"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SparklesCore } from "./ui/sparkles"
import { cn } from "@/lib/utils"
import { ScrollReveal } from "./ui/scroll-reveal"
import { useFormStatus } from "react-dom"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" className={cn("w-full", pending && "opacity-70 cursor-not-allowed")} disabled={pending}>
            {pending ? "Sending..." : "Send Message"}
        </Button>
    )
}

export default function Contact() {
    return (
        <section id="contact" className="pt-24 pb-48 relative bg-black">
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticles"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={70}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <ScrollReveal variant="slideUp">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
                    <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
                        Have a project in mind or want to chat? Feel free to reach out!
                    </p>
                </ScrollReveal>

                <ScrollReveal variant="scale" delay={0.2} className="max-w-md mx-auto">
                    <Card className="border-none bg-zinc-900/70 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Contact Form</CardTitle>
                            <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div>
                                    <Input placeholder="Your Name" name="name" required className="bg-zinc-800/50 border-zinc-700" />
                                </div>
                                <div>
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        name="email"
                                        required
                                        className="bg-zinc-800/50 border-zinc-700"
                                    />
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Your Message"
                                        name="message"
                                        required
                                        className="min-h-[120px] bg-zinc-800/50 border-zinc-700"
                                    />
                                </div>
                                <SubmitButton />
                            </form>
                        </CardContent>
                    </Card>
                </ScrollReveal>
            </div>
        </section>
    )
}


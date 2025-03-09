"use client"

import * as React from "react"
import { useFormStatus } from "react-dom"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = React.forwardRef<HTMLFormElement, React.FormHTMLAttributes<HTMLFormElement>>(
    ({ className, ...props }, ref) => {
        return <form ref={ref} className={cn("space-y-6", className)} {...props} />
    },
)
Form.displayName = "Form"

const FormField = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div ref={ref} className={cn("space-y-2", className)} {...props} />
    },
)
FormField.displayName = "FormField"

const FormLabel = React.forwardRef<React.ElementRef<typeof Label>, React.ComponentPropsWithoutRef<typeof Label>>(
    ({ className, ...props }, ref) => {
        return <Label ref={ref} className={cn("text-sm font-medium", className)} {...props} />
    },
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div ref={ref} className={cn("mt-2", className)} {...props} />
    },
)
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        return <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
    },
)
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        return <p ref={ref} className={cn("text-sm font-medium text-destructive", className)} {...props} />
    },
)
FormMessage.displayName = "FormMessage"

function FormSubmit({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
                pending && "opacity-70 cursor-not-allowed",
                className,
            )}
            disabled={pending}
            {...props}
        >
            {pending ? "Submitting..." : children}
        </button>
    )
}
FormSubmit.displayName = "FormSubmit"

export { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, FormSubmit }


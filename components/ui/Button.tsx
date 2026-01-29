import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
    className?: string
    asMotion?: boolean
    href?: string
    target?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asMotion = true, href, target, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-full font-sans font-bold transition-all focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-95"

        const variants = {
            primary: "bg-brand-gold text-brand-wine hover:bg-brand-gold/90 shadow-lg shadow-brand-gold/20",
            outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-wine",
            ghost: "text-brand-gold hover:bg-brand-gold/10"
        }

        const sizes = {
            sm: "px-4 py-2 text-xs",
            md: "px-6 py-3 text-sm",
            lg: "px-8 py-4 text-base md:text-lg"
        }

        const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

        if (href) {
            const Component = asMotion ? motion.a : "a"
            return (
                <Component
                    href={href}
                    target={target}
                    className={combinedClassName}
                    {...(asMotion ? { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } } : {})}
                    {...(props as Record<string, unknown>)}
                >
                    {props.children}
                </Component>
            )
        }

        if (asMotion) {
            return (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={combinedClassName}
                    {...(props as HTMLMotionProps<"button">)}
                />
            )
        }

        return (
            <button
                ref={ref}
                className={combinedClassName}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"

export { Button }

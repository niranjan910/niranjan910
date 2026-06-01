"use client";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?:    "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

    const variants = {
      primary:
        "bg-[rgba(8,5,20,0.75)] border border-orange/85 text-white shadow-[0_0_10px_rgba(255,138,61,0.4),0_0_28px_rgba(255,138,61,0.16)] hover:shadow-[0_0_20px_rgba(255,138,61,0.6),0_0_50px_rgba(255,138,61,0.25)] hover:-translate-y-0.5",
      ghost:
        "bg-[rgba(8,5,20,0.75)] border border-purple/80 text-white shadow-[0_0_10px_rgba(200,92,255,0.35),0_0_28px_rgba(200,92,255,0.14)] hover:shadow-[0_0_20px_rgba(200,92,255,0.55),0_0_50px_rgba(200,92,255,0.22)] hover:-translate-y-0.5",
      outline:
        "bg-transparent border border-white/10 text-text-secondary hover:border-purple/40 hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;

"use client";

import {
  forwardRef,
  type ReactNode,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";
import Link from "next/link";
import { motion, type MotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/design-system";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-50 overflow-hidden",
  {
    variants: {
      variant: {
        solid:
          "bg-gradient-to-r from-teal-500 to-cyan-400 text-slate-900 shadow-[0_4px_24px_rgba(20,184,166,0.3),0_1px_2px_rgba(0,0,0,0.2)_inset,0_1px_0_rgba(255,255,255,0.1)_inset] hover:shadow-[0_6px_28px_rgba(20,184,166,0.45),0_1px_2px_rgba(0,0,0,0.2)_inset,0_1px_0_rgba(255,255,255,0.1)_inset]",
        ghost:
          "border border-teal-500/30 bg-teal-500/5 text-teal-300 hover:border-teal-400/60 hover:bg-teal-500/10 hover:text-white hover:shadow-[0_0_16px_rgba(20,184,166,0.2)]",
      },
      size: {
        md: "px-6 py-2.5 text-sm",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

type PrimaryButtonBaseProps = VariantProps<typeof buttonVariants> & {
  children: ReactNode;
  className?: string;
};

type ButtonOrLinkProps =
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

type PrimaryButtonProps = PrimaryButtonBaseProps & ButtonOrLinkProps;

const PrimaryButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PrimaryButtonProps
>(({ variant, size, className, children, href, ...props }, ref) => {
    const motionProps: MotionProps = {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      transition: { type: "spring", stiffness: 400, damping: 17 },
    };

    const commonProps = {
      className: cn(buttonVariants({ variant, size, className })),
      ...motionProps,
    };

    const content = (
      <>
        {children}
        {variant === "solid" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full"
          />
        )}
      </>
    );

    const Component = href ? "a" : "button";

    // Internal links: use Next.js Link wrapped with framer-motion
    if (Component === "a" && href?.toString().startsWith("/")) {
      const MotionLink = motion(Link);

      return (
        <MotionLink
          href={href}
          ref={ref as any}
          {...commonProps}
          {...(props as any)}
        >
          {content}
        </MotionLink>
      );
    }

    const MotionComponent = motion(Component);

    return (
      <MotionComponent
        ref={ref as any}
        {...commonProps}
        {...(props as any)}
        {...(Component === "a" ? { href } : {})}
      >
        {content}
      </MotionComponent>
    );
  });

PrimaryButton.displayName = "PrimaryButton";

export default PrimaryButton;

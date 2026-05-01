import React from "react";
import clsx from "clsx";

type ButtonVariant =
    | "primary"
    | "secondary"
    | "primary-outline"
    | "secondary-outline"
    | "whitebg";

type ButtonSize = "sm" | "md" | "lg" | "xl";

type Props = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    className?: string;
};

const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-out transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.03] active:scale-[0.97]";

const variants: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white border border-primary hover:bg-secondary hover:border-secondary hover:shadow-lg hover:shadow-primary/30",

    "primary-outline":
        "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",

    secondary:
        "bg-secondary text-white border border-secondary hover:bg-primary hover:border-primary hover:shadow-lg hover:shadow-secondary/30",

    "secondary-outline":
        "bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white",
    whitebg: "bg-white text-primary border border-white hover:bg-transparent hover:border-white hover:text-white hover:shadow-lg hover:shadow-secondary/30",
};

const sizes: Record<ButtonSize, string> = {
    sm: "h-10 px-6 text-sm",
    md: "h-11 px-8 text-sm",
    lg: "h-12 px-10 text-base",
    xl: "h-14 px-12 text-lg",
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    disabled = false,
    className,
}: Props) {
    return (
        <button
            disabled={disabled}
            className={clsx(
                baseStyles,
                variants[variant],
                sizes[size],
                "before:absolute before:inset-0 before:-translate-x-full before:bg-linear-to-r before:from-transparent before:via-white/30 before:to-transparent before:opacity-0 hover:before:translate-x-full hover:before:opacity-100 before:transition-all before:duration-700 cursor-pointer text-nowrap",
                className
            )}
        >
            {children}
        </button>
        // <button
        //   disabled={disabled}
        //   className={clsx(
        //     baseStyles,
        //     variants[variant],
        //     sizes[size],
        //     className
        //   )}
        // >
        //   {children}
        // </button>
    );
}
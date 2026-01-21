import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import './Atomic.css'; // We'll create this for component-specific styles

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl";

    const variants = {
        primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg shadow-[var(--shadow-glow)]",
        secondary: "bg-[var(--surface)] text-[var(--text-main)] border border-[var(--glass-border)] hover:bg-[var(--bg-app)]",
        ghost: "bg-transparent text-[var(--text-main)] hover:bg-[var(--glass)]",
        glass: "glass-panel text-[var(--text-main)] hover:bg-[var(--surface-translucent)]"
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-11 px-5 text-base",
        lg: "h-14 px-8 text-lg"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.96 }}
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const Card = ({
    children,
    className,
    glass = false,
    interactive = false,
    ...props
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={interactive ? { y: -2, boxShadow: "var(--shadow-md)" } : {}}
            className={clsx(
                "p-5 rounded-2xl transition-all duration-300",
                glass ? "glass-panel" : "bg-[var(--surface)] shadow-sm",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

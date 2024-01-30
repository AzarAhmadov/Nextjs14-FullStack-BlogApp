'use client'

import { motion } from "framer-motion"

const Template = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.main
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }} 
            transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.9 }}
        >
            {children}
        </motion.main>
    );
};

export default Template;

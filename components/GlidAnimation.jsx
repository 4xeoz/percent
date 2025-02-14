"use client"
import React from 'react';
import { motion } from 'framer-motion';

const GlidAnimation = ({ children }) => {
    const variants =
    {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
    }


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

export default GlidAnimation;

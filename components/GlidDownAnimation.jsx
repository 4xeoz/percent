"use client"
import React from 'react';
import { motion } from 'framer-motion';

const GlidAnimation = ({ children }) => {
  const variants =  
     {
        hidden: { opacity: 0, y: -50, },
        visible: { opacity: 1, y: 0, },
      }


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default GlidAnimation;

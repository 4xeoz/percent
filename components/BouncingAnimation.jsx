"use client"
import React from 'react';
import { motion } from 'framer-motion';

const BouncingAnimation = ({ children }) => {
  return (
    <motion.div
      animate={{ y: [0, 30, 0] }}
      transition={{
        duration: 0.8,               
        repeat: Infinity,            
        repeatDelay: 0.2, 
        ease: "easeInOut"            
      }}
    >
      {children}
    </motion.div>
  );
};

export default BouncingAnimation;

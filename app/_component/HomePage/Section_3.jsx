"use client"
import React, { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Section_3 = forwardRef((props, ref) => {
  const [isLeft, setIsLeft] = useState(true)

  return (
    <div ref={ref} >
      
      <div className="flex items-center justify-center h-96">
        <div className="flex items-center justify-center  border-4 border-black p-2 rounded-full">
        <div className="relative w-[18rem] md:w-[40rem] h-20 md:h-24 rounded-full  overflow-hidden">
          <motion.div
            layout
            initial={false}
            animate={{ x: isLeft ? "0%" : "100%" }}
            className="absolute inset-y-0 w-1/2 m-0 bg-red-600 border-2 border-black rounded-full"
          />
          <button
            onClick={() => setIsLeft(!isLeft)}
            className="relative z-10 w-full h-full flex items-center text-black"
          >
            <span className={`flex-1 text-center ${isLeft ? "font-bold" : ""}`}>Light</span>
            <span className={`flex-1 text-center ${!isLeft ? "font-bold" : ""}`}>Dark</span>
          </button>
        </div>
        </div>
      </div>

      <div className="mt-8">
        <div className='flex items-center justify-around space-x-4'>
          <p className="underline">In App</p>
          <p className="underline">Widget</p>
        </div>
        <div className='flex items-center justify-around space-x-4'>
          <AnimatePresence mode="wait">
            {isLeft ? (
              <motion.img
                key="light1"
                src="/AppLightMode.png"
                alt="App Light Mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className=" w-[40%] md:w-[20rem] h-full object-cover"
              />
            ) : (
              <motion.img
                key="dark1"
                src="/AppDarkMode.png"
                alt="App Dark Mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[40%] md:w-[20rem] h-full object-cover"
              />
            )}
          </AnimatePresence>

          {/* Animate second image */}
          <AnimatePresence mode="wait">
            {isLeft ? (
              <motion.img
                key="light2"
                src="/WidgetLightMode.png"
                alt="Widget Light Mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[40%] md:w-[20rem] h-full object-cover"
              />
            ) : (
              <motion.img
                key="dark2"
                src="/WidgetDarkMode.png"
                alt="Widget Dark Mode"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[40%] md:w-[20rem] h-full object-cover"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>

  )
})

export default Section_3

"use client"
import React from 'react'
import { ChevronDown } from "lucide-react"
import { NumberTicker } from '@/components/magicui/number-ticker'
import GlidAnimation from '@/components/GlidAnimation'
import BouncingAnimation from '@/components/BouncingAnimation'

const Section_1 = ({ onScrollClick }) => {
  return (
  <GlidAnimation>
    <div className=" min-h-[90vh] flex flex-col items-center justify-center relative px-4">
      <div className="text-center space-y-4 ">
        <NumberTicker
        value={100}
        className="text-[6rem] md:text-[14rem] leading-none font-normal"
        />
        <span className='text-[6rem] md:text-[14rem] leading-none font-normal'>%</span>
        

        <h2 className="text-[#DC2626] text-2xl md:text-5xl font-bold">GAIN CONTROL</h2>

        <p className=" text-2xl md:text-5xl font-normal">over your month</p>
      </div>

      <div className="mt-20">
        <BouncingAnimation>
        <button
          className=" w-16 md:w-24 h-16 md:h-24 rounded-full bg-[#DC2626] flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
          aria-label="Scroll down"
          onClick={onScrollClick}
        >
          <ChevronDown className="w-12 h-12 text-black" />
        </button>
        </BouncingAnimation>
      </div>
    </div>
  </GlidAnimation>
  )
}

export default Section_1
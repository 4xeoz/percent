"use client"
import Section_1 from './Section_1'
import Section_2 from './Section_2'
import Section_3 from './Section_3'
import Section_4 from './Section_4'
import GlidAnimation from '@/components/GlidAnimation'
import React, { useRef } from 'react';


const HomePage = () => {
  const section3Ref = useRef(null);

  const scrollToSection3 = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <Section_1 onScrollClick={scrollToSection3} />
        <Section_2 />
        <GlidAnimation>
          <Section_3 ref={section3Ref} />
        </GlidAnimation>
        <Section_4 />
    </>
  )
}

export default HomePage
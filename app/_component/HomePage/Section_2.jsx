"use client"

import { useRef, useState, useEffect, use } from "react"
import { motion, useScroll } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const lineColors = [
  "rgba(102, 51, 51, 1)",   
  "rgba(102, 51, 51, 0.8)", 
  "rgba(102, 51, 51, 0.6)", 
  "rgba(102, 51, 51, 0.4)", 
  "rgba(102, 51, 51, 0.2)", 
]

/**
 * Circle component that animates in when its turn is triggered.
 * @param {number} circleNumber - The overall index of the circle.
 * @param {number} circleIndex - The index of the circle in its line.
 * @param {number} lineIndex - Which line this circle is on.
 * @param {boolean} visible - Whether the circle should be shown.
 * @param {number} circlesPerLine - The dynamic number of circles per line.
 */

function Circle({ circleNumber, circleIndex, lineIndex, visible, circlesPerLine }) {
  return (
    <motion.div
      className=""
      style={{ left: `${(circleIndex / (circlesPerLine - 1)) * 100}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        className="w-16 md:w-24 h-16 md:h-24 rounded-full"
        style={{ backgroundColor: lineColors[lineIndex] }}
      />
    </motion.div>
  )
}

export default function Section_2() {
  const TOTAL_LINES = 5
  const containerRef = useRef(null)



  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });


  
  const circlesPerLine = isLarge ? 8 : isMedium ? 5 : isSmall ? 4 : 8;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [2, -0],
  });

  const totalCircles = circlesPerLine * TOTAL_LINES;
  const [visibleCircles, setVisibleCircles] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const newVisible = Math.floor(latest * totalCircles);
      setVisibleCircles((prev) => Math.max(prev, newVisible));
    });
    return () => unsubscribe();
  }, [scrollYProgress, totalCircles]);

  return (
    <section className="py-20">
      <div className="px-4">
        <div ref={containerRef} className="flex flex-col items-center space-y-10">
          {Array.from({ length: TOTAL_LINES }).map((_, lineIndex) => (
            <div key={lineIndex} className="w-full flex justify-between">
              {Array.from({ length: circlesPerLine }).map((_, circleIndex) => {
                const circleNumber = lineIndex * circlesPerLine + circleIndex;
                const isVisible = circleNumber < visibleCircles;
                return (
                  <Circle
                    key={circleNumber}
                    circleNumber={circleNumber}
                    circleIndex={circleIndex}
                    lineIndex={lineIndex}
                    visible={isVisible}
                    circlesPerLine={circlesPerLine}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

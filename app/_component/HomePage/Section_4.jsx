"use client"

import GlidAnimation from "@/components/GlidAnimation"
import { useMediaQuery } from "react-responsive"

const Section_4 = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" })

  return (
    <div className="my-24 md:my-48 flex flex-col gap-24 md:gap-48 min-h-screen items-center justify-center p-4">
      <GlidAnimation>
        {isLargeScreen ? (
          <div className="flex max-w-5xl flex-col lg:flex-row bg-[rgb(235,235,235)] p-8 md:p-16 gap-8 md:gap-16 rounded-3xl shadow-lg border-2 border-white">
            <div className="w-full lg:w-1/3 max-w-[280px] mx-auto">
              <img src="/AppScreenshot.png" alt="App Screenshot" className="rounded-3xl object-cover w-full h-auto" />
            </div>
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 lg:w-2/3 lg:pl-12 xl:pl-20">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Make Everyday Count</h1>
              <div className="space-y-2 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>Percent transforms the month into a simple grid of dots—each one a reminder of what&apos;s left.</p>
                <p>As the dots fill, so does your opportunity to take action.</p>
                <p>No distractions. No wasted days. Just a clear path forward.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex max-w-5xl flex-row bg-[rgb(235,235,235)] rounded-3xl shadow-lg border-2 border-white overflow-hidden">
            <div className="w-[100%] relative">
              <img
                src="/AppScreenshot.png"
                alt="App Screenshot"
                className="absolute top-0 left-0 w-full h-full object-cover object-left"
              />
            </div>
            <div className="w-full p-8 flex flex-col justify-center">
              <h1 className="text-2xl font-bold tracking-tight mb-4">Make Everyday Count</h1>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>Percent transforms the month into a simple grid of dots—each one a reminder of what&apos;s left.</p>
                <p>As the dots fill, so does your opportunity to take action.</p>
                <p>No distractions. No wasted days. Just a clear path forward.</p>
              </div>
            </div>
          </div>
        )}
      </GlidAnimation>

      <GlidAnimation>
        {isLargeScreen ? (
          <div className="flex max-w-5xl flex-col lg:flex-row bg-[rgb(235,235,235)] p-8 md:p-16 gap-8 md:gap-16 rounded-3xl shadow-lg border-2 border-white">
            <div className="flex flex-col justify-center space-y-4 md:space-y-6 lg:w-2/3 lg:pr-12 xl:pr-20">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">A Simple Reminder, Every Midnight</h1>
              <div className="space-y-2 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  At 12:00 AM, Percent sends a notification showing how much of the month has passed—helping you stay
                  aware and make the most of what&apos;s left.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 max-w-[280px] mx-auto">
              <img
                src="/NotificationScreenshot.png"
                alt="Notification Screenshot"
                className="rounded-3xl object-cover w-full h-auto"
              />
            </div>
          </div>
        ) : (
          <div className="flex max-w-5xl flex-row bg-[rgb(235,235,235)] rounded-3xl shadow-lg border-2 border-white overflow-hidden">
            <div className="w-[100%] relative">
              <img
                src="/NotificationScreenshot.png"
                alt="Notification Screenshot"
                className="absolute top-0 left-0 w-full h-full object-cover object-left"
              />
            </div>
            <div className="w-full p-8 flex flex-col justify-center">
              <h1 className="text-2xl font-bold tracking-tight mb-4">A Simple Reminder, Every Midnight</h1>
              <div className="space-y-2 text-muted-foreground text-sm">
                <p>
                  At 12:00 AM, Percent sends a notification showing how much of the month has passed—helping you stay
                  aware and make the most of what&apos;s left.
                </p>
              </div>
            </div>
          </div>
        )}
      </GlidAnimation>
    </div>
  )
}

export default Section_4


"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  {
    title: "Up to 15% off Voucher",
    desc: "On all types of products",
    img: "/girl with bags.png",
  },
  {
    title: "Big Sale 20% Voucher",
    desc: "Latest gadgets available",
    img: "/elict.png",
  },
  {
    title: "Fashion Week Voucher",
    desc: "Trending outfits",
    img: "/man_with_bags-removebg-preview.png",
  },
  {
    title: "Smart Devices Voucher",
    desc: "Upgrade your lifestyle",
    img: "/pngtree-smart-watch-white-color-png-image_16057996-removebg-preview.png",
  },
]

export function Slider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
 <div className="relative flex-1">
  <div className="relative bg-linear-to-r from-[#87d1dc] to-blue-300 overflow-hidden flex flex-col md:flex-row items-center md:items-center justify-between
                  h-100 sm:h-112.5 md:h-120 px-4 md:px-8 lg:px-16 py-6 md:py-8">

    {/* LEFT CONTENT */}
    <div className="flex flex-col md:w-1/2 order-1 md:order-1 items-center md:items-start justify-center space-y-3 md:space-y-5">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:tracking-[0.04rem] xl:leading-4 font-bold text-[#ff36bc] text-center md:text-left leading-snug md:leading-tight">
        {slide.title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center md:text-left max-w-md">
        {slide.desc}
      </p>
      <button className="mt-2 md:mt-4 rounded-full bg-[#210af5] text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 md:px-6 md:py-2 lg:px-8 lg:py-3">
        Shop Now
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="md:w-1/2 flex justify-center md:justify-end order-2 md:order-2 mt-6 md:mt-0 h-full">
      <Image
        src={slide.img}
        alt="slide image"
        width={550}
        height={700}
        className="w-48 sm:w-64 md:w-80 lg:w-96 xl:w-137.5 h-full object-contain"
      />
    </div>

    {/* DOT INDICATORS */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`h-2 w-2 rounded-full transition-all ${
            current === index ? "bg-blue-600 w-5" : "bg-white/70"
          }`}
        />
      ))}
    </div>
  </div>
</div>


  )
}

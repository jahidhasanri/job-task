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
    <div className="relative w-full">
      <div className="relative h-80 sm:h-96 md:h-[400px] lg:h-[500px] xl:h-[550px] bg-gradient-to-r from-[#87d1dc] to-blue-300 overflow-hidden flex flex-col md:flex-row items-center justify-between px-4 md:px-10">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4 md:space-y-6 lg:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#ff36bc] text-center md:text-left whitespace-nowrap">
            {slide.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center md:text-left">
            {slide.desc}
          </p>
          <button className="rounded-full bg-[#210af5] px-6 py-2 sm:px-8 sm:py-3 text-white font-semibold">
            Shop Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <Image
            src={slide.img}
            alt="slide image"
            width={700}
            height={700}
            className="object-contain w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 h-auto"
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

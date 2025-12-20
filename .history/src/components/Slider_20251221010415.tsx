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
   <div className="w-1/2 space-y-3">
        <div className="w-full md:max-w-40  lg:max-w-60 xl:max-w-105.25 xl:h-30.75 xl:mt-10.75 xl:mb-5.5 xl:ml-16.75">
          <h2 className="text-3xl lett tracking-[0.04em] sm:text-4xl md:text-6xl lg:text-[40px] text-center leading-14 font-bold text-[#ff36bc] ">
            {slide.title}
          </h2>
        </div>
          
          <p className="text-sm lg:text-[32px] ml-3 font-semibold text-white text-center md:text-base xl:max-w-115.5 xl:mb-13.5 xl:ml-13">
            {slide.desc}
          </p>
          <button className="rounded-full  bg-[#210af5] xl:ml-30 xl:w-35 xl:h-12.5 text-white font-semibold">Shop Now</button>
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

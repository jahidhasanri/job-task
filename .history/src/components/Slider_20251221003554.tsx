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
      <div className="relative h-80 md:h-90 lg:h-100.5 xl:h-120  bg-linear-to-r from-[#87d1dc] to-blue-300 overflow-hidden flex items-center ">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-3">
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
        <div className="md:w-1/2 flex justify-start">
          <Image
            src={slide.img}
            alt="slide image"
            width={550}
            height={700}
            className="object-contain w-50 sm:w-75 md:w-100 lg:w-125 xl:w-137.5 h-auto mt-8 md:mt-174 lg:mt-22 xl:mt-29"
          />
        </div>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 mb-6">
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

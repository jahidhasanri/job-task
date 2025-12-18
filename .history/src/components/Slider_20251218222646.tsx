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

  // 🔄 Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <div className="relative flex-1">
      <div className="relative h-111  bg-linear-to-r from-[#87d1dc] to-blue-300 overflow-hidden flex items-center px-6 md:px-12">

        {/* LEFT CONTENT */}
        <div className="w-1/2 space-y-3">
        <div className="max-w-100 mt-20">
          <h2 className="text-3xl lett tracking-[0.04em] sm:text-4xl md:text-6xl lg:text-[40px] text-center leading-14 font-bold text-[#ff36bc] mb-5">
            {slide.title}
          </h2>
        </div>
          
          <p className="text-sm lg:text-[32px] ml-3 font-semibold text-white text-center md:text-base max-w-100">
            {slide.desc}
          </p>
          <button className="rounded-full mt-18.75 bg-[#210af5] ml-12 w-35 h-12.5 text-white font-semibold">Shop Now</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 flex justify-start">
          <Image
            src={slide.img}
            alt="slide image"
            width={500}
            height={650}
            className="object-contain mt-28"
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

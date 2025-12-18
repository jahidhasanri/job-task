"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
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
    img: "/428-4288621_consumer-electronics-items-hd-png-download.png",
  },
  {
    title: "Fashion Week Voucher",
    desc: "Trending outfits",
    img: "/428-4288621_consumer-electronics-items-hd-png-download-removebg-preview.png",
  },
  {
    title: "Gaming Zone Voucher",
    desc: "Consoles & Accessories",
    img: "/slide4.png",
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
      <div className="relative h-80 rounded-lg bg-linear-to-r from-cyan-400 to-blue-300 overflow-hidden flex items-center px-6 md:px-12">

        {/* LEFT CONTENT */}
        <div className="w-1/2 space-y-3">
        <div className="max-w-90">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[40px] text-center leading-10 font-bold text-pink-600 mb-12.5">
            {slide.title}
          </h2>
        </div>
          
          <p className="text-sm md:text-base">
            {slide.desc}
          </p>
          <Button className="rounded-full mt-2">Shop Now</Button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 flex justify-end">
          <Image
            src={slide.img}
            alt="slide image"
            width={260}
            height={260}
            className="object-contain"
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

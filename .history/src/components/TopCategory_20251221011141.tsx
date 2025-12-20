"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { IoMdArrowBack } from "react-icons/io"
import { IoArrowForward } from "react-icons/io5"

export function TopCategory() {
  const categories = [
    {
      title: "Phones",
      image: "/Category-CellPhone.png",
      bg: "bg-[#bdecf9] hover:bg-red-100",
      border: "border border-black",
    },
    {
      title: "Computers",
      image: "/Category-Computer.png",
      bg: "bg-[#f5c90a] hover:bg-blue-100",
      border: "border border-black",
    },
    {
      title: "SmartWatch",
      image: "/Category-SmartWatch.png",
      bg: "bg-[#cbfeb0] hover:bg-green-100",
      border: "border border-black",
    },
    {
      title: "Camera",
      image: "/Category-Camera.png",
      bg: "bg-[#91bef8] hover:bg-purple-100",
      border: "",
    },
    {
      title: "Headphones",
      image: "/Category-Headphone.png",
      bg: "bg-[#ff974c] hover:bg-yellow-100",
      border: "border border-black",
    },
    {
      title: "Gaming",
      image: "/Category-Gamepad.png",
      bg: "bg-[#f5b2ff] hover:bg-pink-100",
      border: "",
    },
  ]

  return (
    <section className="mx-auto xl:max-w-315.5 lg:max-w-full xl:mt-40 px-4 xl:px-0 mt-8 ">
      
      {/* ---------- Header ---------- */}
      <div className="md:flex items-center justify-between">
        <div className="xl:max-w-115.75 mb-6 xl:mb-0">
          <h3 className="text-xl xl:text-[35px] font-semibold tracking-[0.04em]">
            Shop From{" "}
            <span className="text-blue-600 font-bold xl:text-[36px]">
              Top Category
            </span>
          </h3>
        </div>

        <div className="flex gap-2">
          <Button
            size="icon"
            className="w-11.5 h-11.5 rounded-full bg-[#f5f5f5]"
            variant="outline"
          >
            <IoMdArrowBack />
          </Button>
          <Button
            size="icon"
            className="w-11.5 h-11.5 rounded-full bg-[#f5f5f5]"
            variant="outline"
          >
            <IoArrowForward />
          </Button>
        </div>
      </div>

      <div className="xl:w-113 h-2.75 bg-[#1163CF] mt-4 mb-20" />

      {/* ---------- Categories ---------- */}
      <div
        className="
          flex
          flex-wrap
          xl:flex-nowrap
          gap-x-7.5
          gap-y-6
          xl:max-w-313
          mx-auto
        "
      >
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`
              ${cat.bg}
              ${cat.border}
              w-full
              sm:w-[45%]
              md:w-[30%]
              xl:w-42.5
              h-36.25
              rounded-[5px]
              cursor-pointer
              flex
              flex-col
              items-center
              justify-center
              shrink-0
              transition
            `}
          >
            <Image
              src={cat.image}
              alt={cat.title}
              width={56}
              height={56}
            />
            <p className="text-sm font-medium mt-3">
              {cat.title}
            </p>
          </div>
        ))}
      </div>

      <hr className="xl:mt-15 xl:mb-12 xl:max-w-293.5" />
    </section>
  )
}

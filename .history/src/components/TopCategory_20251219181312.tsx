import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IoMdArrowBack } from "react-icons/io"
import { IoArrowForward } from "react-icons/io5"

export function TopCategory() {
  const categories = [
  { title: "Phones", image: "/Category-CellPhone.png", bg: "bg-[#bdecf9] hover:bg-red-100",border: "border border-black border-[1px]" },
  { title: "Computers", image: "/Category-Computer.png", bg: "bg-[#f5c90a] hover:bg-blue-100", border: "border border-black border-[1px]" },
  { title: "SmartWatch", image: "/Category-SmartWatch.png", bg: "bg-[#cbfeb0] hover:bg-green-100", border: "border border-black border-[1px]" },
  { title: "Camera", image: "/Category-Camera.png", bg: "bg-[#91bef8] text-white hover:bg-purple-100", border:"border" },
  { title: "Headphones", image: "/Category-Headphone.png", bg: "bg-[#ff974c] hover:bg-yellow-100", border: "border border-black border-[1px]" },
  { title: "Gaming", image: "/Category-Gamepad.png", bg: "bg-[#f5b2ff] hover:bg-pink-100", border:"border" },
]


  return (
    <section className="mx-auto xl:max-w-315.5 lg:max-w-313 border xl:mt-40 ">
      {/* Header */}
      <div className=" flex items-center justify-between">
        <div className="xl:max-w-115.75 border">
            <h3 className="text-xl font-semibold w-full xl:text-[36px] tracking-[0.05em]">
          Shop From <span className="text-blue-600 text-[36px] font-bold">Top Category</span>
        </h3>
        </div>

        <div className="flex gap-2 mr-2">
          <Button size="icon" className="w-11.5 h-11.5 rounded-3xl bg-[#f5f5f5]" variant="outline">
           <IoMdArrowBack />
          </Button>
          <Button size="icon" className="w-11.5 h-11.5 rounded-3xl bg-[#f5f5f5]" variant="outline">
            <IoArrowForward />
          </Button>
        </div>
      </div>
    <div className="xl:w-113.5 h-2.75  bg-[#1163CF] mt-3.75 mb-21.5"></div>

      {/* Categories */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-0 xl:max-w-313 border">
  {categories.map((cat) => (
    <div
      key={cat.title}
      className={`${cat.bg} ${cat.border} rounded-[5px] cursor-pointer h-36.25 flex flex-col items-center justify-center`}
    >
      <Image
        src={cat.image}
        alt={cat.title}
        width={56}
        height={56}
      />
      <p className="text-sm font-medium mt-3">{cat.title}</p>
    </div>
  ))}
</div>



    </section>
  )
}

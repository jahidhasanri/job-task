import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TopCategory() {
  const categories = [
  { title: "Phones", image: "/Category-CellPhone.png", bg: "bg-[#bdecf9] hover:bg-red-100" },
  { title: "Computers", image: "/Category-Computer.png", bg: "bg-[#f5c90a] hover:bg-blue-100" },
  { title: "SmartWatch", image: "/Category-SmartWatch.png", bg: "bg-[#cbfeb0] hover:bg-green-100" },
  { title: "Camera", image: "/Category-Camera.png", bg: "bg-[#91bef8] text-white hover:bg-purple-100" },
  { title: "Headphones", image: "/Category-Headphone.png", bg: "bg-[#ff974c] hover:bg-yellow-100" },
  { title: "Gaming", image: "/Category-Gamepad.png", bg: "bg-[#f5b2ff] hover:bg-pink-100" },
]


  return (
    <section className="mx-auto xl:max-w-315.5 mt-10 lg:max-w-313 border md:mt-16 lg:mt-20 ">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="xl:max-w-115.75 border">
            <h3 className="text-xl font-semibold w-full xl:text-[36px] tracking-[0.05em]">
          Shop From <span className="text-blue-600 text-[36px] font-bold">Top Category</span>
        </h3>
        </div>

        <div className="flex gap-2">
          <Button size="icon" className="w-11.5 h-11.5 rounded-3xl bg-[#f5f5f5]" variant="outline">
            <ChevronLeft />
          </Button>
          <Button size="icon" className="w-11.5 h-11.5 rounded-3xl bg-[#f5f5f5]" variant="outline">
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7.5">
        {categories.map((cat) => (
          <Card
            key={cat.title}
            className={`${cat.bg} transition cursor-pointer w-42.5 h-36.25`}
          >
            <CardContent className="flex flex-col items-center justify-center  gap-3">
              <Image
                src={cat.image}
                alt={cat.title}
                width={56}
                height={56}
              />
              <p className="text-sm font-medium">{cat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

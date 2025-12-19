import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TopCategory() {
  const categories = [
    { title: "Phones", image: "/categories/phone.png" },
    { title: "Computers", image: "/categories/computer.png" },
    { title: "SmartWatch", image: "/categories/watch.png" },
    { title: "Camera", image: "/categories/camera.png" },
    { title: "Headphones", image: "/categories/headphone.png" },
    { title: "Gaming", image: "/categories/gaming.png" },
  ]

  return (
    <section className="mx-auto max-w-7xl mt-10 md:mt-16 lg:mt-20 px-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">
          Shop From <span className="text-blue-600">Top Category</span>
        </h3>

        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <ChevronLeft />
          </Button>
          <Button size="icon" variant="outline">
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <Card
            key={cat.title}
            className="bg-blue-50 hover:bg-blue-100 transition cursor-pointer"
          >
            <CardContent className="flex flex-col items-center justify-center py-6 gap-3">
              <Image
                src={cat.image}
                alt={cat.title}
                width={48}
                height={48}
              />
              <p className="text-sm font-medium">{cat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

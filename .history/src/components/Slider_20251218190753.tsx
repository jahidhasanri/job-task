import Image from "next/image"
import { Button } from "@/components/ui/button"


const slides = [
{
title: "Up to 15% off",
subtitle: "Voucher",
desc: "On all types of products",
img: "/slide1.png",
},
{
title: "Big Sale 20%",
subtitle: "Electronics",
desc: "Latest gadgets available",
img: "/slide2.png",
},
{
title: "Fashion Week",
subtitle: "New Arrival",
desc: "Trending outfits",
img: "/slide3.png",
},
{
title: "Gaming Zone",
subtitle: "Best Deals",
desc: "Consoles & Accessories",
img: "/slide4.png",
},
{
title: "Smart Devices",
subtitle: "Limited Offer",
desc: "Upgrade your lifestyle",
img: "/slide5.png",
},
]


export function Slider() {
return (
<div className="flex-1">
<div className="relative h-80 overflow-hidden rounded-lg bg-linear-to-r from-cyan-400 to-blue-300">
{slides.map((slide, index) => (
<div key={index} className="absolute inset-0 flex items-center justify-between px-10">
<div className="space-y-3">
<h2 className="text-3xl font-bold text-pink-600">{slide.title}</h2>
<p className="text-xl font-semibold">{slide.subtitle}</p>
<p className="text-sm">{slide.desc}</p>
<Button className="rounded-full">Shop Now</Button>
</div>
<Image src={slide.img} alt="slide" width={280} height={280} />
</div>
))}
</div>
</div>
)
}
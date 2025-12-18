import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"


export function TopCategory() {
const categories = [
"Phones",
"Computers",
"SmartWatch",
"Camera",
"Headphones",
"Gaming",
]


return (
<section className="mx-auto max-w-7xl px-4">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-xl font-semibold">
Shop From <span className="text-blue-600">Top Category</span>
</h3>
<div className="flex gap-2">
<Button size="icon" variant="outline"><ChevronLeft /></Button>
<Button size="icon" variant="outline"><ChevronRight /></Button>
</div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
{categories.map((cat) => (
<Card key={cat} className="text-center bg-blue-50">
<CardContent className="py-6 text-sm font-medium">
{cat}
</CardContent>
</Card>
))}
</div>
</section>
)
}
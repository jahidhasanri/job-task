
export function CategorySidebar() {
const categories = [
"Woman's Fashion",
"Men's Fashion",
"Electronics",
"Home & Lifestyle",
"Medicine",
"Sports & Outdoor",
"Baby's & Toys",
"Groceries & Pets",
"Health & Beauty",
]


return (
<aside className="hidden lg:block w-65 border-r pr-4">
<ul className="space-y-3 text-sm">
{categories.map((item) => (
<li key={item} className="flex justify-between cursor-pointer hover:text-blue-600">
{item} <span>›</span>
</li>
))}
</ul>
</aside>
)
}

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
<aside className="hidden lg:block xl:w-50 mt-3.5 pl-3.5 border">
<ul className="space-y-3 text-sm">
{categories.map((item,index) => (
<li key={item} className="flex justify-between mb-4 cursor-pointer text-[16px] font-medium hover:text-blue-600">
{item}
{index < 2 && (
  <span className="inline-flex text-[30px] h-6 mr-[-14] items-center justify-center">
    ›
  </span>
)}
</li>
))}
</ul>
</aside>
)
}

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
<aside className="hidden lg:block w-50  ">
<ul className="space-y-3 text-sm">
{categories.map((item,index) => (
<li key={item} className="flex justify-between cursor-pointer text-[16px] font-medium hover:text-blue-600">
{item}
{index < 2 && (
  <span className="inline-flex text-[30px] h-6 mr-[-10] items-center justify-center">
    ›
  </span>
)}
</li>
))}
</ul>
</aside>
)
}
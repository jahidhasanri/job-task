import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Search,
  User,
  ShoppingCart,
  Heart,
} from "lucide-react"

const Navbar = () => {
  return (
    <header className="w-full">
      {/* ===== Top Bar ===== */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <p>Email: support@buybee.com</p>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-200">f</Link>
            <Link href="#" className="hover:text-gray-200">x</Link>
            <Link href="#" className="hover:text-gray-200">ig</Link>
            <Link href="#" className="hover:text-gray-200">in</Link>
          </div>
        </div>
      </div>

      {/* ===== Main Navbar ===== */}
      <div className="bg-white border-b">
        <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Buy<span className="text-black">Bee</span>
          </Link>

          {/* Search */}
          <div className="flex flex-1 items-center">
            <Input
              placeholder="Search Items here......"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="flex items-center gap-1">
              <User className="h-5 w-5" />
              <span>Sign Up/Sign In</span>
            </Link>

            <Link href="#">
              <ShoppingCart className="h-5 w-5" />
            </Link>

            <Link href="#">
              <Heart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ===== Bottom Menu ===== */}
      <div className="border-b bg-white">
        <div className="container mx-auto flex items-center gap-6 px-4 py-3 text-sm font-medium">
          
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            All Categories
          </Button>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo" className="text-purple-500">Combo</Link>
            <Link href="/clearance" className="text-pink-600">Clearance</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

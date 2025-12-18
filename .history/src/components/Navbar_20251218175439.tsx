"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RiFacebookLine } from "react-icons/ri";
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/*  Top Bar  */}
      <div className="bg-blue-600 text-white text-xs md:text-sm max-h-15 overflow-hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <p className="text-[16px]">Email: support@buybee.com</p>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#"><RiFacebookLine /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><IoLogoInstagram /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-5">
          
          {/* Left Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Buy<span className="text-black">Bee</span>
          </Link>

          {/* Center: Search (Desktop only) */}
          <div className="hidden md:flex flex-1 items-center">
            <Input
              placeholder="Search Items here......"
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:flex items-center gap-1 text-sm">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>

            <ShoppingCart className="h-5 w-5 cursor-pointer" />
            <Heart className="h-5 w-5 cursor-pointer" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4 md:hidden">
          <div className="flex">
            <Input placeholder="Search Items here......" />
            <Button className="ml-2 bg-blue-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/*  Bottom Menu  */}
      <div className="border-b bg-white">
        <div className="mx-auto hidden max-w-7xl items-center gap-6 px-4 py-3 text-sm font-medium md:flex">
          <Button className="bg-blue-600 hover:bg-blue-700">
            All Categories
          </Button>

          <nav className="flex gap-6">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo" className="text-purple-500">Combo</Link>
            <Link href="/clearance" className="text-pink-600">Clearance</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 text-sm">
            <Button className="mb-3 w-full bg-blue-600">
              All Categories
            </Button>

            <nav className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/products">Products</Link>
              <Link href="/offers" className="text-pink-500">Hot Offers</Link>
              <Link href="/combo" className="text-purple-500">Combo</Link>
              <Link href="/clearance" className="text-pink-600">Clearance</Link>
              <Link href="#" className="flex items-center gap-2">
                <User className="h-4 w-4" /> Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

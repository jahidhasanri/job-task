"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RiFacebookLine } from "react-icons/ri"
import { Search, User, ShoppingCart, Heart, Menu, X } from "lucide-react"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoIosMenu, IoLogoInstagram } from "react-icons/io"
import { MdEmail } from "react-icons/md"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full">

      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-xs md:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <p className="flex items-center gap-1 text-[14px] md:text-[16px]">
            <MdEmail /> Email: support@buybee.com
          </p>
          <div className="hidden md:flex items-center gap-4">
            <Link href="#"><RiFacebookLine className="w-5 h-5 md:w-6 md:h-6" /></Link>
            <Link href="#"><FaTwitter className="w-5 h-5 md:w-6 md:h-6" /></Link>
            <Link href="#"><IoLogoInstagram className="w-5 h-5 md:w-6 md:h-6" /></Link>
            <Link href="#"><FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" /></Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:py-5">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyBee
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 items-center mx-4 lg:mx-10">
            <Input
              placeholder="Search Items here..."
              className="rounded-r-none"
            />
            <Button className="rounded-l-none bg-blue-600 hover:bg-blue-700">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Icons & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop Icons */}
            <Link href="#" className="hidden md:flex flex-col items-center text-sm">
              <User className="h-6 w-6 lg:h-8 lg:w-8" />
              <span className="text-[10px] lg:text-[12px]">Sign In</span>
            </Link>
            <Link href="#" className="hidden md:flex flex-col items-center text-sm">
              <Heart className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer" />
              <span className="text-[10px] lg:text-[12px]">Wishlist</span>
            </Link>
            <Link href="#" className="hidden md:flex flex-col items-center text-sm">
              <ShoppingCart className="h-6 w-6 lg:h-8 lg:w-8 cursor-pointer" />
              <span className="text-[10px] lg:text-[12px]">Cart</span>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4 md:hidden">
          <div className="flex gap-2">
            <Input placeholder="Search Items here..." />
            <Button className="bg-blue-600">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          {/* All Categories */}
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 text-white md:px-4 md:py-2">
            All Categories <IoIosMenu className="w-5 h-5" />
          </Button>

          {/* Menu Links - Desktop */}
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact</Link>
            <Link href="/products" className="text-blue-600 hover:text-blue-700">Products</Link>
            <Link href="/offers" className="text-pink-500 hover:text-pink-600">Hot Offers</Link>
            <Link href="/combo" className="text-purple-500 hover:text-purple-600">Combo</Link>
            <Link href="/clearance" className="text-pink-600 hover:text-pink-700">Clearance</Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 py-4 flex flex-col gap-3">
            <Button className="w-full bg-blue-600 mb-2">All Categories</Button>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo" className="text-purple-500">Combo</Link>
            <Link href="/clearance" className="text-pink-600">Clearance</Link>
            <Link href="#" className="flex items-center gap-2">
              <User className="h-4 w-4" /> Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

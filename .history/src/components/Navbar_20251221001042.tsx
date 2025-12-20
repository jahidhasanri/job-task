"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RiFacebookLine } from "react-icons/ri"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoLogoInstagram, IoIosMenu } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full">

      {/* ================= Top Bar ================= */}
      <div className="bg-[#0F59B9]">
        <div className="max-w-360 mx-auto text-white text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between px-4 py-2">
            <p className="flex items-center gap-2">
              <MdEmail /> support@buybee.com
            </p>

            <div className="hidden md:flex gap-4">
              <RiFacebookLine className="w-5 h-5" />
              <FaTwitter className="w-5 h-5" />
              <IoLogoInstagram className="w-5 h-5" />
              <FaLinkedinIn className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= Main Navbar ================= */}
      <div className="border-b bg-white">
        <div className="max-w-360 mx-auto px-4 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BuyBee
          </Link>

          {/* Search (LG & XL only) */}
          <div className="hidden lg:flex flex-1 mx-8 relative">
            <Input placeholder="Search items..." />
            <Search className="absolute right-4 top-3 h-4 w-4 text-gray-400" />
          </div>

          {/* Right Icons (XL only visible) */}
          <div className="hidden xl:flex items-center gap-6">
            <Link href="/login" className="flex items-center gap-1">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>

            <Link href="/cart" className="flex items-center gap-1">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </Link>

            <Heart className="w-5 h-5 cursor-pointer" />
          </div>

          {/* Hamburger (SM / MD / LG only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ================= Desktop Menu (XL only) ================= */}
      <div className="hidden xl:block border-b bg-white">
        <div className="max-w-360 mx-auto px-4 py-3 flex items-center gap-8">
          <button className="bg-blue-600 text-white px-6 py-3 flex items-center gap-2">
            All Categories <IoIosMenu />
          </button>

          <nav className="flex gap-8 text-[15px]">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo" className="text-pink-600">Combo</Link>
            <Link href="/clearance" className="text-pink-600">Clearance</Link>
          </nav>
        </div>
      </div>

      {/* ================= Mobile Dropdown Menu ================= */}
      {menuOpen && (
        <div className="xl:hidden bg-white border-b px-4 py-4 space-y-4">

          {/* Search */}
          <div className="flex gap-2">
            <Input placeholder="Search items..." />
            <Button className="bg-blue-600">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo">Combo</Link>
            <Link href="/clearance">Clearance</Link>
          </nav>

          {/* Login & Cart */}
          <div className="flex gap-6 pt-2">
            <Link href="/login" className="flex items-center gap-2">
              <User className="w-5 h-5" /> Login
            </Link>

            <Link href="/cart" className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Cart
            </Link>
          </div>
        </div>
      )}

    </header>
  )
}

export default Navbar

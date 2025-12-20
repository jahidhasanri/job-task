"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RiFacebookLine } from "react-icons/ri"
import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoIosMenu, IoLogoInstagram } from "react-icons/io"
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
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0F59B9]">
        <div className="max-w-360 mx-auto text-white text-xs md:text-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 px-4 xl:px-0">
            <p className="text-[16px] flex items-center gap-1 py-3">
              <MdEmail /> Email: support@buybee.com
            </p>

            {/* XL unchanged */}
            <div className="hidden md:flex items-center gap-4 py-3">
              <RiFacebookLine className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <IoLogoInstagram className="w-6 h-6" />
              <FaLinkedinIn className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="max-w-360 mx-auto border-b bg-white">
        <div className="flex items-center justify-between px-4 xl:px-0 py-5">
          {/* Logo (unchanged for xl) */}
          <Link href="/" className="text-2xl font-bold text-blue-600 xl:ml-17.25">
            BuyBee
          </Link>

          {/* Search (lg+ only) */}
          <div className="hidden lg:flex flex-1 relative mx-6 xl:w-208.5">
            <Input placeholder="Search Items here......" />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          {/* Desktop Icons (xl unchanged) */}
          <div className="hidden xl:flex items-center gap-6 xl:mr-11.75">
            <Link href="/login" className="flex items-center gap-1">
              <User className="h-8 w-8" />
              <span className="text-[12px] mt-3">Sign In/Sign Up</span>
            </Link>

            <Link href="/cart" className="flex items-center gap-1">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-[12px] mt-3">Cart</span>
            </Link>

            <Heart className="h-8 w-8 cursor-pointer" />
          </div>

          {/* Hamburger (sm / md / lg only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-4 pb-4 lg:hidden">
          <div className="flex gap-2">
            <Input placeholder="Search Items here......" />
            <Button>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV (XL ONLY) ================= */}
      <div className="hidden xl:block border-b bg-white">
        <div className="flex items-center gap-12 max-w-360 mx-auto">
          <button className="bg-blue-600 text-white flex items-center gap-6 px-7 py-4 xl:ml-17.25">
            All Categories <IoIosMenu className="w-6 h-6" />
          </button>

          <div className="flex gap-8">
            <Link href="/" className="text-blue-600">Home</Link>
            <Link href="/contact" className="text-blue-600">Contact</Link>
            <Link href="/products" className="text-blue-600">Products</Link>
            <Link href="/offers" className="text-pink-500">Hot Offers</Link>
            <Link href="/combo" className="text-pink-600">Combo</Link>
            <Link href="/clearance" className="text-pink-600">Clearance</Link>
          </div>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      {menuOpen && (
        <div className="xl:hidden px-4 py-4 bg-white border-b space-y-4">
          <Button className="w-full">All Categories</Button>

          <nav className="flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Products</Link>
            <Link href="/offers">Hot Offers</Link>
            <Link href="/combo">Combo</Link>
            <Link href="/clearance">Clearance</Link>
          </nav>

          <div className="flex gap-6 pt-3 border-t">
            <Link href="/login"><User /></Link>
            <Link href="/cart"><ShoppingCart /></Link>
            <Heart />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

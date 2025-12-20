
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
import { IoIosMenu, IoLogoInstagram } from "react-icons/io"
import { MdEmail } from "react-icons/md"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full ">
  {/* Top Bar */}
  <div className="bg-[#0F59B9]">
  <div className="max-w-360 mx-auto text-white text-xs md:text-sm max-h-15 overflow-hidden">
    <div className="mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 md:px-2 xl:px-0 ">
      {/* Email */}
      <p className="text-[16px] xl:w-68.75 flex items-center justify-center gap-1 py-3 text-center  xl:ml-21.5">
        <MdEmail /> Email: support@buybee.com
      </p>

      {/* Social Icons */}
      <div className="hidden md:flex xl:w-52 items-center justify-around xl:mr-24.75 gap-4 py-4">
        <Link href="#"><RiFacebookLine className="w-6 h-6" /></Link>
        <Link href="#"><FaTwitter className="w-6 h-6" /></Link>
        <Link href="#"><IoLogoInstagram className="w-6 h-6" /></Link>
        <Link href="#"><FaLinkedinIn className="w-6 h-6" /></Link>
      </div>
    </div>
  </div>
  </div>



    <div className="max-w-360 mx-auto">
        <div className="border-b bg-white">
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-3 pt-5.75 pb-6 px-4 xl:px-0">
      {/* Left Logo */}
      <div className="flex items-center xl:w-29.5 xl:ml-17.25 xl:mr-14.5">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BuyBee
        </Link>
      </div>

      {/* Center: Search (lg & xl only) */}
      <div className="hidden lg:flex  flex-1 items-center xl:w-208.5 xl:mr-8.25 relative">
        <Input placeholder="Search Items here......" className="rounded-r-none" />
        <Search className="absolute right-4 h-4 w-4 text-gray-400 cursor-pointer" />
      </div>

      {/* Right Icons */}
      <div className="flex items-center  gap-6 justify-around ml-auto xl:w-80.25 xl:mr-11.75">
        {/* Sign In */}
        <Link href="login" className="hidden lg:flex items-center gap-1 text-sm xl:mr-5">
          <User className="h-8 w-8" />
          <span className="text-[12px] mt-3">Sign In/Sign Up</span>
        </Link>

        {/* Cart */}
        <Link href="#" className="hidden lg:flex items-center gap-1 text-sm xl:mr-5">
          <ShoppingCart className="h-5 w-5 cursor-pointer" />
          <span className="text-[12px] mt-3">Cart</span>
        </Link>

        {/* Wishlist */}
        <Heart className="h-8 w-8 cursor-pointer" />

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </div>

    {/* Mobile Search */}
    <div className="px-4 pb-4 lg:hidden">
      <div className="flex gap-2">
        <Input placeholder="Search Items here......" />
        <Button className="bg-blue-600">
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
<div className="border-b bg-white mx-auto">
    <div className="flex flex-col md:flex-row items-start md:gap-7 lg:gap-12 xl:gap-0 md:items-center text-sm font-medium">
      <div className="lg:w-auto w-full md:max-w-54.75 lg:max-w-65 flex justify-center lg:justify-start xl:max-w-74.75  xl:mr-12 mb-2 lg:mb-0">
        <button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-6 pl-7 pr-15 py-4 text-white w-full lg:w-auto justify-center">
          All Categories <IoIosMenu className="w-6 h-6" />
        </button>
      </div>

      <div className="xl:mr-71 xl:w-219.75">
        <div className="w-full mx-auto flex flex-col md:flex-row justify-center gap-4 lg:gap-8 text-center">
          <Link href="/" className="text-blue-600 font-medium text-[15px]">Home</Link>
          <Link href="/contact" className="text-blue-600 font-medium text-[15px]">Contact</Link>
          <Link href="/products" className="text-blue-600 font-medium text-[15px]">Products</Link>
          <Link href="/offers" className="text-pink-500 font-medium text-[15px]">Hot Offers</Link>
          <Link href="/combo" className="text-pink-600 font-medium text-[15px]">Combo</Link>
          <Link href="/clearance" className="text-pink-600 font-medium text-[15px]">Clearance</Link>
        </div>
      </div>
    </div>
  </div>

 {menuOpen && (
    <div className="lg:hidden px-4 pb-4 text-sm">
      <Button className="mb-3 w-full bg-blue-600">All Categories</Button>

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
  {/* Main Navbar */}
  

  {/* Bottom Menu */}
  

  {/* Mobile Menu */}
 
</header>

  )
}

export default Navbar

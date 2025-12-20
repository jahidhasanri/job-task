// src/components/LoginPage.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (emailOrPhone.trim() && password.trim()) {
      alert("✅ Login Successful!")
    } else {
      alert("❌ Please fill up all fields")
    }
  }

  return (
    <div className="w-full h-full bg-transparent px-4 sm:px-6 md:px-8 py-10">
      {/* Container */}
      <div className="w-full ">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-7 xl:mb-7.5">
          Log in
        </h1>
        <p className="text-sm sm:text-base xl:text-lg text-black mb-8 sm:mb-10 xl:mb-12">
          Enter your details below
        </p>

        {/* Email / Phone */}
        <Input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-6 sm:mb-8 xl:mb-11"
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-6 sm:mb-8 xl:mb-10"
        />

        {/* Button row */}
        <div className="flex items-center gap-6">
          <Button
            onClick={handleLogin}
            className="bg-blue-600 rounded-[5px] hover:bg-blue-700 w-full sm:w-35.5 h-12 sm:h-14 xl:h-14 xl:mr-21"
          >
            Log In
          </Button>

          <button className="text-red-500 text-[14px] sm:text-[16px] font-medium hover:underline xl:text-[16px]">
            Forget Password?
          </button>
        </div>
       <h2 className="mt-4">
  Have no account!{" "}
  <Link href="/register" className="text-blue-600 hover:underline ">
    Register
  </Link>
</h2>
      </div>
    </div>
  )
}

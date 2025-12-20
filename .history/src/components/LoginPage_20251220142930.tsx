"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    <div className="w-full h-full bg-transparent px-4 sm:px-6 md:px-10 py-10 xl:p-10">
      {/* Container */}
      <div className="w-full sm:max-w-md md:max-w-lg xl:max-w-md mx-auto bg-transparent p-6 xl:p-0 rounded-xl">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl xl:text-3xl font-bold mb-5 sm:mb-7 xl:mb-7.5">
          Log in
        </h1>
        <p className="text-sm sm:text-base md:text-lg xl:text-lg text-black mb-6 sm:mb-8 xl:mb-12">
          Enter your details below
        </p>

        {/* Email / Phone */}
        <Input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-5 sm:mb-8 xl:mb-11 w-full"
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-5 sm:mb-8 xl:mb-10 w-full"
        />

        {/* Button row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 xl:gap-6">
          <Button
            onClick={handleLogin}
            className="bg-blue-600 rounded-[5px] hover:bg-blue-700 w-full sm:w-auto h-12 sm:h-14 mb-4 sm:mb-0 xl:w-35.5 xl:h-14"
          >
            Log In
          </Button>

          <button className="text-red-500 text-[16px] font-medium hover:underline text-center sm:text-left">
            Forget Password?
          </button>
        </div>
      </div>
    </div>
  )
}

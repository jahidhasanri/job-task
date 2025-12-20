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
    <div className="w-full h-full bg-transparent p-10">
      {/* Container */}
      <div className="max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-7.5">Log in</h1>
        <p className="text-sm xl:text-lg text-black mb-13.5">
          Enter your details below
        </p>

        {/* Email / Phone */}
        <Input
          type="text"
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-11"
        />

        {/* Password */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-10"
        />

        {/* Button row */}
        <div className="flex items-center gap-6">
          <Button
            onClick={handleLogin}
            className="bg-blue-600 rounded-[5px] hover:bg-blue-700 w-35.5 h-14 xl:mr-21"
          >
            Log In
          </Button>

          <button className="text-red-500 text-sm font-medium hover:underline">
            Forget Password?
          </button>
        </div>
      </div>
    </div>
  )
}

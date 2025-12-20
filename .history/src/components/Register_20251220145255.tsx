/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Register = () => {
  const [name, setName] = useState("")
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = () => {
    if (name.trim() && emailOrPhone.trim() && password.trim()) {
      alert("✅ Account Created Successfully!")
    } else {
      alert("❌ Please fill up all fields")
    }
  }

  return (
    <div className="xl:w-92.75 xl:h-132.5 mx-auto flex flex-col justify-center">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        Create an account
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Enter your information
      </p>

      {/* Name */}
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-8"
      />

      {/* Email / Phone */}
      <Input
        type="text"
        placeholder="Email or Phone Number"
        value={emailOrPhone}
        onChange={(e) => setEmailOrPhone(e.target.value)}
        className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-8"
      />

      {/* Password */}
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0 mb-10"
      />

      {/* Create Account Button */}
      <Button
        onClick={handleRegister}
        className="bg-blue-600 hover:bg-blue-700 w-full h-12 mb-6"
      >
        Create Account
      </Button>

      {/* Google signup */}
      <button className="w-full h-12 border border-gray-400 rounded-md flex items-center justify-center gap-3 mb-8 hover:bg-gray-50">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">
          Sign up with Google
        </span>
      </button>

      {/* Login link */}
      <p className="text-sm text-center text-gray-600">
        Already have account?{" "}
        <span className="text-black underline cursor-pointer">
          Log in
        </span>
      </p>
    </div>
  )
}

export default Register




"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function LoginPage() {
  const [emailOrPhone, setEmailOrPhone] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (emailOrPhone.trim() !== "" && password.trim() !== "") {
      alert("✅ Login Successful!")
    } else {
      alert("❌ Please fill up all fields")
    }
  }

  return (
    <div className="border rounded-none bg-none">
      <Card className=" rounded-none bg-none">
        <CardHeader className=" rounded-none">
          <CardTitle className="text-3xl font-bold">Log in</CardTitle>
          <CardDescription>
            Enter your details below
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Input
            type="text"
            placeholder="Email or Phone Number"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-0 border-b border-gray-400 rounded-none bg-transparent focus-visible:ring-0"
          />

          <div className="flex items-center gap-6 pt-4">
            <Button
              onClick={handleLogin}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              Log In
            </Button>

            <button className="text-red-500 text-sm hover:underline">
              Forget Password?
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

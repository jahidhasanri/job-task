"use client"

import Image from "next/image"
import { useState } from "react"
import { products } from "../data/products";

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    products.slice(0, 5) 
  )

  const increaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="xl:max-w-360 mx-auto ">
      <div className="xl:w-25.75 xl:h-5 border">
      <h1 className=" text-2xl font-semibold mb-8">Cart</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="grid grid-cols-4 font-semibold border-b pb-3">
            <p>Product Details</p>
            <p className="text-center">Quantity</p>
            <p className="text-center">Price</p>
            <p className="text-center">Total</p>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center border p-4 rounded"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                />
                <p className="font-medium">{item.name}</p>
              </div>

              {/* Quantity */}
              <div className="flex justify-center items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="border px-2"
                >
                  -
                </button>
                <span className="border px-3 py-1">
                  {item.quantity.toString().padStart(2, "0")}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="border px-2"
                >
                  +
                </button>
              </div>

              {/* Price */}
              <p className="text-center">${item.price}</p>

              {/* Total */}
              <div className="flex justify-center items-center gap-4">
                <p>${item.price * item.quantity}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Bottom Buttons */}
          <div className="flex justify-between mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded">
              Return to Shop
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded">
              Update Cart
            </button>
          </div>
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="border p-6 rounded h-fit">
          <h2 className="text-xl font-semibold mb-6">Total</h2>

          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded">
            Proceeds to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

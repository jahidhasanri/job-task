"use client"

import Image from "next/image"
import { products } from "../data/products"

const CheckOut = () => {
  const checkoutProducts = products.slice(0, 5)

  const subtotal = checkoutProducts.reduce(
    (acc, item) => acc + item.price,
    0
  )

  const shipping = 0
  const total = subtotal - 149 // image অনুযায়ী একটু discount ধরলাম

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Top info */}
      <div className="bg-[#EFFFF4] text-sm px-6 py-3 mb-10">
        Returning to customer?
        <span className="text-blue-600 cursor-pointer ml-1">
          Click Here to Login
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT – Shipping Form */}
        <div>
          <h2 className="text-3xl font-semibold mb-8">
            Shipping info form
          </h2>

          <form className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="border p-3" placeholder="First Name*" />
              <input className="border p-3" placeholder="Last Name*" />
            </div>

            <input className="border p-3 w-full" placeholder="Town/City*" />
            <input className="border p-3 w-full" placeholder="Street Address*" />
            <input
              className="border p-3 w-full"
              placeholder="Apartment, floor, etc. (optional)"
            />

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="border p-3" placeholder="Phone Number*" />
              <input className="border p-3" placeholder="Email Address*" />
            </div>

            <textarea
              className="border p-3 w-full"
              placeholder="Order Summary (optional)*"
              rows={3}
            />

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        {/* RIGHT – Order Summary */}
        <div>
          {/* Product list */}
          <div className="space-y-6 mb-8">
            {checkoutProducts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <p className="font-medium">{item.name}</p>
                </div>
                <p className="font-medium">${item.price}</p>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="border-t pt-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold text-base">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-8 space-y-4">
            <p className="font-semibold text-sm">
              Choose Payment Method
            </p>

            <label className="flex items-center gap-3 text-sm">
              <input type="radio" name="payment" />
              Pay with Card
              <span className="flex gap-2 ml-2">
                💳 💳 💳
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className="mt-6 flex gap-4">
            <input
              className="border p-3 flex-1"
              placeholder="Coupon Code"
            />
            <button className="bg-blue-600 text-white px-6">
              Apply Coupon
            </button>
          </div>

          {/* Place order */}
          <button className="w-full bg-blue-600 text-white py-4 mt-8">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut

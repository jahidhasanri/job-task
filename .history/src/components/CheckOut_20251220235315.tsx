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
  const total = subtotal - 149

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Top Info */}
      <div className="bg-[#ECFBFB] text-xs sm:text-sm px-4 sm:px-6 py-3 mb-8 sm:mb-10">
        Returning to customer?
        <span className="text-blue-600 cursor-pointer ml-1">
          Click Here to Login
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        {/* LEFT – Shipping Form */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
            Shipping info form
          </h2>

          <form className="space-y-5 sm:space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input className="border p-3 w-full" placeholder="First Name*" />
              <input className="border p-3 w-full" placeholder="Last Name*" />
            </div>

            <input className="border p-3 w-full" placeholder="Town/City*" />
            <input className="border p-3 w-full" placeholder="Street Address*" />
            <input
              className="border p-3 w-full"
              placeholder="Apartment, floor, etc. (optional)"
            />

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input className="border p-3 w-full" placeholder="Phone Number*" />
              <input className="border p-3 w-full" placeholder="Email Address*" />
            </div>

            <textarea
              className="border p-3 w-full"
              placeholder="Order Summary (optional)*"
              rows={3}
            />

            <label className="flex items-center gap-2 text-xs sm:text-sm">
              <input type="checkbox" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        {/* RIGHT – Order Summary */}
        <div>
          {/* Products */}
          <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
            {checkoutProducts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-3"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={45}
                    height={45}
                  />
                  <p className="text-sm sm:text-base font-medium">
                    {item.name}
                  </p>
                </div>
                <p className="text-sm sm:text-base font-medium">
                  ${item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="border-t pt-5 sm:pt-6 space-y-3 sm:space-y-4 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between font-semibold text-sm sm:text-base">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>

          {/* Payment */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            <p className="font-semibold text-xs sm:text-sm">
              Choose Payment Method
            </p>

            <label className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <input type="radio" name="payment" />
              Pay with Card
            </label>

            <label className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
              <input type="radio" name="payment" defaultChecked />
              Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className="mt-5 border sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <input
              className="border p-3 w-full xl:w-100 xl:ml-4"
              placeholder="Coupon Code"
            />
            <button className="bg-blue-600 text-white px-6 py-3 w-full sm:w-auto">
              Apply Coupon
            </button>
          </div>

          {/* Place Order */}
          <button className="w-full bg-blue-600 text-white py-3 sm:py-4 mt-6 sm:mt-8">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckOut

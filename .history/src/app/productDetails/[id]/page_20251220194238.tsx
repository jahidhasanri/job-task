"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products, productsAll } from "../../../data/products";
import { CiDeliveryTruck, CiFilter } from "react-icons/ci";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  const increaseQty = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="xl:max-w-360 mx-auto">
      {/* Breadcrumb */}
      <div className="flex xl:mt-9.5 xl:ml-33.75 gap-3 text-gray-500 xl:mb-20 text-sm">
        <span>Account</span>
        <span>/</span>
        <span>Electronics</span>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      {/* Selected Product Details */}
      <div className="flex gap-6">
        {/* Image Section */}
        <div className="bg-[#FFFAFA] xl:ml-57.25 xl:mr-8 xl:w-132.75 xl:h-120.25 rounded-lg flex justify-center items-center p-10">
          <Image
            src={product.image}
            alt={product.name}
            width={446}
            height={315}
            className="object-contain"
          />
        </div>

        {/* Details Section */}
        <div className="max-w-xl">
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-green-600">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="inline-block py-1 mb-4">${product.price}</div>

          <p className="text-sm text-gray-600 mb-4">{product.description}</p>
          <hr className="mb-3" />
          <h2 className="mb-5">Key Specifications</h2>

          {/* Key Specifications */}
          <ul className="text-sm text-gray-600 space-y-1 mb-6">
            {product.keySpecifications?.map((spec, index) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quantity & Colors */}
      <div className="flex items-center gap-6 xl:mt-19.25 xl:mb-12">
        {/* Quantity */}
        <div className="flex gpa-6 items-center xl:ml-61.25">
          <span className="mr-14">Quantity</span>
          <div className="flex items-center border rounded">
            <button onClick={decreaseQty} className="px-4 py-2">−</button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-4 py-2 bg-[#0F59B9] text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-4">
          <span className="xl:ml-9.5 mr-3 font-medium">Colors:</span>
          <button
            className="w-4 h-4 rounded-full bg-black border-2 border-gray-400 focus:ring-2 focus:ring-black"
            aria-label="Black color"
          />
          <button
            className="w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-400 focus:ring-2 focus:ring-gray-500"
            aria-label="Gray color"
          />
        </div>

        {/* Free Delivery */}
        <div className="flex items-center gap-3 text-sm text-gray-600 xl:ml-17.75 xl:-mt-6">
          <CiDeliveryTruck size={26} className="text-black" />
          <div>
            <h2 className="font-medium text-[16px] text-black">Free Delivery</h2>
            <span className="underline cursor-pointer font-medium text-black">
              Enter postal code for delivery availability
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex mb-8 xl:ml-61.25 gap-4">
        <button className="w-39 h-11 bg-[#0F59B9] text-white rounded">Buy Now</button>
        <button className="w-39 h-11 bg-[#0F59B9] text-white rounded">Add To Cart</button>
        <button className="w-10 h-10 border rounded">♡</button>
      </div>

      {/* Ratings Section */}
      <div className="xl:w-288.75 h-12 mx-auto bg-[#C2FFFA]">
        <h2 className="font-normal text-[16px] xl:ml-11 xl:pt-2.5">
          Ratings & Reviews of {product.name}
        </h2>
      </div>

      {/* You May Also Like - 4 Products */}
      <div className="xl:max-w-360 mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-5 text-blue-600">You May Also Like</h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-7.5">
          {productsAll.slice(0, 4).map((p) => {
            const discountedPrice = p.discountPercentage
              ? p.price - (p.price * p.discountPercentage) / 100
              : p.price;
            return (
              <div key={p.id} className="relative flex flex-col rounded-lg border">
                {/* Discount & New Badge */}
                {p.discountPercentage && (
                  <span className="absolute top-3 left-3 z-10 bg-[#DB4444] text-white text-[14px] px-3 py-1 rounded">
                    -{p.discountPercentage}%
                  </span>
                )}
                {p.status === "New" && (
                  <span className="absolute top-3 left-3 z-10 bg-green-500 text-white text-[14px] px-3 py-1 rounded">
                    NEW
                  </span>
                )}

                {/* Eye Button */}
                <Link href={`/product/${p.id}`}>
                  <button className="absolute top-3 right-3 z-10 bg-white border rounded-full p-2 hover:bg-gray-100">
                    <IoEyeOutline />
                  </button>
                </Link>

                {/* Image */}
                <div className="bg-[#F5F5F5] rounded-lg flex justify-center items-center h-62.5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={190}
                    height={180}
                    className="object-contain scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <h3 className="mt-4 text-[16px] font-semibold">{p.name}</h3>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-[#DB4444] text-[16px] font-medium">
                    ${discountedPrice.toFixed(2)}
                  </span>
                  {p.discountPercentage && (
                    <span className="text-gray-400 text-[16px] line-through">
                      ${p.price}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < Math.round(p.rating) ? "text-orange-400" : "text-gray-300"
                      } text-lg xl:text-xl`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="text-gray-500">({p.reviews})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Products Details */}
      <div className="xl:max-w-360 mx-auto mt-16">
        <h2 className="text-xl font-semibold mb-5">All Products Details</h2>
        {productsAll.map((p) => {
          const discountedPrice = p.discountPercentage
            ? p.price - (p.price * p.discountPercentage) / 100
            : p.price;

          return (
            <div
              key={p.id}
              className="flex flex-col xl:flex-row gap-6 mb-10 border p-4 rounded-lg relative"
            >
              {/* Eye Button */}
              <Link href={`/product/${p.id}`}>
                <button className="absolute top-3 right-3 z-10 bg-white border rounded-full p-2 hover:bg-gray-100">
                  <IoEyeOutline />
                </button>
              </Link>

              {/* Image */}
              <div className="bg-[#F5F5F5] rounded-lg flex justify-center items-center p-5">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span className="text-yellow-500">
                    {"★".repeat(Math.round(p.rating))}
                  </span>
                  <span className="text-gray-500">({p.reviews} Reviews)</span>
                  <span className="text-green-600">
                    {p.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
                <p className="text-gray-700 mb-2">{p.description}</p>

                {/* Key Specifications */}
                <ul className="text-sm text-gray-600 space-y-1 mb-3">
                  {p.keySpecifications?.map((spec, i) => (
                    <li key={i}>• {spec}</li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-xl font-semibold text-[#DB4444] mb-2">
                  ${discountedPrice.toFixed(2)}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={`/product/${p.id}`}
                    className="px-4 py-2 bg-[#0F59B9] text-white rounded"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 border rounded">♡</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

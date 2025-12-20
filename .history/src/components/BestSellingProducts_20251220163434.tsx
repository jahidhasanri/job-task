"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function BestSellingProducts() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="xl:max-w-292.5 mx-auto xl:pb-15.5">
      {/* Best Selling Products */}
         <div className="flex items-center justify-between  mb-1.5">
        <div className="xl:max-w-100 ">
          <h3 className="text-xl mt-3 xl:text-[36px] font-semibold tracking-[0.03em]">
            Best Selling Products
          </h3>
        </div>

        <div className="flex gap-2">
          <button  onClick={() => setShowAll(true)} className="w-39.75 cursor-pointer  h-14 bg-[#0F59B9] font-medium text-[16px] rounded-[5px] text-white">View All</button>
        </div>
      </div>


        <div className="xl:max-w-99 h-2.75 bg-[#1163CF]  xl:mb-35.25" />

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-7.5">
  {(showAll ? products : products.slice(0, 4)).map((product) => (
    <div
  key={product.id}
  className="relative rounded-lg flex flex-col xl:max-w-67.5 h-80.5"
>
  {/* Discount Badge */}
  {product.discountPercentage && (
    <div className="absolute top-3 left-3 z-10 bg-[#DB4444] text-white text-[14px] font-medium px-3 py-1 rounded">
      -{product.discountPercentage}%
    </div>
  )}

  {/* Image Wrapper */}
  <div className="w-full h-62.5 bg-[#F5F5F5] rounded-lg flex flex-col justify-between">
    
    <div className="flex justify-center items-center h-full overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={190}
        height={180}
        className="scale-115 object-contain transition-transform duration-300"
      />
    </div>

    <Link
      href={`/productDetails/${product.id}`}
      className="mt-3 w-full h-14 flex items-center justify-center bg-[#0F59B9] text-white rounded-b-lg cursor-pointer"
    >
      Add to Cart
    </Link>
  </div>

  <h3 className="font-semibold mt-4 text-[16px] mb-2">
    {product.name}
  </h3>

  {/* Price Section */}
  <div className="flex gap-3 items-center">
    {product.discountPercentage ? (
      <>
        {/* Discounted Price */}
        <p className="text-[#DB4444] text-[16px] font-medium">
          $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </p>

        {/* Original Price (Strikethrough) */}
        <p className="text-gray-500 text-[16px] line-through">
          ${product.price}
        </p>
      </>
    ) : (
      <p className="text-[#DB4444] text-[16px]">${product.price}</p>
    )}
  </div>
</div>

  ))}
</div>

      
    </div>
  );
}

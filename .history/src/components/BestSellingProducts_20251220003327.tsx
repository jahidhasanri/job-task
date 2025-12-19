"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function BestSellingProducts() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="xl:max-w-292.5 mx-auto">
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
      className=" rounded-lg flex flex-col  xl:max-w-67.5 h-80.5"
    >
      {/* Image Wrapper */}
      <div className="w-full h-62.5 bg-[#F5F5F5] rounded-lg flex flex-col justify-between ">
        
        {/* Image Zoomed */}
        <div className="flex justify-center items-center h-full overflow-hidden ">
          <Image
            src={product.image}
            alt={product.name}
            width={190}
            height={180}
            className="scale-115 object-contain transition-transform  duration-300"
          />
        </div>

        {/* Full Width Button */}
        <Link
          href={`/product/${product.id}`}
          className="mt-3 w-full h-14 flex items-center  justify-center bg-[#0F59B9] text-white rounded-b-lg cursor-pointer"
        >
          Add to Cart
        </Link>
      </div>

      <h3 className="font-semibold mt-4 text-[16px]">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  ))}
</div>

      
    </div>
  );
}

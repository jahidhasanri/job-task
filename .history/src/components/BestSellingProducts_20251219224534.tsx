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
          <button  onClick={() => setShowAll(true)} className="w-39.75 pointer-coarse:  h-14 bg-[#0F59B9] font-medium text-[16px] rounded-[5px] text-white">View All</button>
        </div>
      </div>


        <div className="xl:max-w-99 h-2.75 bg-[#1163CF]  xl:mb-35.25" />



      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
        {(showAll ? products : products.slice(0, 4)).map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={150} height={150}/>
            <h3 className="font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <Link href={`/product/${product.id}`} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}

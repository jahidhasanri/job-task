/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowUpward } from "react-icons/md";
import { CiFilter } from "react-icons/ci";

export default function AllProducts() {
  const [filter, setFilter] = useState<"price" | "review" | "">("");
  const [sort, setSort] = useState<"asc" | "desc" | "review" | "">("");

  /* 🔹 filtering + sorting logic */
  const processedProducts = products.slice(8, 18)
    .filter((p) => {
      if (filter === "price") return p.price <= 500;
      if (filter === "review") return p?.rating >= 4;
      return true;
    })
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      if (sort === "review") return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="xl:max-w-327.5 mx-auto  px-4 mt-18.75">
      
      {/* Header */}
      <div className="xl:ml-19.25 lg:flex items-center justify-between mb-6">
        <h3 className="text-[24px] md:text-[36px] font-semibold tracking-[0.03em]">
         Explore Our Products
        </h3>

        {/* 🔹 Filter & Sort */}
        <div className="flex gap-4 items-center mt-6">
          {/* Filter */}
          <CiFilter className="text-xl text-gray-600" />
  <select
    onChange={(e) => setFilter(e.target.value as any)}
    className=" rounded text-sm xl:w-30 border h-10"
  >
    <option value="" className="font-medium">Filter</option>
    <option value="price">Price ≤ $500</option>
    <option value="review">Rating ≥ 4</option>
  </select>

          {/* Sort */}
          <select
            onChange={(e) => setSort(e.target.value as any)}
            className="px-3 py-2 rounded text-sm xl:w-30 xl:mr-14 xl:ml-40 xl:h-10 border"
          >
            <option value="" className="font-medium">Sort</option>
            <option value="asc">Price (Low → High)</option>
            <option value="desc">Price (High → Low)</option>
            <option value="review">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Blue underline */}
      <div className="xl:w-70.5 xl:ml-21.25 h-2.75 bg-[#1163CF] mb-35" />

      {/* Products Grid */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 relative gap-7.5 xl:w-292.5 mx-auto ">
        {processedProducts.map((product) => {
          const discountedPrice = product.discountPercentage
            ? product.price -
              (product.price * product.discountPercentage) / 100
            : product.price;

          return (
            <div
              key={product.id}
              className="relative flex flex-col  rounded-lg xl:mb-15"
            >
              {/*  Discount Badge */}
              {product.discountPercentage && (
                <span className="absolute top-3 left-3 z-10 bg-[#DB4444] text-white text-[14px] px-3 py-1 rounded">
                  -{product.discountPercentage}%
                </span>
              )}

              {/* NEW Badge */}
              {product.status === "New" && (
                <span className="absolute top-3 left-3 z-10 bg-green-500 text-white text-[14px] px-3 py-1 rounded">
                  NEW
                </span>
              )}

              {/* Image Box */}
              <div className="bg-[#F5F5F5] rounded-lg flex flex-col justify-between h-62.5">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={190}
                    height={180}
                    className="object-contain scale-110 transition-transform duration-300"
                  />
                </div>

                <Link
                  href={`/productDetails/${product.id}`}
                  className="h-14 flex items-center justify-center bg-[#0F59B9] text-white rounded-b-lg"
                >
                  Add to Cart
                </Link>
              </div>

              {/* Info */}
              <h3 className="mt-4 text-[16px] font-semibold">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex gap-3 items-center mt-2">
                <span className="text-[#DB4444] text-[16px] font-medium">
                  ${discountedPrice.toFixed(2)}
                </span>

                {product.discountPercentage && (
                  <span className="text-gray-400 text-[16px] line-through">
                    ${product.price}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${
  i < Math.round(product?.rating)
    ? "text-orange-400"
    : "text-gray-300"
} text-lg xl:text-xl`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-500">
                  ({product.reviews})
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
  <button className="w-39.75 h-14 xl:-mt-12 bg-[#0F59B9] flex justify-center items-center cursor-pointer text-white text-[16px] font-medium rounded-[5px]">
    View All
  </button>
</div>

<Button
  size="icon"
  className="w-11.5 h-11.5 absolute rounded-full bg-[#f5f5f5] xl:-mt-37 xl:ml-308 shadow-lg"
  variant="outline"
>
  <MdOutlineArrowUpward />
</Button>


    </section>
  );
}

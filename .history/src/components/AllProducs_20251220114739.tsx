"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productsAll } from "../data/products";

export default function AllProducts() {
  const [showAll, setShowAll] = useState(false);

  

  return (
    <section className="xl:max-w-327.5 border mx-auto xl:pb-15.5 px-4 xl:mt-18.75">
      
      {/* Header */}
      <div className="xl:ml-19.25 flex items-center justify-between mb-6">
        <h3 className="text-[36px] font-semibold tracking-[0.03em]">
          Best Selling Products
        </h3>
      </div>

      {/* Blue underline */}
      <div className="w-25 h-2.75 bg-[#1163CF] mb-14" />

      {/* Products Grid */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-7.5">
        {productsAll.map((product) => {
          const discountedPrice = product.discountPercentage
            ? product.price -
              (product.price * product.discountPercentage) / 100
            : product.price;

          return (
            <div
              key={product.id}
              className="relative flex flex-col rounded-lg"
            >
              {/* Discount Badge */}
              {product.discountPercentage && (
                <span className="absolute top-3 left-3 z-10 bg-[#DB4444] text-white text-[14px] px-3 py-1 rounded">
                  -{product.discountPercentage}%
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
                  href={`/product/${product.id}`}
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
              <div className="flex gap-3 items-center mt-1">
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
              <div className="flex items-center gap-1 mt-1 text-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < Math.round(product.rating)
                        ? "text-orange-400"
                        : "text-gray-300"
                    }
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
    </section>
  );
}

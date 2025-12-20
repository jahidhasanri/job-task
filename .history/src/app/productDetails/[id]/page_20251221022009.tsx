"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "../../../data/products";
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
      <div className="flex xl:mt-9.5 mt-5 mb-5  xl:ml-33.75 gap-3 text-gray-500 xl:mb-20 text-sm">
        <span>Account</span>
        <span>/</span>
        <span>Electronics</span>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      {/* Main Section */}
      <div className="lg:flex gap-6 mx-2 xl:mx-0">
        {/* Image Section */}
        <div className="bg-[#FFFAFA] mb-5 xl:mb-0 xl:ml-57.25 xl:mr-8 xl:w-132.75 xl:h-120.25 rounded-lg flex justify-center items-center p-10">
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
          <h1 className="text-2xl font-semibold mb-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product?.rating))}
            </span>
            <span className="text-gray-500">
              ({product.reviews} Reviews)
            </span>
            <span className="text-green-600">
              {product?.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Price */}
          <div className="inline-block    py-1  mb-4">
            $ {product.price}
          </div>

          <p className="text-sm text-gray-600 mb-4">
            {product.description}
          </p>
          <hr className="mb-3" />
            <h2 className="mb-5">Key Specifications</h2>

          {/* Key Specifications (Dynamic) */}
          <ul className="text-sm text-gray-600 space-y-1 mb-6">
            {product.keySpecifications?.map((spec, index) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>

          {/* Quantity & Size */}
          
        </div>

      </div>

      <div className="lg:flex items-center gap-6 xl:mt-19.25 xl:mb-12 mx-5 lg:mx-0">
            {/* Quantity */}
            <div className="flex gpa-6 items-center xl:ml-61.25 mb-5 lg:mb-0">
                <span className="mr-14">Quantity</span>
            <div className="flex items-center border rounded">
               
              <button
                onClick={decreaseQty}
                className="px-4 py-2"
              >
                −
              </button>

              <span className="px-4">{quantity}</span>

              <button
                onClick={increaseQty}
                className="px-4 py-2 bg-[#0F59B9] text-white"
              >
                +
              </button>
            </div>
            </div>

           <div className="flex items-center gap-4 mb-5 lg:mb-0">
  <span className=" xl:ml-9.5 mr-3 font-medium">Colors:</span>

  <button
    className="w-4 h-4 rounded-full bg-black border-2 border-gray-400 focus:ring-2 focus:ring-black"
    aria-label="Black color"
  ></button>

  <button
    className="w-4 h-4 rounded-full bg-gray-400 border-2 border-gray-400 focus:ring-2 focus:ring-gray-500"
    aria-label="Gray color"
  ></button>
</div>
            <div className="flex items-center gap-3 text-sm text-gray-600 xl:ml-17.75 xl:-mt-6">
                <div>
                 <CiDeliveryTruck size={26} className="text-black"/>
                </div>
                <div className="mb-5 lg:mb-0">
                    <h2 className="font-medium text-[16px] text-black">Free Delivery</h2>
                     <span className="underline cursor-pointer font-medium text-black">
                     Enter postal code for delivery availability
                    </span>
                </div>
          
           
          </div>
            
          </div>

          {/* Action Buttons */}
          <div className="flex  mb-8 xl:ml-61.25 mx-3 lg:mx-0">
            <button className="w-39 h-11 bg-[#0F59B9] text-white rounded mr-6">
              Buy Now
            </button>

            <button className="w-39 h-11 bg-[#0F59B9] text-white rounded mr-8">
              <Link href="/card">Add To Cart</Link>
            </button>

            <button className="w-10 h-10 border rounded">
              ♡
            </button>
          </div>

          {/* Delivery */}
          

      {/* Ratings Section (STATIC) */}
      <div className="xl:w-288.75 h-12 md:mx-auto  bg-[#C2FFFA] mx-2">
            <h2 className="font-normal text-[16px]  xl:ml-11 pt-2.5 ml-1 ">
          Ratings & Reviews of {product.name}
        </h2>
      </div>
      <div className="  xl:px-10 py-8">
        

        <div className="md:flex gap-16">
          <div>
            <h3 className="text-4xl xl:w-31.25 xl:h-13 xl:ml-65 xl:mr-75.5 mb-2 font-semibold">4.5/5</h3>
            <p className="text-yellow-500 xl:ml-63 text-[36px]">★★★★★</p>
          </div>

         <div className="space-y-1">
  {[92, 29, 18, 8, 4].map((value, index) => (
    <div key={index} className="flex items-center gap-4">
      
      {/* Star */}
      <span className="text-yellow-500 text-[30px]">★</span>

      {/* Progress Bar */}
      <div className="w-48 h-2 bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-yellow-400 rounded"
          style={{ width: `${value}%` }}
        ></div>
      </div>

      {/* Percentage */}
      <span className="text-sm text-gray-600">{value}%</span>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Product Reviews (STATIC) */}
      <div className="text-[22px] mb-3.75 xl:w-287.25 mx-auto xl:h-14.5 flex items-center border border-black">

        <h3 className="font-medium ml-4.5 xl:mr-185">Product Reviews</h3>
        <div className="flex gap-4 items-center">
              <CiFilter className="" />
              <h5 className="text-[22px] font-medium">Filter:All Stars</h5>
        </div>
      </div>
      <div className=" xl:ml-39  max-w-2xl">

        <div className="mb-7">
            <div className="flex items-center mb-3">
          <p className="text-yellow-500 text-[24px] xl:mr-226">★★★★★</p>
    <p className="text-[22px] text-black">6.10.1025</p>
            </div>
          <p className="font-medium text-[22px] mb-3">Jennifer Jr. ✅</p>
          <p className="font-medium text-[22px]">Best Quality Product!</p>
        </div>
        <div className="mb-6">
            <div className="flex items-center mb-3">
          <p className="text-yellow-500 text-[24px] xl:mr-226">★★★★★</p>
    <p className="text-[22px] text-black">10.8.1025</p>
            </div>
          <p className="font-medium text-[22px] mb-3">Anna Lina. ✅</p>
          <p className="font-medium text-[22px]">Worth It!</p>
        </div>
      </div>

         <div className="xl:max-w-115.75 xl:ml-39">
          <h3 className="text-xl font-semibold tracking-[0.04em] text-blue-600  xl:text-[16px]">
           You May Also Like
          </h3>
        </div>
        <div className="xl:w-33.5 h-2.75 bg-[#1163CF] mt-5 xl:mb-34.75 mb-20 xl:ml-39" />

        {/* showing 4 products */}


        {/* showing 4 products */}
<div className="grid xl:grid-cols-4 md:grid-cols-2 relative gap-7.5 xl:w-292.5 mx-auto ">
  {products.slice(8, 12).map((product) => {
    const discountedPrice = product.discountPercentage
      ? product.price - (product.price * product.discountPercentage) / 100
      : product.price;

    return (
      <div
        key={product.id}
        className="relative flex flex-col rounded-lg xl: "
      >
        {/* Discount Badge */}
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

        {/* View Details Button */}
        <button className="absolute top-3  right-3 z-10 bg-white border rounded-full p-2 hover:bg-gray-100">
          <IoEyeOutline />

        </button>

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
        <h3 className="mt-4 text-[16px] font-semibold">{product.name}</h3>

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
          <span className="text-gray-500">({product.reviews})</span>
        </div>
      </div>
    );
  })}
</div>





    </div>
  );
}

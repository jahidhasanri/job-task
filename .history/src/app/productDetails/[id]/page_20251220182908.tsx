"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { products } from "../../../data/products";
import { CiDeliveryTruck } from "react-icons/ci";

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

      {/* Main Section */}
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

      <div className="flex items-center gap-6 xl:mt-19.25 xl:mb-12">
            {/* Quantity */}
            <div className="flex gpa-6 items-center xl:ml-61.25">
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

           <div className="flex items-center gap-4">
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
                <div>
                    <h2 className="font-medium text-[16px] text-black">Free Delivery</h2>
                     <span className="underline cursor-pointer font-medium text-black">
                     Enter postal code for delivery availability
                    </span>
                </div>
          
           
          </div>
            
          </div>

          {/* Action Buttons */}
          <div className="flex  mb-8 xl:ml-61.25">
            <button className="w-39 h-11 bg-[#0F59B9] text-white rounded xl:mr-6">
              Buy Now
            </button>

            <button className="w-39 h-11 bg-[#0F59B9] text-white rounded xl:mr-8">
              Add To Cart
            </button>

            <button className="w-10 h-10 border rounded">
              ♡
            </button>
          </div>

          {/* Delivery */}
          

      {/* Ratings Section (STATIC) */}
      <div className="xl:w-288.75 h-12 mx-auto  bg-[#C2FFFA]">
            <h2 className="font-semibold  xl:ml-11 xl:mt-5  ">
          Ratings & Reviews of {product.name}
        </h2>
      </div>
      <div className="  xl:px-10 py-8">
        

        <div className="flex gap-16">
          <div>
            <h3 className="text-4xl font-semibold">4.5/5</h3>
            <p className="text-yellow-500">★★★★★</p>
          </div>

          <div className="space-y-2">
            {[92, 29, 18, 8, 4].map((v, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-yellow-500">★</span>
                <div className="w-48 h-2 bg-yellow-400 rounded"></div>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Reviews (STATIC) */}
      <div className="xl:mt-10 xl:ml-57 max-w-2xl">
        <h3 className="font-semibold mb-4">Product Reviews</h3>

        <div className="border-b pb-4 mb-4">
          <p className="text-yellow-500">★★★★★</p>
          <p className="font-medium">Jennifer Jr. ✅</p>
          <p>Best Quality Product!</p>
        </div>

        <div className="border-b pb-4">
          <p className="text-yellow-500">★★★★★</p>
          <p className="font-medium">Anna Lina. ✅</p>
          <p>Worth It!</p>
        </div>
      </div>
    </div>
  );
}

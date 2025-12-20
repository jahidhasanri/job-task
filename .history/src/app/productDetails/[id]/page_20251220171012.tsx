"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../../data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="xl:max-w-360 mx-auto">
      {/* Breadcrumb */}
      <div className="flex gap-2 text-sm text-gray-500 xl:ml-34 xl:mt-10 xl:mb-12">
        <span>Account</span>
        <span>/</span>
        <span>Electronics</span>
        <span>/</span>
        <span className="text-black">{product.name}</span>
      </div>

      {/* Main Section */}
      <div className="flex gap-12">
        {/* Image */}
        <div className="bg-[#FFFAFA] xl:ml-57 xl:w-133 xl:h-120 rounded-lg flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={446}
            height={315}
            className="object-contain"
          />
        </div>

        {/* Details */}
        <div className="max-w-xl">
          <h1 className="text-2xl font-semibold mb-2">
            {product.name} Early (2025)
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-sm mb-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500">
              ({product.reviews} Reviews)
            </span>
            <span className="text-green-600">In Stock</span>
          </div>

          {/* Price badge */}
          <div className="inline-block bg-[#0F59B9] text-white px-3 py-1 rounded mb-4">
            203 Hug × 21 Hug
          </div>

          <p className="text-sm text-gray-600 mb-4">
            Apple MacBook Air (Early 2025) Apple M3 13.6 Midnight Laptop Price.
            Brand: Apple.
          </p>

          {/* Key Specs */}
          <ul className="text-sm text-gray-600 space-y-1 mb-6">
            <li>• Display: 13.6-inch Liquid Retina</li>
            <li>• Processor: Apple M3 chip</li>
            <li>• Memory: 8GB unified memory</li>
            <li>• Storage: 256GB SSD</li>
            <li>• Color: Midnight</li>
            <li>• OS: macOS Sonoma</li>
          </ul>

          {/* Quantity & Color */}
          <div className="flex items-center gap-6 mb-6">
            {/* Quantity */}
            <div className="flex items-center border rounded">
              <button className="px-4 py-2">−</button>
              <span className="px-4">2</span>
              <button className="px-4 py-2 bg-[#0F59B9] text-white">+</button>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-2">
              <span>Colours:</span>
              <span className="w-4 h-4 rounded-full border"></span>
              <span className="w-4 h-4 rounded-full bg-black"></span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="w-40 h-14 bg-[#0F59B9] text-white rounded">
              Buy Now
            </button>
            <button className="w-40 h-14 bg-blue-600 text-white rounded">
              Add To Cart
            </button>
            <button className="w-14 h-14 border rounded">♡</button>
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            🚚 Free Delivery
            <span className="underline cursor-pointer">
              Enter postal code
            </span>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="bg-[#E8FFFE] xl:mt-16 xl:px-10 py-8">
        <h2 className="font-semibold mb-4">
          Ratings & Reviews of Apple MacBook
        </h2>

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

      {/* Reviews */}
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

"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../../../data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const product = products.find((p: { id: number; }) => p.id === id);

  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <div className="xl:max-w-360 mx-auto ">
        <div className='flex xl:mt-9.5 xl:ml-33.75 gap-3 text-gray-500  xl:h-5.25 xl:mb-20'>
                <h1>Account</h1>
                <span>/</span>
                <h1>Electronics</h1>
                <span>/</span>
                <h1>{product.name}</h1>
            </div>
      <div className="grid xl:grid-cols-2 gap-10">
        
        {/* Image Section */}
        <div className="bg-[#FFFAFA] xl:w-132.75 xl:h-120.25 rounded-lg flex justify-center items-center p-10">
          <Image
            src={product.image}
            alt={product.name}
            width={531}
            height={481}
            className="object-contain"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-[36px] font-semibold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#DB4444] text-[24px] font-semibold">
              ${product.price}
            </span>
          </div>

          <p className="text-yellow-500 mb-6">
            ⭐ {product.rating} ({product.reviews} Reviews)
          </p>

          <div className="flex gap-4">
            <button className="w-40 h-14 bg-[#0F59B9] text-white rounded">
              Buy Now
            </button>

            <button className="w-40 h-14 border border-[#0F59B9] text-[#0F59B9] rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

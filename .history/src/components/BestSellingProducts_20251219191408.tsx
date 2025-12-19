import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="px-4 py-8">
      {/* Top Electronics Brand Section */}
      <h2 className="text-2xl font-bold mb-6">Top Electronics Brands</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="flex bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-1/2 relative">
              <Image src={product.image} alt={product.name} width={200} height={200} className="object-cover"/>
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <Link href={`/product/${product.id}`} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Best Selling Products */}
      <h2 className="text-2xl font-bold mb-6">Best Selling Products</h2>
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
      {!showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 bg-gray-800 text-white rounded"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
}

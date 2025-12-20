import { useRouter } from "next/router";
import Image from "next/image";
import { products } from "@/data/products";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="px-8 py-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <Image src={product.image} alt={product.name} width={400} height={400} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          <p className="text-yellow-500 mt-2">Rating: {product.rating} ⭐ ({product.reviews} Reviews)</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

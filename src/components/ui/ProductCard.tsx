import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { imageUrl, name, description, price, _id } = product;
  return (
    <Link href={`/product/${_id}`}>
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
      {/* <div className="relative w-full h-40">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div> */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-gray-900">
            ${price.toFixed(2)}
          </span>
          <button
            // onClick={onAddToCart}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;

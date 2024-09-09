import { addToCart } from "@/redux/feature/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Product } from "@/types";
// import Image from "next/image";
import React from "react";

const ProductDetail = ({ product }: { product: Product }) => {
  // console.log(product);
  const dispatch = useAppDispatch();
  const onAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // Prevents click event from bubbling up to the Link

    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="w-full md:w-1/2 h-auto object-cover"
          />
          {/* <div>
            <Image
              src={product?.imageUrl}
              alt={product?.name}
              className="w-full md:w-1/2 h-auto object-cover"
              width={50}
              height={400}
            ></Image>
          </div> */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {product?.name}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{product?.description}</p>
            <p className="text-xl font-semibold text-blue-600 mb-4">
              ${product?.price.toFixed(2)}
            </p>
            <div className="text-sm text-gray-700 mb-4">
              <p>
                <span className="font-bold">Category:</span> {product?.category}
              </p>
              <p>
                <span className="font-bold">Brand:</span> {product?.brand}
              </p>
              <p>
                <span className="font-bold">Stock:</span>{" "}
                {product?.stock > 0 ? (
                  <span className="text-green-500">
                    In Stock ({product?.stock} units available)
                  </span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </p>
            </div>
            <button
              onClick={onAddToCart}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

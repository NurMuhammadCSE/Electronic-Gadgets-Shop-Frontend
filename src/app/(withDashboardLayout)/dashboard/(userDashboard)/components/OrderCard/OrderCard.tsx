/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RatingForm from "../RatingForm/RatingForm";
import ProductDetails from "../productDetails/ProductDetails";

const OrderCard: React.FC<{ order: any }> = ({ order }) => {
  const { status, products, createdAt } = order;
  console.log(products);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Order #{order._id}</h2>
      <p className="text-sm text-gray-500 mb-4">
        Placed on: {new Date(createdAt).toLocaleDateString()}
      </p>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Products:</h3>
        <ul className="list-disc ml-4 text-gray-700">
          {products.map((product: any, idx: number) => (
            // <li key={idx}>
            //   {product.product} - ${product.quantity}
            // </li>
            <ProductDetails key={idx} product={product} />
          ))}
        </ul>
      </div>

      {status === "delivered" && (
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">
            Rate Delivered Products
          </h3>
          {products.map((product: any, idx: number) => (
            <RatingForm key={idx} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderCard;

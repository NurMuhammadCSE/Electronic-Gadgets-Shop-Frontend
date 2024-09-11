/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleProductQuery } from "@/redux/api/productApi";

const OrderProductDetails: React.FC<{ product: any }> = ({ product }) => {
  const {
    data: productData,
    isLoading,
    error,
  } = useGetSingleProductQuery(product.product);
  console.log(productData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;
  const { name, price, imageUrl } = productData?.data || {};
  const { quantity } = product;

  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4">
      {/* Product Image */}
      <div className="w-full md:w-1/4 h-40">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-3/4 pl-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>

        {/* Quantity and Price */}
        <div className="flex flex-col sm:flex-row justify-between text-lg font-medium text-gray-600 mb-4">
          <p>
            Quantity: <span className="text-gray-900">{quantity}</span>
          </p>
          <p>
            Price: <span className="text-blue-600">${price?.toFixed(2)}</span>
          </p>
        </div>

        {/* Total Price (Quantity * Price) */}
        <p className="text-lg font-bold text-gray-900">
          Total: ${(quantity * price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OrderProductDetails;

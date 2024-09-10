/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductDetail from "@/components/ui/ProductDetail";
import { Product } from "@/types";

// Interface for product ID params
interface ProductId {
  params: {
    productId: string;
  };
}

// Generate static parameters for SSG (if needed, otherwise remove)
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/product/products");
  const products = await res.json();
    // console.log(products?.data);
  return products?.data?.map((product: Product) => ({
    productId: product._id,
  }));
};

// Product detail page component
const ProductDetailPage = async ({ params }: ProductId) => {
  // console.log(params)
  const res = await fetch(
    `http://localhost:5000/api/product/product/${params.productId}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();
  // console.log(product)

  return (
    <div className="my-10">
      <ProductDetail product={product.data} />
    </div>
  );
};

export default ProductDetailPage;

// //! Onak Koshto
// import ProductDetail from "@/components/ui/ProductDetail";
// import React from "react";

// const ProductId = async ({ params }) => {
//   console.log(params);
//   const res = await fetch(
//     `http://localhost:5000/api/product/product/${params.productId}`,
//     {
//       cache: "no-store",
//     }
//   );
//   const product = await res.json();
//   console.log(product.data);
//   return (
//     <div>
//       <div className="my-10">
//       <ProductDetail product={product.data} />
//      </div>
//     </div>
//   );
// };

// export default ProductId;

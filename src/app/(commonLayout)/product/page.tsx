"use client";
import ProductCard from "@/components/ui/ProductCard";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Product } from "@/types";
import React from "react";

const ProductPage = () => {
  const { data, isError, isLoading } = useGetProductsQuery("");

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error loading products</p>;


  // console.log(data?.data);
  // const res = await fetch("http://localhost:5000/api/product/products", {
  //   next: {
  //     revalidate: 30,
  //   },
  // });
  // const products = await res.json();
  // console.log(products);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.data?.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

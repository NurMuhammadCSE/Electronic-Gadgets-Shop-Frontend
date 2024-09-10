"use client";
import CartDetails from "@/components/ui/CartDetails";
// import CheckoutPage from "@/components/ui/CheckoutPage";
import OrderSummary from "@/components/ui/OrderSummary";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types";
import React from "react";

export default function Cart() {
  const { products } = useAppSelector((store) => store.cart);
  // console.log(products);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            products.map((product: Product) => (
              <CartDetails key={product._id} product={product} />
            ))
          ) : (
            <p className="text-2xl text-red-500">No products found</p>
          )}
        </div>
        <OrderSummary />
        {/* <CheckoutPage></CheckoutPage> */}
      </div>
    </div>
  );
}

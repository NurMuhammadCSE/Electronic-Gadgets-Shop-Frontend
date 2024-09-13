/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { useGetUserOrdersQuery } from "@/redux/api/orderApi"; // Assuming you have an order API
import OrderCard from "./components/OrderCard/OrderCard";
import { useAppSelector } from "@/redux/hooks";
import dynamic from "next/dynamic";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"delivered" | "pending">(
    "delivered"
  );
  const { token } = useAppSelector((state) => state.user);
  const { data: orders } = useGetUserOrdersQuery(token);
  // console.log(orders);
  const handleTabChange = (tab: "delivered" | "pending") => {
    setActiveTab(tab);
  };

  const filteredOrders = orders?.data?.filter((order: any) =>
    activeTab === "delivered"
      ? order.status === "Delivered"
      : order.status === "Pending"
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">My Orders</h1>

      <div className="flex justify-between items-center mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "delivered"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          } rounded-lg`}
          onClick={() => handleTabChange("delivered")}
        >
          Delivered Orders
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "pending"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700"
          } rounded-lg`}
          onClick={() => handleTabChange("pending")}
        >
          Pending Orders
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders?.length > 0 ? (
          filteredOrders.map((order: any, index: number) => (
            <OrderCard key={index} order={order} />
          ))
        ) : (
          <p>No {activeTab} orders available.</p>
        )}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });

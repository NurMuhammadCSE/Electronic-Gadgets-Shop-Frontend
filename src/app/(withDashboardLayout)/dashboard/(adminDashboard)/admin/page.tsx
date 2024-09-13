"use client";
import React from "react";
import Link from "next/link";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";

const AdminDashboardPage = () => {
  const { data } = useGetProductsQuery("");
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Admin Dashboard
        </h1>
        <p className="text-lg text-gray-700">
          As an administrator, you have access to all the critical tools and
          information to manage the platform effectively. Here you can oversee
          the operations, track performance metrics, and manage content.
        </p>
      </section>

      {/* Overview Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Total Products</h3>
            <p className="text-lg">{data?.data?.length}</p>
          </div>
          
        </div>
      </section>

      {/* Important Links Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
        <ul className="list-disc pl-5">
          <li>
            <Link
              href="/dashboard/products"
              className="text-blue-600 hover:underline"
            >
              Manage Products
            </Link>{" "}
            - View, edit, or delete products in the inventory.
          </li>
          <li>
            <Link
              href="/dashboard/orders"
              className="text-blue-600 hover:underline"
            >
              Order Management
            </Link>{" "}
            - Track and update the status of customer orders.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboardPage;

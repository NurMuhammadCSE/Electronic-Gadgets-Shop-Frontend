/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Link from "next/link";
import { LayoutGrid, Plus, Package, Menu, X } from "lucide-react"; // Icons from lucide-react

const AdminSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          {/* Close button for mobile */}
          <button onClick={toggleSidebar} className="md:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-6">
          <ul>
            <li className="p-4 hover:bg-gray-700 transition-colors">
              <Link href="/dashboard/products">
                <a className="flex items-center">
                  <LayoutGrid className="w-5 h-5 mr-2" />
                  Products Table
                </a>
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 transition-colors">
              <Link href="/dashboard/products/add-product">
                <a className="flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Product
                </a>
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-700 transition-colors">
              <Link href="/dashboard/orders">
                <a className="flex items-center">
                  <Package className="w-5 h-5 mr-2" />
                  Orders Management
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 md:ml-64">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden bg-gray-800 text-white p-2 rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
        {/* Add your page content here */}
        <div className="mt-6">
          {/* Placeholder for page content */}
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Dashboard!</h2>
          <p>Here you can manage products and orders efficiently.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

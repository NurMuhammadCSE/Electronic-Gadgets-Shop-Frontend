"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for App Router

const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("orders"); // Default to "orders"
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Navigate to the respective tab's page
    if (tab === "orders") {
      router.push("/dashboard/my-orders");
    } else if (tab === "profile") {
      router.push("/dashboard/my-profile");
    }
  };

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>

      <nav className="flex flex-col space-y-4">
        {/* Orders Section */}
        <button
          onClick={() => handleTabChange("orders")}
          className={`py-2 px-4 text-left rounded-lg transition-colors ${
            activeTab === "orders"
              ? "bg-blue-600"
              : "hover:bg-gray-700 focus:bg-blue-600"
          }`}
        >
          Order
        </button>

        {/* My Profile Section */}
        <button
          onClick={() => handleTabChange("profile")}
          className={`py-2 px-4 text-left rounded-lg transition-colors ${
            activeTab === "profile"
              ? "bg-blue-600"
              : "hover:bg-gray-700 focus:bg-blue-600"
          }`}
        >
          My Profile
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

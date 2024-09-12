// "use client"
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaBars, FaServicestack, FaUser, FaCalendarAlt, FaBook, FaHouseDamage } from "react-icons/fa";

// const AdminSidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`flex flex-col ${isOpen ? "w-64" : "w-16"} bg-[#30415A] text-white h-screen transition-all duration-300 lg:w-64 lg:relative lg:flex lg:flex-col lg:justify-between`}
//     >
//       {/* Sidebar Header */}
//       <div className="flex items-center justify-between p-4 lg:hidden">
//         <div className="text-xl font-bold">{isOpen && "Admin Dashboard"}</div>
//         <button onClick={toggleSidebar} className="text-white focus:outline-none">
//           <FaBars size={24} />
//         </button>
//       </div>

//       {/* Sidebar Links */}
//       <nav className="flex flex-col gap-4 p-4 overflow-y-auto lg:overflow-visible">
//         <Link
//           href="/admin/services"
//           className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           <FaServicestack size={24} />
//           {isOpen && <span>Service Management</span>}
//         </Link>
//         <Link
//           href="/admin/slots"
//           className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           <FaCalendarAlt size={24} />
//           {isOpen && <span>Slot Management</span>}
//         </Link>
//         <Link
//           href="/admin/users"
//           className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           <FaUser size={24} />
//           {isOpen && <span>User Management</span>}
//         </Link>
//         <Link
//           href="/admin/bookings"
//           className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           <FaBook size={24} />
//           {isOpen && <span>Bookings Management</span>}
//         </Link>
//         <Link
//           href="/"
//           className="flex items-center gap-2 p-2 rounded hover:bg-gray-700 transition-colors duration-200"
//         >
//           <FaHouseDamage size={24} />
//           {isOpen && <span>Home</span>}
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default AdminSidebar;


"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { Home, ShoppingCart, Box, List, Menu, X } from "lucide-react";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { user } = useAppSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", icon: <Home size={24} />, href: "/" },
    { label: "Products", icon: <Box size={24} />, href: "/dashboard/products" },
    { label: "Add Product", icon: <List size={24} />, href: "/dashboard/products/add-product" },
    { label: "Orders", icon: <ShoppingCart size={24} />, href: "/dashboard/orders" },
  ];

  return (
    <div className="relative ">
      {/* Sidebar Toggle Button for Mobile */}
      <div className="lg:hidden fixed top-0 left-0 p-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-white bg-gray-800 p-2 rounded"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 right-0 w-64 h-screen bg-gray-800 text-white shadow-md transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:relative lg:w-64 lg:flex lg:flex-col lg:justify-between`}>
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-between border-b border-gray-700 lg:hidden mb-4">
            <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow overflow-y-auto">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className={`flex items-center p-4 hover:bg-gray-700 transition duration-200 ${router.asPath === item.href ? "bg-gray-700" : ""}`}>
                {item.icon}
                <span className="ml-4">{item.label}</span>
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-700 lg:hidden">
            {/* Optional additional content for mobile view */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

/* eslint-disable @next/next/no-img-element */
"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { Edit, Trash } from "lucide-react"; // lucide-react icons

const AdminProductsTable: React.FC = () => {
  const { data: productsData, isLoading, error } = useGetProductsQuery("");
  
  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Management</h1>
      
      <Table
        aria-label="Product Management Table"
        className="shadow-lg rounded-lg bg-white"
      >
        <TableHeader>
          <TableColumn>Product</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Stock</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {productsData?.data?.map((product: any) => (
            <TableRow key={product._id}>
              <TableCell>
                <div className="flex items-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded-md mr-4"
                  />
                  <span className="font-medium">{product.name}</span>
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <span
                  className={`py-1 px-3 rounded-full text-xs font-semibold ${
                    product.stock > 0
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
                </span>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Edit Button */}
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  {/* Delete Button */}
                  <button
                    className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const handleEditProduct = (id: string) => {
  // Navigate to product edit page or open a modal for editing
  console.log("Edit product:", id);
};

const handleDeleteProduct = (id: string) => {
  // Add delete confirmation and logic
  console.log("Delete product:", id);
};

export default AdminProductsTable;

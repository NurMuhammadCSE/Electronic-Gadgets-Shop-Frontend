/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import { Edit, Trash } from "lucide-react"; // lucide-react icons
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import Swal from "sweetalert2";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import Image from "next/image";

const AdminProductsTable: React.FC = () => {
  const { data: productsData, isLoading, error } = useGetProductsQuery("");
  const [deleteProduct] = useDeleteProductMutation();
  const { token } = useAppSelector((state) => state.user);
  const [updateProduct] = useUpdateProductMutation();

  // State for modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [editedProduct, setEditedProduct] = useState<any>({});

  // Handle Edit product - Open the modal with pre-filled product data
  const handleEditProduct = (product: any) => {
    setCurrentProduct(product);
    setEditedProduct(product); // Pre-fill the form with current product details
    setIsEditModalOpen(true); // Open modal
  };

  // Handle Update Product
  const handleUpdateProduct = async () => {
    try {
      await updateProduct({
        productId: currentProduct._id,
        token,
        editedProduct,
      });
      toast.success("Product updated successfully");
      setIsEditModalOpen(false); // Close modal after success
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct({ productId, token });
          toast.success("Product deleted successfully");
          Swal.fire("Deleted!", "The product has been deleted.", "success");
        } catch (error) {
          toast.error("Error deleting the product");
          Swal.fire(
            "Error!",
            "There was a problem deleting the product.",
            "error"
          );
        }
      }
    });
  };

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Product Management
      </h1>

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
                   {/* <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-cover rounded-md mr-4"
                  /> */}
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
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Edit Button */}
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    onClick={() => handleEditProduct(product)}
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

      {/* Edit Product Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            <Input
              label="Product Name"
              value={editedProduct.name || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
            />
            <Input
              label="Category"
              value={editedProduct.category || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, category: e.target.value })
              }
            />
            <Input
              label="Price"
              type="number"
              value={editedProduct.price || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, price: e.target.value })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button color="primary" onClick={handleUpdateProduct}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AdminProductsTable;

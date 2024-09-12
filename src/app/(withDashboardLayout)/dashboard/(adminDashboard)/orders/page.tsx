/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Textarea,
  Spinner,
} from "@nextui-org/react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { useGetAllOrdersQuery } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hooks";

const AllOrders = () => {
    const {token} = useAppSelector(state => state.user)
  const { data: ordersData, isLoading, error } = useGetAllOrdersQuery(token);
  // const [updateOrder] = useUpdateOrderMutation();
console.log(ordersData)
  // State for modal
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [status, setStatus] = useState<string>("");

  // Handle View Order Details
  const handleViewOrder = (order: any) => {
    setCurrentOrder(order);
    setStatus(order.status); // Set current status
    setIsOrderModalOpen(true); // Open modal
  };

  // Handle Update Order Status
  const handleUpdateStatus = async () => {
    //   try {
    //     await updateOrder({ orderId: currentOrder._id, status });
    //     toast.success("Order status updated successfully");
    //     setIsOrderModalOpen(false); // Close modal after success
    //   } catch (error) {
    //     toast.error("Error updating order status");
    //   }
  };

  if (isLoading) return <p>Loading orders...</p>;
  if (error) return <p>Error loading orders</p>;

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Orders Management
      </h1>

      <Table
        aria-label="Orders Management Table"
        className="shadow-lg rounded-lg bg-white"
      >
        <TableHeader>
          <TableColumn>Order ID</TableColumn>
          <TableColumn>Customer Name</TableColumn>
          <TableColumn>Order Date</TableColumn>
          <TableColumn>Total Amount</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {ordersData?.data?.map((order: any) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>
                {new Date(order.orderDate).toLocaleDateString()}
              </TableCell>
              <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
              <TableCell>
                <span
                  className={`py-1 px-3 rounded-full text-xs font-semibold ${
                    order.status === "Pending"
                      ? "bg-yellow-100 text-yellow-600"
                      : order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
              <TableCell>
                <Button color="primary" onClick={() => handleViewOrder(order)}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Order Details Modal */}
      <Modal
        isOpen={isOrderModalOpen}
        onOpenChange={setIsOrderModalOpen}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalBody>
            <div className="mb-4">
              <h2 className="text-lg font-semibold">
                Order ID: {currentOrder?._id}
              </h2>
              <p className="text-sm">Customer: {currentOrder?.customerName}</p>
              <p className="text-sm">
                Order Date:{" "}
                {new Date(currentOrder?.orderDate).toLocaleDateString()}
              </p>
              <p className="text-sm">
                Total Amount: ${currentOrder?.totalAmount.toFixed(2)}
              </p>
              <p className="text-sm">
                Description: {currentOrder?.description}
              </p>
            </div>
            <div className="mb-4">
              <Select
                label="Order Status"
                placeholder="Select status"
                value={status}
                onChange={(value) => setStatus(value as string)}
              >
                <SelectItem key={"Pending"} value="Pending">
                  Pending
                </SelectItem>
                <SelectItem key={"Shipped"} value="Shipped">
                  Shipped
                </SelectItem>
                <SelectItem key={"Delivered"} value="Delivered">
                  Delivered
                </SelectItem>
              </Select>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onClick={() => setIsOrderModalOpen(false)}
            >
              Cancel
            </Button>
            <Button color="primary" onClick={handleUpdateStatus}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AllOrders;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface Order {
  userId: string;
  userName: string;
  userEmail: string;
  items: OrderItem[];
  total: number;
  status: string;
  paymentMethod: string;
}

const initialState: Order[] = [];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },
  },
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;

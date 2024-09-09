import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types";

interface CartProduct extends Product {
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; type: "increment" | "decrement" }>) => {
      const { id, type } = action.payload;
      const product = state.products.find(p => p._id === id);

      if (product) {
        if (type === "increment") {
          product.quantity += 1;
        } else if (type === "decrement" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      state.products = state.products.filter(p => p.quantity > 0);

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(p => p._id !== action.payload.id);

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

export const selectSelectedItems = (state: CartState) =>
  state.products.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state: CartState) =>
  state.products.reduce((total, product) => total + product.quantity * product.price, 0);

export const selectTax = (state: CartState) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: CartState) =>
  selectTotalPrice(state) + selectTax(state);

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

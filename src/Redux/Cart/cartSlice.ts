import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isOpen: boolean;
  items: any[];
  total: number;
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isOpen: boolean;
  items: any[]; // Замените any[] на массив соответствующего типа для товаров в корзине
  total: number; // Замените number на соответствующий тип для общей суммы заказа
  // Другие поля, которые могут понадобиться для управления корзиной
}

const initialState: CartState = {
  isOpen: false,
  items: [],
  total: 0,
  // Инициализируйте другие необходимые поля
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    // Другие действия, например, для добавления/удаления товаров из корзины
  },
});

export const { toggleCart } = cartSlice.actions;

export default cartSlice.reducer;

export interface CartState {
  isOpen: boolean;
  items: any[]; // Замените any[] на массив соответствующего типа для товаров в корзине
  total: number; // Замените number на соответствующий тип для общей суммы заказа
  // Другие поля, которые могут понадобиться для управления корзиной
}

export type RootState = CartState;

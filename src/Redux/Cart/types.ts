export interface CartState {
  isOpen: boolean;
  items: any[];
  total: number;
}

export type RootState = CartState;

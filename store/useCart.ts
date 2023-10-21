import { Product } from "types/product";
import { create } from "zustand";

interface CartState {
    items: Product[];
    addToCart: (product: Product) => void;
    removeAllCart: () => void;
}

const useCart = create<CartState>((set) => ({
    items: [],
    addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
    removeAllCart: () => set({ items: [] })
}));

export default useCart;
import { Product } from "types/product";
import { create } from "zustand";

interface CartState {
    items: Product[];
    isOpen: boolean,
    addToCart: (product: Product) => void;
    toggleCart: (isOpen: boolean) => void;
    removeAllCart: () => void;
}

const useCart = create<CartState>((set) => ({
    items: [],
    isOpen: false,
    addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
    toggleCart: (isOpen) => set((state) => ({ isOpen })),
    removeAllCart: () => set({ items: [] })
}));

export default useCart;
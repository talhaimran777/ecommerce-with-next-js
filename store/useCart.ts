import { CartItem } from "types/product";
import { create } from "zustand";

interface CartState {
    items: CartItem[];
    isOpen: boolean,
    addToCart: (product: CartItem) => void;
    increaseQuantity: (product: CartItem) => void;
    decreaseQuantity: (product: CartItem) => void;
    toggleCart: (isOpen: boolean) => void;
    removeAllCart: () => void;
}

const useCart = create<CartState>((set) => ({
    items: [],
    isOpen: false,
    addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
    increaseQuantity: (product) => set((state) => ({
        items: state.items.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    })),
    decreaseQuantity: (product) => set((state) => ({
        items: state.items
            .map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter((item) => item.quantity > 0)
    })),

    toggleCart: (isOpen) => set(() => ({ isOpen })),
    removeAllCart: () => set({ items: [] })
}));

export default useCart;
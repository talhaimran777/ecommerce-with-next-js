"use client";

import Image from "next/image";
import useCart from "store/useCart"
import { CartItem } from "types/product";

const Cart = () => {
    const { isOpen, toggleCart, items, increaseQuantity, decreaseQuantity } = useCart();

    const increaseItemQuantity = (item: CartItem): void => {
        const cartItem: CartItem | undefined = items.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            increaseQuantity(cartItem);
        }
    }

    const decreaseItemQuantity = (item: CartItem): void => {
        const cartItem: CartItem | undefined = items.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            decreaseQuantity(cartItem);
        }
    }

    const calculateTotalPrice = (): string => {
        let totalPrice: number = 0;

        items.forEach((cartItem: CartItem) => {
            totalPrice += cartItem.price * cartItem.quantity;
        });

        return totalPrice.toFixed(2);
    }

    return (
        <div className={`h-screen fixed top-0 ${isOpen ? "-right-0" : "-right-80"}  bg-gray-100 w-80 shadow-2xl p-4 overflow-auto transition-all duration-700 ease-in-out`}>
            <button className="font-bold text-sm" onClick={() => toggleCart(!isOpen)}>Close</button>
            {items.length > 0 ? (<div>
                {items.map(item => (
                    <div key={item.id} className="flex items-center p-4 bg-white gap-3 my-4 rounded-md">
                        <div>
                            <Image src={item.imageUrl} alt={item.name} width={100} height={100} />
                        </div>
                        <div className="flex-1 flex flex-col text-xs font-medium gap-y-1">
                            {item.name}
                            <div className="flex items-center justify-between">
                                <p>Quantity: {item.quantity}</p>
                                <div className="flex justify-between items-center gap-1">
                                    <button className="bg-black h-4 w-4 font-bold text-md cursor-pointer rounded-full text-white flex justify-center items-center" onClick={decreaseItemQuantity.bind(this, item)}>-</button>
                                    <button className="bg-black h-4 w-4 font-bold text-md cursor-pointer rounded-full text-white flex justify-center items-center" onClick={increaseItemQuantity.bind(this, item)}>+</button>
                                </div>
                            </div>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                ))}
                <p className="font-bold text-sm">Total: ${calculateTotalPrice()}</p>
                <button className='w-full bg-black text-white py-2 rounded-md text-sm font-bold mt-3'>Checkout</button>
            </div>) : (
                <p>Cart is empty!</p>
            )}
        </div>
    )
}

export default Cart
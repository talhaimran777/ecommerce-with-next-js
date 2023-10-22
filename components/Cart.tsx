"use client";

import useCart from "store/useCart"

const Cart = () => {
    const { isOpen, toggleCart } = useCart();

    return (
        <div className={`h-screen fixed top-0 ${isOpen ? "-right-0" : "-right-64"}  bg-white w-64 shadow-2xl p-4`}>
            <button onClick={() => toggleCart(!isOpen)}>Close Cart</button>
        </div>
    )
}

export default Cart
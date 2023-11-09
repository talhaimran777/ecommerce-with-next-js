'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useCart from 'store/useCart'
import { CartItem } from 'types/product'
import { createPaymentIntent } from 'actions/stripe'
import { amountInCents } from 'utils/general'
import Button from 'components/Button'
import { useEffect } from 'react'

const Cart = () => {
  const router = useRouter()

  const { isOpen, toggleCart, items, increaseQuantity, decreaseQuantity } =
    useCart()

  const increaseItemQuantity = (item: CartItem): void => {
    const cartItem: CartItem | undefined = items.find(
      (cartItem) => cartItem.id === item.id,
    )
    if (cartItem) {
      increaseQuantity(cartItem)
    }
  }

  const decreaseItemQuantity = (item: CartItem): void => {
    const cartItem: CartItem | undefined = items.find(
      (cartItem) => cartItem.id === item.id,
    )
    if (cartItem) {
      decreaseQuantity(cartItem)
    }
  }

  const calculateTotal = (): string => {
    let totalPrice: number = 0

    items.forEach((cartItem: CartItem) => {
      totalPrice += cartItem.price * cartItem.quantity
    })

    return totalPrice.toFixed(2)
  }

  const total = calculateTotal()

  const handleCheckout = async () => {
    const created = await createPaymentIntent({
      amount: amountInCents(total),
      metadata: { total: `$${total}` },
    })
    if (created) {
      toggleCart(!isOpen)
      router.push('/checkout')
    } else {
      alert('Payment intent could be created!')
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`h-screen fixed top-0 ${
        isOpen ? '-right-0' : '-right-80'
      }  bg-gray-100 w-80 shadow-2xl p-4 overflow-auto transition-all duration-700 ease-in-out z-50`}
    >
      <Button
        text="Close"
        action={() => toggleCart(!isOpen)}
        className="font-bold text-sm w-[fit-content] px-3"
      />
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-white gap-3 my-4 rounded-md"
            >
              <div>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-1 flex flex-col text-xs font-medium gap-y-1">
                {item.name}
                <div className="flex items-center justify-between">
                  <p>Quantity: {item.quantity}</p>
                  <div className="flex justify-between items-center gap-1">
                    <div
                      className="bg-black h-4 w-4 font-bold text-md cursor-pointer rounded-full text-white flex justify-center items-center"
                      onClick={decreaseItemQuantity.bind(this, item)}
                    >
                      -
                    </div>
                    <div
                      className="bg-black h-4 w-4 font-bold text-md cursor-pointer rounded-full text-white flex justify-center items-center"
                      onClick={increaseItemQuantity.bind(this, item)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
          <p className="font-bold text-sm">Total: ${total}</p>
          <Button text="Checkout" action={handleCheckout} className="mt-3" />
        </div>
      ) : (
        <p className="mt-2">Cart is empty!</p>
      )}
    </div>
  )
}

export default Cart

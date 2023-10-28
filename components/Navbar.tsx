'use client'

import Wrapper from 'components/Wrapper'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'
import useCart from 'store/useCart'

const Navbar = () => {
  const { items, toggleCart, isOpen } = useCart()

  return (
    <Wrapper>
      <div className="flex justify-between items-center py-4">
        <Link href="/">
          <p className="font-bold text-xl">Ecommerce Store</p>
        </Link>
        <div
          className="relative cursor-pointer"
          onClick={() => toggleCart(!isOpen)}
        >
          {items.length > 0 && (
            <p className="bg-white absolute -top-2 -right-2 rounded-full px-1 text-xs font-bold">
              {items.length}
            </p>
          )}
          <FaCartShopping className="text-xl" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar

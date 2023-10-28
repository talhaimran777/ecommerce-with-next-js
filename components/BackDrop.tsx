'use client'

import React from 'react'
import useCart from 'store/useCart'

const BackDrop = () => {
  const { isOpen, toggleCart } = useCart()
  if (!isOpen) return null

  return (
    <div
      className="backdrop fixed inset-0 bg-black opacity-50 z-2 pointer-events-auto"
      onClick={() => toggleCart(!isOpen)}
    ></div>
  )
}

export default BackDrop

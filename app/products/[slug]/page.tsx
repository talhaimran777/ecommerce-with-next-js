'use client'

import Wrapper from 'components/Wrapper'
import { products } from 'mock/product'
import { CartItem, Product } from 'types/product'
import Image from 'next/image'
import useCart from 'store/useCart'

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { addToCart, items } = useCart()
  const { slug } = params

  const product: Product | undefined = products.find(
    (product: Product) => product.id === parseInt(slug),
  )

  if (!product) return <Wrapper>Product Not Found!</Wrapper>

  const addProductToCart = () => {
    const isAlreadyExists = items.find((item) => item.id === product.id)
    if (isAlreadyExists) return alert('Already in cart. Thanks!')

    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    }

    addToCart(cartItem)
  }

  return (
    <Wrapper>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-5 my-5">
        <Image
          src={product.imageUrl}
          alt="Placeholder"
          className="flex-1 rounded-md"
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/3x3"
        />
        <div className="flex-1">
          <h1 className="font-bold text-2xl mb-3">{product.name}</h1>
          <p className="text-sm mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            asperiores illo voluptatem voluptas magnam commodi totam laboriosam
            id a eaque libero doloribus laudantium eveniet, ea facilis placeat
            quasi cumque rerum!
          </p>
          <p className="text-gray-600 mb-3 text-sm">${product.price}</p>
          <button
            className="w-full bg-black text-white py-2 rounded-md text-sm font-bold"
            onClick={addProductToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductDetails

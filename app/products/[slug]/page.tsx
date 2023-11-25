'use client'

import 'react-toastify/dist/ReactToastify.css'

import ContentWrapper from 'components/ContentWrapper'
import { products } from 'mock/product'
import { CartItem, Product } from 'types/product'
import Image from 'next/image'
import useCart from 'store/useCart'
import Button from 'components/Button'
import PageWrapper from 'components/PageWrapper'
import { toast } from 'react-toastify'

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const { addToCart, items } = useCart()
  const { slug } = params

  const product: Product | undefined = products.find(
    (product: Product) => product.id === parseInt(slug),
  )

  if (!product) return <ContentWrapper>Product Not Found!</ContentWrapper>

  const addProductToCart = () => {
    const isAlreadyExists = items.find((item) => item.id === product.id)
    if (isAlreadyExists)
      return toast.info(`${product.name} is already in cart!`)

    const cartItem: CartItem = {
      ...product,
      quantity: 1,
    }

    addToCart(cartItem)
  }

  return (
    <PageWrapper>
      <ContentWrapper>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-5 my-5'>
          <Image
            src={product.imageUrl}
            alt='Placeholder'
            className='flex-1 rounded-md'
            width={500}
            height={500}
            placeholder='blur'
            blurDataURL='https://via.placeholder.com/3x3'
          />
          <div className='flex-1'>
            <h1 className='font-bold text-2xl mb-3'>{product.name}</h1>
            <p className='text-sm mb-3'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              asperiores illo voluptatem voluptas magnam commodi totam
              laboriosam id a eaque libero doloribus laudantium eveniet, ea
              facilis placeat quasi cumque rerum!
            </p>
            <p className='text-gray-600 mb-3 text-sm'>${product.price}</p>
            <Button text='Add to Cart' action={addProductToCart} />
          </div>
        </div>
      </ContentWrapper>
    </PageWrapper>
  )
}

export default ProductDetails

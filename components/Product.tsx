import Image from 'next/image';
import Link from 'next/link';

import { Product } from 'types/product';

const Product = ({ product }: { product: Product; }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="p-4 rounded-md shadow-md w-fit bg-white">
        <Image src={product.imageUrl} alt={product.name} className="mb-4 h-auto" width={200} height={200} />
        <h1 className="text-lg font-semibold mb-2">{product.name}</h1>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  )
}

export default Product

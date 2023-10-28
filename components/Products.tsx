import Product from 'components/Product'
import Wrapper from 'components/Wrapper'

import { products } from 'mock/product'

const Products = () => {
  return (
    <Wrapper>
      <div className="flex justify-center lg:justify-between items-center my-5 gap-5 flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Products

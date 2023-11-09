import Product from 'components/Product'
import ContentWrapper from 'components/ContentWrapper'

import { products } from 'mock/product'

const Products = () => {
  return (
    <ContentWrapper>
      <div className="flex justify-center lg:justify-between items-center my-5 gap-5 flex-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </ContentWrapper>
  )
}

export default Products

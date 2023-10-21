"use client";

import Wrapper from 'components/Wrapper'
import useCart from 'store/useCart';

const ProductDetails = () => {
    const { addToCart } = useCart();

    return (
        <div>
            <Wrapper>
                <h1>Product Details Page</h1>
                <button onClick={addToCart.bind(this, { name: "test product", id: 123, imageUrl: "", price: 20 })}>Add to Cart</button>
            </Wrapper>
        </div >
    )
}

export default ProductDetails
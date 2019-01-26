import React from 'react';
import { Product } from '../models/product.model';
import ProductDisplay from './ProductDisplay';

interface Props {
  products: Product[],
  total: string,
  isRequestingCheckout: boolean,
  onCheckoutClicked: () => void
}

const Cart = ({ products, total, onCheckoutClicked, isRequestingCheckout }: Props) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map(product =>
      <ProductDisplay
        product={product}
        key={product.id}
        quantity={product.quantity}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  );

  return (
    <>
      {
        isRequestingCheckout ? (
          <h3>Requesting Checkout...</h3>
        ) : (
          <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button onClick={onCheckoutClicked}
              disabled={hasProducts ? false : true}>
              Checkout
            </button>
          </div>
        )
      }
    </>
    
  );
};

export default Cart;
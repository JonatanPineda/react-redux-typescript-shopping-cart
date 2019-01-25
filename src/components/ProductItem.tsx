import React from 'react';
import { Product } from '../models/product.model';
import ProductDisplay from './ProductDisplay';

interface Props {
  product: Product,
  onAddToCartClicked: () => void
}

const ProductItem = ({ product, onAddToCartClicked }: Props) => (
  <div style={{ marginBottom: 20 }}>
    <ProductDisplay product={product}/>
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
);

export default ProductItem;
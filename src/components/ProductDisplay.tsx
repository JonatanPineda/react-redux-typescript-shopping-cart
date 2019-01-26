import React from 'react';
import { Product } from '../models/product.model';

interface Props {
  product: Product,
  quantity?: number
}

const ProductDisplay = ({ product: { price, title }, quantity }: Props ) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
);

export default ProductDisplay;
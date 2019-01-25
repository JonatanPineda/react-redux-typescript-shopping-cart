import React from 'react';
import { Product } from '../models/product.model';

interface Props {
  product: Product
}

const ProductDisplay = ({ product: { price, title, inventory } }: Props ) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
);

export default ProductDisplay;
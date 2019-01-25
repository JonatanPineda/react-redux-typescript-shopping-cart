import React from 'react';
import { Product } from '../models/product.model';
import ProductItem from './ProductItem';

interface Props {
  title: string,
  products: Product[],
  addToCart: (idProduct: number) => void
}

const Products = ({ title, products, addToCart }: Props) => (
  <div>
    <h3>{title}</h3>
    <div>
      {products.map(product => 
        <ProductItem 
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />
      )}
    </div>
  </div>
);

export default Products;
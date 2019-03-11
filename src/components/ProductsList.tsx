import React from 'react';
import { Product } from '../models/product.model';
import ProductItem from './ProductItem';

interface Props {
  products: Product[],
  onAddToCartClicked: (idProduct: number) => void,
  isProductsLoading: boolean
}

const ProductsList = ({ products, onAddToCartClicked, isProductsLoading }: Props) => (
 <>
  {
    isProductsLoading ?  (
      <h2>Loading...</h2>
    ) : (
      <div>
        <h3>Products</h3>
        <div>
          {products.map(product => 
            <ProductItem 
              key={product.id}
              product={product}
              onAddToCartClicked={() => onAddToCartClicked(product.id)}
            />
          )}
        </div>
      </div>
    )
  } 
  </>
);

export default ProductsList;
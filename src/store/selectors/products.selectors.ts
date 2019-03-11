import { createSelector } from 'reselect';
import * as fromState from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

export const getAllProducts = createSelector(
  fromState.getProductsState,
  fromProducts.getAllProducts
);

export const getProductsEntities = createSelector(
  fromState.getProductsState,
  fromProducts.getProductsEntities
);

export const getProductsLoading = createSelector(
  fromState.getProductsState,
  fromProducts.getProductsLoading
);

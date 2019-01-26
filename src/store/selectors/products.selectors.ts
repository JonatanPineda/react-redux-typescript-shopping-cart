import { createSelector } from 'reselect';
import * as fromState from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

export const getProductsState = createSelector(
  fromState.getState,
  (state: fromState.State) => state.products
);

export const getAllProducts = createSelector(
  getProductsState,
  fromProducts.getAllProducts
);

export const getProductsEntities = createSelector(
  getProductsState,
  fromProducts.getProductsEntities
);


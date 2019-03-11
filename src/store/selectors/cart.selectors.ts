import { createSelector } from 'reselect';
import * as fromState from '../reducers';
import * as fromCart from '../reducers/cart.reducer';
import * as fromProducts from './products.selectors';

export const getIsRequestingCheckout = createSelector(
  fromState.getCartState,
  fromCart.getIsRequestingCheckout
)

export const getAddedIds = createSelector(
  fromState.getCartState,
  fromCart.getAddedIds
);

export const getQuantity = 
  (state: fromState.State, productId: number) => fromCart.getQuantity(state.cart, productId);

export const getTotal = createSelector(
  (state) => state,
  getAddedIds,
  fromProducts.getProductsEntities,
  (state, addedIds, productsEntities) => {
    return addedIds.reduce((total, id) => 
      total + productsEntities[id].price * getQuantity(state, id),
      0 
    ).toFixed(2);
  }
);

export const getCartProducts = createSelector(
  (state) => state,
  getAddedIds,
  fromProducts.getProductsEntities,
  (state, addedIds, productsEntities) => {
    return addedIds.map(id => ({
      ...productsEntities[id],
      quantity: getQuantity(state, id)
    }))
  }
);
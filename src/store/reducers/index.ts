import * as fromProducts from './products.reducer';
import * as fromCart from './cart.reducer';
import { combineReducers } from 'redux';

export interface State {
  products: fromProducts.ProductsState,
  cart: fromCart.CartState
}

export const reducers = combineReducers<State>({
  products: fromProducts.reducer,
  cart: fromCart.reducer
});

export const getProductsState = (state: State) => state.products;
export const getCartState = (state: State) => state.cart;
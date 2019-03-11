import * as fromProducts from './products.epic';
import * as fromCart from './cart.epic';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  fromProducts.loadProductsEpic,
  fromCart.loadProductsEpic
);


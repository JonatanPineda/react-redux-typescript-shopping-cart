import * as fromProducts from './products.epic';
import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  fromProducts.loadProductsEpic
);


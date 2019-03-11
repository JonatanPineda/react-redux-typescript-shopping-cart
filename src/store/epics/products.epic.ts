import { ofType, ActionsObservable, StateObservable } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { from }  from 'rxjs';
import * as fromProducts from '../actions/products.action';
import * as fromReducer from '../reducers';
import { EpicDependencies } from './EpicDependencies';

export const loadProductsEpic = (
  action$: ActionsObservable<fromProducts.ProductsAction>,
  state$: StateObservable<fromReducer.State>,
  { shopService }: EpicDependencies
) => 
action$.pipe(
  ofType(fromProducts.LOAD_PRODUCTS),
  switchMap(() => {
    return from(shopService.getProducts()).pipe(
      map(products => new fromProducts.LoadProductsSuccess(products))
    )
  })
);
import { EpicDependencies } from './EpicDependencies';
import { ofType, ActionsObservable, StateObservable } from 'redux-observable';
import { map, switchMap } from 'rxjs/operators';
import { from }  from 'rxjs';
import * as fromCart from '../actions/cart.action';
import * as fromReducer from '../reducers';


export const loadProductsEpic = (
  action$: ActionsObservable<fromCart.CartAction>,
  state$: StateObservable<fromReducer.State>,
  { shopService }: EpicDependencies
) => 
action$.pipe(
  ofType(fromCart.REQUEST_CHECKOUT),
  switchMap(() => {
    return from(shopService.buyProducts()).pipe(
      map(() => new fromCart.RequestCheckoutSuccess())
    )
  })
);
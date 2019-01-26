import * as fromActions from '../actions';
import { Cart } from '../../models/cart.model';

export interface CartState extends Cart {}

const initialState: CartState = {
  addedIds: [],
  quantityById: {}
}

export const reducer = (
  state: CartState = initialState,
  action: fromActions.CartAction
): CartState => {
  switch(action.type) {
    case fromActions.ADD_TO_CART: {
      const productId = action.payload
      return {
        ...state,
        addedIds: state.addedIds.indexOf(productId) !== -1 ? 
          [ ...state.addedIds] :
          [ ...state.addedIds, productId ],
        quantityById: {
          ...state.quantityById,
          [productId]: (state.quantityById[productId] || 0) + 1
        }
      };
    }
    case fromActions.REQUEST_CHECKOUT_SUCCESS: {
      return initialState;
    }
    default: return state
  }
}

export const getQuantity = (state: CartState, productId: number) => state.quantityById[productId] || 0;
export const getAddedIds = (state: CartState) => state.addedIds;
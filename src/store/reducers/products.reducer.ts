import * as fromActions from '../actions';
import { EntityState , EntityAdapter, createEntityAdapter } from 'redux-ngrx-entity';
import { Product } from '../../models/product.model';

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export interface ProductsState extends EntityState<Product> {}

export const initialState: ProductsState = productAdapter.getInitialState();

export const reducer = (
  state: ProductsState = initialState, 
  action: fromActions.ProductsAction | fromActions.CartAction
): ProductsState => {
  switch(action.type) {
    case fromActions.LOAD_PRODUCTS_SUCCESS: {
      return productAdapter.addAll(action.paylod, state);
    }
    case fromActions.ADD_TO_CART: {
      return productAdapter.updateOne({
        id: action.payload,
        changes: {
          inventory: state.entities[action.payload].inventory - 1
        }
      }, state)
    }
    default: return state;
  }
} 

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = productAdapter.getSelectors();

export const getProductsIds = selectIds;
export const getProductsEntities = selectEntities;
export const getAllProducts = selectAll;
export const getProductEntitiesTotal = selectTotal; 

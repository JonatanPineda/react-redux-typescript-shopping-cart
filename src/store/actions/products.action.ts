import { Product } from './../../models/product.model';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts {
  readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public paylod: Product[]) {}
}

export type ProductsAction = LoadProducts | LoadProductsFail | LoadProductsSuccess;
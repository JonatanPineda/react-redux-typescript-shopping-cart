export const ADD_TO_CART = '[Cart] Add To Cart';
export const REQUEST_CHECKOUT = '[Cart] Request Checkout';
export const REQUEST_CHECKOUT_FAIL = '[Cart] Request Checkout Fail';
export const REQUEST_CHECKOUT_SUCCESS = '[Cart] Request Checkout Success';

export class AddToCart {
  readonly type = ADD_TO_CART;
  constructor(public payload: number) {}
}

export class RequestCheckout {
  readonly type = REQUEST_CHECKOUT;
  constructor() {}
}

export class RequestCheckoutSuccess {
  readonly type = REQUEST_CHECKOUT_SUCCESS;
  constructor() {}
}

export class RequestCheckoutFail {
  readonly type = REQUEST_CHECKOUT_FAIL;
  constructor() {}
}

export type CartAction = 
  AddToCart | 
  RequestCheckoutSuccess | 
  RequestCheckout |
  RequestCheckoutFail;
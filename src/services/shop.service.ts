import { Product } from './../models/product.model';
import _products from './products.json';

const PRODUCTS_TIMEOUT = 100;
const CHECKOUT_TIMEOUT = 300;

let delay = (time: number) => (result: any) => new Promise(resolve => setTimeout(() => resolve(result), time));

class ShopService {
  getProducts() {
    return Promise.resolve(_products).then(delay(PRODUCTS_TIMEOUT)); 
  }

  buyProducts() {
    return Promise.resolve(null).then(delay(CHECKOUT_TIMEOUT)); 
  }
}

export default ShopService;
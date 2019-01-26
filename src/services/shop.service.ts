import { Product } from './../models/product.model';
import _products from './products.json';

let delay = (time: number) => (result: any) => new Promise(resolve => setTimeout(() => resolve(result), time));

class ShopService {
  getProducts() {
    return Promise.resolve(_products).then(delay(2000)); 
  }

  buyProducts() {
    return Promise.resolve(null).then(delay(2000)); 
  }
}

export default ShopService;
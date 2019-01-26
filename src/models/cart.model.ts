import { Product } from './product.model';
export interface Cart {
  addedIds: number[],
  quantityById: { [id: number]: number  }
}
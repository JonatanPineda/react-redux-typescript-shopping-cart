export interface Cart {
  addedIds: number[],
  quantityById: { [id: number]: number }
}
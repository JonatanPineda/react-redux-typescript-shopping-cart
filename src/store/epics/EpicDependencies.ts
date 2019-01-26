export interface EpicDependencies {
  shopService: {
    getProducts: () => Promise<any>,
    buyProducts: () => Promise<any>
  }
}
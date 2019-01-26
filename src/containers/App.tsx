import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import { connect } from 'react-redux';
import * as fromStore from '../store';

interface Props {
  isLoadingProducts: boolean
}
class App extends Component<Props> {
  render() {
    return (
      <>
        {
          this.props.isLoadingProducts ? (
            <h2>Loading...</h2> 
          ) : (
            <div>
              <h2>Shopping Cart Example</h2>
              <hr/>
              <ProductsContainer />
              <hr/>
              <CartContainer />
            </div>
          )
        }
      </>
    );
  }
}

export default connect(
  (state: fromStore.State) => ({ isLoadingProducts: fromStore.getProductsLoading(state) })
)(App);

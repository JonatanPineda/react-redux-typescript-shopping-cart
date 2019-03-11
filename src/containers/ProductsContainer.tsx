import * as fromStore from '../store';
import {Dispatch} from "redux";
import { connect } from 'react-redux';
import ProductsList from '../components/ProductsList';

const mapStateToProps = (state: fromStore.State) => ({
  products: fromStore.getAllProducts(state),
  isProductsLoading: fromStore.getProductsLoading(state)
});

const mapDispatchToProps = (dispatch: Dispatch<fromStore.CartAction>) => ({
  onAddToCartClicked: (productId: number) => { dispatch(new fromStore.AddToCart(productId)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);

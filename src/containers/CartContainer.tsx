import * as fromStore from '../store';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { Dispatch } from 'react';

const mapStateToProps = (state: fromStore.State) => ({
  products: fromStore.getCartProducts(state),
  total: fromStore.getTotal(state),
  isRequestingCheckout: fromStore.getIsRequestingCheckout(state)
});

const mapDispatchToProps = (dispatch: Dispatch<fromStore.CartAction>) => ({
  onCheckoutClicked: () => dispatch(new fromStore.RequestCheckout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

import React from 'react';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart-redux/cart.actions';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { selectCartItemsCount } from '../../redux/cart-redux/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { CartIconStyles,ItemCount } from './cart-icon-styles';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconStyles onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconStyles>
  );
  
  const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
  const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart-redux/cart.selectors';
import CheckOutItem from '../../components/checkout-item/checkout-item';
import { CheckOutPageContainer, CheckOutHeaderContainer } from './checkout-styles';
const CheckOutPage = ({cartItems, total}) => (
    <CheckOutPageContainer>
        <CheckOutHeaderContainer>
            <div className='header-block'>
                <span>Product</span>             

            </div>
            <div className='header-block'>
                <span>Description</span>
                

            </div>
            <div className='header-block'>
                <span>Quantity</span>
                

            </div>
            <div className='header-block'>
                <span>Price</span>
                

            </div>
            <div className='header-block'>
                <span>Remove</span>
                

            </div>

        </CheckOutHeaderContainer>

        {
            cartItems.map(cartItem =>
                <CheckOutItem key={cartItem.id} cartItem={cartItem} /> 
                )
        }

        <div className='total'>
            <span className='total'>TOTAL:{total}$ </span>
        </div>

    </CheckOutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);
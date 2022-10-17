import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    let tax  = parseFloat((total * 0.1).toFixed(2));
    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p> Orderred: {cart.length} </p>
            <p>Total Price :  ${total} </p>
            <p>Total Shipping :  ${shipping}</p>
            <p>Tax : ${tax} </p>
            <h3>Grand Total : ${total + shipping + tax} </h3>

        </div>
    );
};

export default Cart;
import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1>Order Summery</h1>
            <h2> Orderred: {cart.length} </h2>
        </div>
    );
};

export default Cart;
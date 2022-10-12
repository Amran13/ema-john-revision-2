import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {name, seller, price, stock, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="product-img" />
            <h3> {name} </h3>
            <p>Price : ${price}</p>
            <p><small>Manufacturer : {seller}</small></p>
            <p><small>Only  {stock} left. Order Soon</small></p>
            <button onClick={()=>props.handleAddToCart(props.product)}>
                 <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
        </div>
    );
};

export default Product;
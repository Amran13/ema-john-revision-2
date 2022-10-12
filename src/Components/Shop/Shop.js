import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    function handleAddToCart(product){
        setCart([...cart, product]);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summery</h1>
                <h2> Orderred: {cart.length} </h2>
            </div>
        </div>
    );
};

export default Shop;
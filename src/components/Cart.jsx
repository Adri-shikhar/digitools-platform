import React from 'react';

const Cart = ({ carts }) => {
    return (
        <div className= 'bg-gray-50 text-black text-center '>
            <h1 >Cart</h1>
            <p>{carts.length} items in cart</p>
        </div>
    );
};

export default Cart;
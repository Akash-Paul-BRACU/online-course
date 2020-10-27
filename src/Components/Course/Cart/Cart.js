import React from 'react';
const Cart = (props) => {
    const cart = props.cart;
    
  
    const total = cart.reduce((total, course) => total + course.price, 0);
    return (
        <div>
            <h1>Courses Added:{cart.length}</h1>
            <h2>Total price: ${total}</h2>
        </div>
    );
};

export default Cart;
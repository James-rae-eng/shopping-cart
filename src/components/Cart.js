import React from "react";

const Cart = (props) => {

    const totalCost= () => {
        let result = props.cartItems.reduce(function(acc, obj) {return acc + obj.price;},0);
        return result;
    }

    return (
        <div className="cart">
            {props.cartItems.length !== 0 ? 
                <div className="cartMain">
                    <div className="cartList">
                        {props.cartItems.map(product => {
                            return <div className="cartItem" key={product.id}>
                                        <div className="itemMain">
                                            <h2>{product.name}</h2>
                                            <p>£{product.price}</p> 
                                        </div>  
                                        <div className="cartBtns">
                                            <p>Quantity:{product.quantity}</p> 
                                            <button onClick={() => props.removeFromCart(product.id)}>Remove</button>  
                                        </div>   
                                        
                                    </div>
                        })}
                    </div>
                    <div className="cartSummary">
                        <h3>Total: £{totalCost()}</h3>
                        <button id="checkoutBtn">Checkout</button>
                    </div>
                </div>
            : <div>
                <p>Cart is empty</p>
            </div>
            } 
        </div>
    );
}

export default Cart;
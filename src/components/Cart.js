import React from "react";

const Cart = (props) => {

    const totalCost= () => {
        let result = props.cartItems.reduce(function(acc, obj) {
            return (acc + (obj.price * obj.quantity));
        },0);
        return result.toFixed(2);
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
                                            <div className="cartQty">
                                                <button onClick={() => props.changeQty(product.id, (product.quantity - 1))}>-</button>
                                                <p>QTY: {product.quantity}</p> 
                                                <button onClick={() => props.changeQty(product.id, (product.quantity + 1))}>+</button>
                                            </div>
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
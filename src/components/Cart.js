import React from "react";

const Cart = (props) => {

    const totalCost= () => {
        let result = props.cartItems.reduce(function(acc, obj) {return acc + obj.price;},0);
        return result;
    }

    return (
        <div className="cart">
            {props.cartItems.length !== 0 ? 
                <div>
                    <div className="cartList">
                        {props.cartItems.map(product => {
                                                return <div className="product" key={product.id}>
                                                            <h2>{product.name}</h2>
                                                            <p>£{product.price}</p>
                                                            <button onClick={() => props.removeFromCart(product.id)}>Remove</button>
                                                        </div>
                                            })}
                    </div>
                    <div className="cartSummary">
                        <h3>Total: £{totalCost()}</h3>
                        <button>Checkout</button>
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
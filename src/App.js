import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const findQuantity = (newCart) => {
    const newQuantity = newCart.reduce((n, {quantity}) => n + quantity, 0);
    setCartQuantity(newQuantity);
  }

  const addToCart = (id, quantity) => {
    let newCart = cartItems;

    // Check if this item is new to the array, if it is then add it,
    // else add to the quantity of the existing item
    const index = newCart.findIndex(item => item.id === Number(id));

    if (index === -1) {
      // Get item details from product component, based on it's id
      const item = Products.find(item => item.id === Number(id));
      // Add a quantity key value pair to use with the cart
      item.quantity = Number(quantity);
      newCart.push(item);
    } else {
      let currentNum = Number(cartItems[index].quantity);
      newCart[index].quantity = currentNum += Number(quantity);
    }

    // Update the state with the new array & set cart quantity
    setCartItems(newCart);
    findQuantity(newCart);
  }

  const removeFromCart = (id) => {
    let newCart = cartItems.filter(function(item) {
      return item.id !== Number(id)
    });
    setCartItems(newCart);
    findQuantity(newCart);
  }

  return (
    <div className="app">
      <nav>
        <h1>Ocean Coffee</h1>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartQuantity})</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
      </Routes>
    </div>
  );
}

export default App;

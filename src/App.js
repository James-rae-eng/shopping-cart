import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (id, quantity) => {
    const item = Products.find(item => item.id === Number(id));
    let newCart = cartItems;
    for (let i = 0; i < quantity; i++) {
      newCart.push(item);
    }
    setCartItems(newCart);
    setCartQuantity(newCart.length);
  }

  const removeFromCart = (id) => {
    let newCart = cartItems.filter(function(item) {
      return item.id !== Number(id)
    });
    setCartItems(newCart);
    setCartQuantity(newCart.length);
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

import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import { Home } from './components/Home';
import { Shop } from './components/Shop';

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;

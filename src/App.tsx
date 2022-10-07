import React from "react";
import Header from "./components/Header.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import Photos from "./pages/Photos.jsx";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
};
export default App;
import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="wrapper flex space-between">
      <Sidebar />
      <Products />
      <Cart />
    </div>
  );
}

export default App;

import React from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="wrapper flex space-between">
      <Filter />
      <Products />
      <Cart />
    </div>
  );
}

export default App;

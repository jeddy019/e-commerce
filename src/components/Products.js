import React, { useState } from "react";
import Sort from "./Sort";
import Product from "./Product";
import { useGlobalContext } from "./context";

function Products() {
  const [selectedOrder, setSelectedOrder] = useState("");

  const { data, selectedSizes, cartItems, incrementQuantity, setCartItems } =
    useGlobalContext();

  const handleSort = (e) => {
    setSelectedOrder(e.target.value);
  };

  const handleCart = (product) => {
    let currentItem = cartItems.findIndex((p) => p.id === product.id) !== -1;

    currentItem
      ? incrementQuantity(product.id)
      : setCartItems((prevState) => {
          return prevState.concat({ ...product, quantity: 1 });
        });
  };

  const handleProductsOrder = (order, sizes, products) => {
    let sortedProducts = [...products];

    if (sizes.length > 0) {
      sortedProducts = sortedProducts.filter((product) => {
        for (const size of sizes) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
        return false;
      });
    }

    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  let productsOrder = handleProductsOrder(selectedOrder, selectedSizes, data);

  return (
    <div className="main flex-80">
      <div className="products-filter">
        <p>
          {`${productsOrder.length} Product${
            productsOrder.length > 1 ? "s" : ""
          } found.`}{" "}
        </p>
        <Sort selectedOrder={selectedOrder} handleSort={handleSort} />
      </div>
      <div className="flex wrap">
        {productsOrder.map((product) => (
          <Product {...product} handleCart={handleCart} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;

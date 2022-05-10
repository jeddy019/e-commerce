import React from "react";
import { ReactComponent as Minus } from "./icons/minus-icon.svg";

function Decrement({ id, setCartItems }) {
  const decrementQuantity = (id) => {
    setCartItems((prevState) => {
      let updatedCartItems = prevState
        .map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        })
        .filter((product) => product.quantity !== 0);
      return updatedCartItems;
    });
  };

  return <Minus className="plus-icon" onClick={() => decrementQuantity(id)} />;
}

export default Decrement;

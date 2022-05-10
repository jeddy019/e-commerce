import React from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import { useGlobalContext } from "./context";

function CartItem({
  sku,
  title,
  availableSizes,
  style,
  currencyFormat,
  price,
  quantity,
  id,
}) {
  const { setCartItems } = useGlobalContext();

  const removeItem = (id) => {
    setCartItems((prevState) => {
      let updatedCartItems = prevState.filter((product) => {
        return product.id !== id;
      });
      return updatedCartItems;
    });
  };

  return (
    <div className="cart-item">
      <img
        src={`${process.env.PUBLIC_URL}/static/products/${sku}_2.jpg`}
        alt={title}
        width="80"
      />
      <div className="cart-item-details">
        <p className="cart-item-name">{title}</p>
        <p>
          {availableSizes[0]} | {style}
        </p>
        <p>Quantity: {quantity}</p>
      </div>
      <div className="cart-price">
        <p className="cart-cross" onClick={() => removeItem(id)}>
          x
        </p>
        <p className="price">{`${currencyFormat + price}`}</p>
        <div>
          <Increment id={id} />
          <Decrement id={id} setCartItems={setCartItems} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;

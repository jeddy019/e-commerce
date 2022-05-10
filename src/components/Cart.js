import React, { useState } from "react";
import ClosedCart from "./ClosedCart";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import { ReactComponent as OpenCartIcon } from "./icons/open-cart-icon.svg";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useGlobalContext();

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const quantityReducer = (accumulator, value) => {
    accumulator = accumulator + value.quantity;
    return accumulator;
  };

  const amountReducer = (accumulator, value) => {
    accumulator = accumulator + value.price * value.quantity;
    return accumulator;
  };

  let totalQuantity = cartItems.reduce(quantityReducer, 0);
  let totalAmount = cartItems.reduce(amountReducer, 0);

  const message = () => {
    if (cartItems.length === 0) {
      return "";
    } else {
      return alert(
        `Thanks for checking in with us. Your total purchase is: $${totalAmount}`
      );
    }
  };

  if (!isOpen) {
    return <ClosedCart open={open} totalQuantity={totalQuantity} />;
  }

  return (
    <aside className="cart">
      <div onClick={close} className="close-btn">
        X
      </div>
      <div className="cart-body">
        <div className="cart-heading">
          <div className="cart-icon">
            <OpenCartIcon className="icon" />
            <span className="item-count">{totalQuantity}</span>
          </div>
          <h2>Cart</h2>
        </div>
        {cartItems.map((item, i) => {
          return <CartItem key={i} {...item} />;
        })}
        <div className="cart-checkout">
          <div>
            <p>TOTAL</p>
            <p>$ {totalAmount}</p>
          </div>
          <button onClick={message}>
            {`${
              cartItems.length === 0
                ? "YOUR CART IS CURRENTLY EMPTY"
                : "CHECKOUT"
            }`}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Cart;

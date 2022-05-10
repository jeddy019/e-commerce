import React from "react";
import { ReactComponent as ClosedCartIcon } from "./icons/closed-cart-icon.svg";

function ClosedCart({ open, totalQuantity }) {
  return (
    <div className="close-cart">
      <span onClick={open} className="open-btn">
        <div className="cart-icon">
          <ClosedCartIcon className="icon" />
          <span className="item-count">{totalQuantity}</span>
        </div>
      </span>
    </div>
  );
}

export default ClosedCart;

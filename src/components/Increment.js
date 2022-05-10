import React from "react";
import { useGlobalContext } from "./context";
import { ReactComponent as Plus } from "./icons/plus-icon.svg";

function Increment({ id }) {
  const { incrementQuantity } = useGlobalContext();

  return <Plus className="plus-icon" onClick={() => incrementQuantity(id)} />;
}

export default Increment;

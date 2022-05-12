import React, { useContext, useState, useEffect, useCallback } from "react";
import products from "../data.json";

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  let data = products.products;

  const handleLocalStorage = useCallback(() => {
    localStorage.setItem("carts", JSON.stringify(cartItems));

    if (localStorage.carts) {
      setCartItems(JSON.parse(localStorage.carts) || []);
    }

    window.addEventListener("beforeunload", handleLocalStorage);

    return () => {
      console.log("event unmounted");
      window.removeEventListener("beforeunload", handleLocalStorage);
    };
  }, [cartItems]);

  useEffect(() => {
    handleLocalStorage();
  }, [cartItems, handleLocalStorage]);

  const incrementQuantity = (id) => {
    setCartItems((prevState) => {
      let updatedCartItems = prevState.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return updatedCartItems;
    });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        selectedSizes,
        setSelectedSizes,
        cartItems,
        setCartItems,
        incrementQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

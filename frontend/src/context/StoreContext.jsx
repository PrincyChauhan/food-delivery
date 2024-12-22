import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets.js";
import PropTypes from "prop-types";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const defaultCart = food_list.reduce((acc, item) => {
    acc[item._id] = 0;
    return acc;
  }, {});
  const [cartItems, setCartItems] = useState(defaultCart);
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = prev[itemId] - 1;
      return { ...prev, [itemId]: Math.max(newCount, 0) }; // Prevent negative values
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;

import { useContext } from "react";
import { assets } from "../../assets/assets.js";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  const itemCount = cartItems[id] || 0; // Get count for this specific item

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={url + "/images/" + image}
          alt=""
          className="food-item-image"
        />
        {itemCount === 0 ? ( // Show "Add" button if item count is 0
          <img
            className="add"
            onClick={() => addToCart(id)} // Pass itemId to addToCart
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // Pass itemId to removeFromCart
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{itemCount}</p> {/* Display count for this item */}
            <img
              onClick={() => addToCart(id)} // Pass itemId to addToCart
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;

import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import PropTypes from "prop-types"; // Import PropTypes

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu Here</h1>
      <p className="explore-menu-text">
        Discover our delicious menu options below!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt="menu-item"
              />{" "}
              {}
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

// Add PropTypes validation
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // Validate category as a required string
  setCategory: PropTypes.func.isRequired, // Validate setCategory as a required function
};

export default ExploreMenu;

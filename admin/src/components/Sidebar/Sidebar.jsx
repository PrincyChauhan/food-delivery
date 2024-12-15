import "./sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.add_icon} alt="add_icon" />
          <p>Add Item</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order_icon" />
          <p>List Item</p>
        </div>
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="order_icon" />
          <p>Orders</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

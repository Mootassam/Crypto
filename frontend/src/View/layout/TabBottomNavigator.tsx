import React from "react";
import { Link } from "react-router-dom";
import "./styles/style.css";
function TabBottomNavigator() {
  return (
    <div className="tabbottomNavigator">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className="fas fa-home"></i>
          <p className="text__active">Markets</p>
        </div>
      </Link>

      <Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className="far fa-star"></i>
          <p className="text__active ">Portfolio</p>
        </div>
      </Link>

      <Link to="/trades" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className="fas fa-exchange-alt"></i>
          <p className="text__link">Exchange</p>
        </div>
      </Link>

      <Link to="/explore" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className="fas fa-newspaper"></i>
          <p className="text__link">Explore</p>
        </div>
      </Link>

      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className="fas fa-user"></i>
          <p className="text__link">Account</p>
        </div>
      </Link>
    </div>
  );
}

export default TabBottomNavigator;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/style.css";
function TabBottomNavigator() {
  const location = useLocation();
  console.log("====================================");
  console.log(location.pathname);
  console.log("====================================");

  const isActive = (pathname) => location.pathname === pathname;
  return (
    <div className="tabbottomNavigator">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className={`fas fa-home ${isActive("/") && "active"}`}></i>
          <p className={`text__link ${isActive("/") && "active"}`}>Markets</p>
        </div>
      </Link>

      <Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className={`far fa-star ${isActive("/portfolio") && "active"}`}></i>
          <p className={`text__link ${isActive("/portfolio") && "active"}`}>Portfolio</p>
        </div>
      </Link>

      <Link to="/trades" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className={`fas fa-exchange-alt ${isActive("/trades") && "active"}`}></i>
          <p className={`text__link ${isActive("/trades") && "active"}`}>Exchange</p>
        </div>
      </Link>

      <Link to="/explore" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className={`fas fa-newspaper ${isActive("/explore") && "active"}`}></i>
          <p className={`text__link ${isActive("/explore") && "active"}`}>Explore</p>
        </div>
      </Link>

      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        <div className="singleTab">
          <i className={`fas fa-user ${isActive("/profile") && "active"}`}></i>
          <p className={`text__link ${isActive("/profile") && "active"}`}>Account</p>
        </div>
      </Link>
    </div>
  );
}

export default TabBottomNavigator;

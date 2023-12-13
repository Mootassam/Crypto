import React from "react";
import { Link } from "react-router-dom";

function TabBottomNavigator() {
  return (
    <div className="tabbottomNavigator">
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Markets
      </Link>
      <Link to="/portfolio" style={{ color: "white", textDecoration: "none" }}>
        Portfolio
      </Link>
      <Link to="/search" style={{ color: "white", textDecoration: "none" }}>
        Search
      </Link>
      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        Profile
      </Link>
    </div>
  );
}

export default TabBottomNavigator;

import React from "react";
import { Link } from "react-router-dom";

function TabBottomNavigator() {
  return (
    <div className="tabbottomNavigator">
      <Link to="/">Markets</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/search">Search</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default TabBottomNavigator;

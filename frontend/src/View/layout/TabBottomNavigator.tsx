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
        Trades
      </Link>
      <Link to="/explore" style={{ color: "white", textDecoration: "none" }}>
        Explore
      </Link>
      <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
        Account
      </Link>
    </div>
  );
}

export default TabBottomNavigator;

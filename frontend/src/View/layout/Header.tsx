import React from "react";
import "./styles/style.css";
function Header() {
  return (
    <div className="app__header">
      <div>
        <i className="fas fa-newspaper"></i>
      </div>
      <div>
        <span>CryptoCurrencies</span>
      </div>
      <div>INR</div>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"; // Import useParams from react-router-dom
import "../styles/styles.css";
import ExchangeMarkets from "./ExchangeMarkets";
import Cryptocurrencies from "./Cryptocurrencies";
import ExchangeAbout from "./ExchangeAbout";

function ExchangePage() {
  const { id } = useParams(); // Access the id property from the useParams object
  const [active, setActive] = useState("overview");

  const handleMenuClick = (menu) => {
    setActive(menu);
  };

  return (
    <div>
      <div className="coin__menue">
        <div onClick={() => handleMenuClick("overview")}>Overview</div>
        <div onClick={() => handleMenuClick("cryptocurrencies")}>
          Cryptocurrencies
        </div>
        <div onClick={() => handleMenuClick("exchangemarkets")}>Markets</div>
      </div>
      <div className="coins__content">
        {active === "overview" && <ExchangeAbout id={id} />}
        {active === "cryptocurrencies" && <Cryptocurrencies id={id} />}
        {active === "exchangemarkets" && <ExchangeMarkets id={id} />}
      </div>
    </div>
  );
}

export default ExchangePage;

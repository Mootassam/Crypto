import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/styles.css";
import Price from "./Price";
import Abouts from "./Abouts";
import Exchanges from "./Exchanges";
import Markets from "./Markets";
function Coin() {
  const { id } = useParams();
  const [active, setActive] = useState("price");

  return (
    <div>
      <div className="header__page">
        <div>
          <Link to={"/"}>
            {" "}
            <i
              className="fas fa-long-arrow-alt-left"
              style={{ color: "white" }}
            />
          </Link>
        </div>
        <div className="page__name">
          <span>Page Name</span>
        </div>
        <div></div>
      </div>
      <div className="coin__menue">
        <div onClick={() => setActive("price")}>Price</div>
        <div onClick={() => setActive("about")}>About</div>
        <div onClick={() => setActive("exchanges")}>Exchanges</div>
        <div onClick={() => setActive("markets")}>Markets</div>
      </div>

      <div className="coins__content">
        {active === "price" && <Price id={id} />}
        {active === "about" && <Abouts id={id} />}
        {active === "exchanges" && <Exchanges id={id} />}
        {active === "markets" && <Markets id={id} />}
      </div>
    </div>
  );
}

export default Coin;

import React, { useState } from "react";
import WachListMode from "./WachListMode";
import PortfolioMode from "./PortfolioMode";
function Portfolio() {
  const [active, setActive] = useState("portfolio");

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3>My Portfolio</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div onClick={(e) => setActive("wachlist")}> wachList Mode</div>
        <div onClick={(e) => setActive("portfolio")}> Portfolio Mode</div>
      </div>

      <div className="">
        {active === "wachlist" && <WachListMode />}
        {active === "portfolio" && <PortfolioMode />}
      </div>
    </div>
  );
}

export default Portfolio;

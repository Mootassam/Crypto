import React, { useState } from "react";
import "../styles/styles.css";
import ExploreTrading from "./ExploreTrading";
import ExploreBitcoin from "./exploreBitcoin";
import ExploreBlockchain from "./exploreBlockchain";
import ExploreEthereum from "./exploreEthereum";
import ExploreAltcoins from "./exploreAltcoins";
import ExploreMetaverse from "./exploreMetaverse";
function ExplorePage() {
  const [active, setActive] = useState("trading");
  return (
    <div>
      <div className="explore__title"> TOPICS</div>
      <div className="explore__header">
        <div onClick={() => setActive("trading")}>Trading</div>
        <div onClick={() => setActive("bitcoin")}>Bitcoin</div>
        <div onClick={() => setActive("blockchain")}>Blockchain</div>
        <div onClick={() => setActive("ethereum")}>Ethereum</div>
        <div onClick={() => setActive("altcoins")}>altcoins</div>
        <div onClick={() => setActive("metaverse")}>Metaverse</div>
      </div>
      <div>
        {active === "trading" && <ExploreTrading topic={active} />}
        {active === "bitcoin" && <ExploreBitcoin topic={active} />}
        {active === "blockchain" && <ExploreBlockchain topic={active} />}
        {active === "ethereum" && <ExploreEthereum topic={active} />}
        {active === "altcoins" && <ExploreAltcoins topic={active} />}
        {active === "metaverse" && <ExploreMetaverse topic={active} />}
      </div>
    </div>
  );
}

export default ExplorePage;

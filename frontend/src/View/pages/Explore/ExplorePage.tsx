import React, { useEffect, useState } from "react";
import "../styles/styles.css";
import ExploreTrading from "./ExploreTrading";
import ExploreBitcoin from "./exploreBitcoin";
import ExploreBlockchain from "./exploreBlockchain";
import ExploreEthereum from "./exploreEthereum";
import ExploreAltcoins from "./exploreAltcoins";
import ExploreMetaverse from "./exploreMetaverse";
import SwitchTab from "../../../View/shared/SwitchTab";
import ExploreNews from "./exploreNews";
function ExplorePage() {
  const [active, setActive] = useState("news");

  const showTopic = (item) => {
    setActive(item);
  };
  useEffect(() => {}, [active]);

  return (
    <div>
      <SwitchTab showTopic={showTopic} />
      <div>
        {active === "news" && <ExploreNews topic={active} />}
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

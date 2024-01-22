import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ListCoins from "../../../View/shared/ListCoins";

function Market() {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get("http://192.168.90.76:8080/api/coins");
    setReponse(data.data.coins);
  };
  useEffect(() => {
    searchAllCoins();
  }, []);

  useEffect(() => {}, [response]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Crypto Currencies prcies and signals</h3>

      <br />
      <br />

      <ListCoins response={response} />
    </div>
  );
}

export default Market;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ExchangeMarkets(props) {
  const { id } = props;

  const [response, setResponse] = useState([]);
  const [totale, setTotale] = useState("");

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/exchanges/market/${props.id}`
      );
      setResponse(data.data.markets);
      setTotale(data.data.stats.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, [props.id]);
  return (
    <div>
      Cryptocurrencies {totale}
      {response.map((item) => (
        // coin/Qwsogvtv82FCd
        <Link to={`/coin/${item?.base?.uuid}`}>
          <p>
            {item?.base?.symbol}/{item?.quote?.symbol}
          </p>
        </Link>
      ))}
      {props.id}
    </div>
  );
}

export default ExchangeMarkets;

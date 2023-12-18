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
        `http://192.168.3.16:8080/api/exchanges/market/${props.id}`
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
        <Link to={`/coin/${item?.base?.uuid}`} style={{ textDecoration: 'none' }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img src={item.exchange.iconUrl} width={30} height={30} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>
                  {item?.base?.symbol}/{item?.quote?.symbol}
                </p>
                <p>{item.exchange.name}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "end",
              }}
            >
              <p>{item["24hVolume"]}</p>
              <p>{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ExchangeMarkets;

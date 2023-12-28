import axios from "axios";
import React, { useState, useEffect } from "react";

function ExchangeAbout(props) {
  const [response, setResponse] = useState([]);
  const [about, setAbout] = useState({});
  const [market, setMarket] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [volume, setVolume] = useState([]);

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/exchange/overview/${props.id}`
      );
      setResponse(data.data.exchange);
      setAbout(data.data.exchange);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const searchTopMarket = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/topmarket/${props.id}`
      );
      setMarket(data.data.exchange);
    } catch (error) {}
  };
  const searchTopcurrenciesbyMarket = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/topcurrenciesbymarket/${props.id}`
      );
      setMarket(data.data.exchange);
    } catch (error) {}
  };
  const searchTopcurrenciesbyvolume = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/topcurrenciesbyvolume/${props.id}`
      );
      setVolume(data.data.exchange);
    } catch (error) {}
  };

  useEffect(() => {
    searchAllCoins();
    searchTopMarket();
    searchTopcurrenciesbyMarket();
    searchTopcurrenciesbyvolume();
  }, [props.id]);

  const SingleStats = (props) => {
    const { image, name, number } = props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#fff",
            fontSize: 14,
            borderBottom: "1px solid #ffff",
            paddingBottom: 9,
            paddingTop: 9,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <img
              src={`/icons/${image}.svg`}
              alt=""
              style={{ width: 15, height: 15, objectFit: "contain" }}
            />
            <span>{name}</span>
          </div>
          <div>
            <label>{number}</label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <br /> <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 13,
          }}
        >
          <img
            src={response.iconUrl}
            style={{ width: "50px", height: "50px" }}
          />
          <h3>{response.name} exchange</h3>

          <p key={response.id}>
            View {response.name} exchange statistics and info, such as trading
            volume , market share and rank,cryptocurrencies listings.
          </p>
        </div>
        <SingleStats
          image={1}
          name="24h trading volume"
          number={response["24hVolume"]}
        />
        <SingleStats image={2} name="Exchange rank" number={response?.rank} />
        <SingleStats
          image={3}
          name="Cryptocurrencies listed"
          number={response?.numberOfCoins}
        />
        <SingleStats
          image={4}
          name="Markets"
          number={response?.numberOfMarkets}
        />
        <SingleStats
          image={5}
          name="Market share"
          number={response?.marketShare}
        />
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 13,
          }}
        >
          <h3>Top markets</h3>

          <p>
            A list of top markets on {response.name} exchange based on the
            highest 24h trading volume, with their current price.
          </p>
        </div>
        {/* styling the table  */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "white",
            }}
          >
            <span>Market</span>
            <span>24H Volume</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              color: "white",
              borderBottom: "1px solid #fff",
              paddingBottom: "8px",
            }}
          >
            <div style={{ display: "flex" }}>
              1 Image
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>BTC/FDUSD</span>
                <span>Binance</span>
              </div>
            </div>
            <div>
              <span>172.96 billion</span>
              <span>3.56 million</span>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: about.description }} />
      {props.id}
    </div>
  );
}

export default ExchangeAbout;

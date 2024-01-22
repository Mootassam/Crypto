import axios from "axios";
import React, { useState, useEffect } from "react";
import Currency from "../../../View/shared/utils/Currency";
import SingleExchange from "./SingleExchange";

function ExchangeAbout(props) {
  const [response, setResponse] = useState([]);
  const [about, setAbout] = useState({});
  const [market, setMarket] = useState([]);
  const [topCurrnencies, setTopCurrencies] = useState();
  const [currencies, setCurrencies] = useState([]);
  const [volume, setVolume] = useState([]);

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.90.76:8080/api/exchange/overview/${props.id}`
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
        `http://192.168.90.76:8080/api/topmarket/${props.id}`
      );
      setMarket(data.data.data.markets);
    } catch (error) {
      console.log(error);
    }
  };
  const searchTopcurrenciesbyMarket = async () => {
    try {
      const data = await axios.get(
        `http://192.168.90.76:8080/api/topcurrenciesbymarket/${props.id}`
      );
      setTopCurrencies(data.data.exchange);
    } catch (error) {}
  };
  const searchTopcurrenciesbyvolume = async () => {
    try {
      const data = await axios.get(
        `http://192.168.90.76:8080/api/topcurrenciesbyvolume/${props.id}`
      );
      console.log(data.data.data.coins);

      setVolume(data.data.exchange);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    searchAllCoins();
    searchTopMarket();
    searchTopcurrenciesbyMarket();
    searchTopcurrenciesbyvolume();
    searchTopMarket();
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
          <h3>{response.name} statistics</h3>

          <p key={response.id}>
            Statics showing an overview of {response.name} exchange, such as its
            24h trading volume, market share and cryptocurrencies listings. View
            exchange statistics and info, such as trading.
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
        <SingleExchange response={response} market={market} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 13,
          }}
        >
          <h3>Top Currencies by Volume</h3>

          <p>
            A list of top markets on {response.name} exchange based on the
            highest 24h trading volume, with their current price.
          </p>

          <div className="">
            <ul>
              {market.map((item) => (
                <li className="list__ofechange">
                  <div className="binance__item">
                    <div>
                      <img
                        src={item?.exchange?.iconUrl}
                        style={{ width: 30 }}
                      />
                    </div>
                    <div className="exchange__detail">
                      {item.base.symbol} / {item.quote.symbol}
                      <span className="name__ofexchange">
                        {item.exchange.name}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SingleExchange response={response} market={market} />
      </div>

      <br />
      <br />
      <div dangerouslySetInnerHTML={{ __html: about.description }} />
      {props.id}
    </div>
  );
}

export default ExchangeAbout;

import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "../styles/styles.css";
function Price(props) {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get(
      `http://192.168.3.16:8080/api/coins/price/${props.id}`
    );
    setReponse(data.data.coin);
  };

  const showingChart = () => {
    new TradingView.widget({
      autosize: true,
      symbol: `BINANCE:ETHBTC`,
      timezone: "Asia/India",
      theme: "dark",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      hideideas: true,
      hide_top_toolbar: false,
      hide__symbol: true,
      details: false,
      studies: [],
      container_id: "tvchart",
      range: false,
      hide_legend: true,
      hide_side_toolbar: true,
      allow_symbol_change: false,
      save_image: false,
      doNotStoreSettings: false,
      backgroundColor: "",

      horztouchdrag: "",
      verttouchdrag: true,

      extended_hours: "",
      hideideasbutton: false,
      withdateranges: false,
      hide_volume: false,
      padding: "",
      show_popup_button: false,
      studies_overrides: false,
      publish_source: false,

      venue: false,
      symbology: false,
      whotrades: false,
      referral_id: false,
      no_referral_id: false,
      fundamental: false,
      percentage: false,
      utm_source: false,
      utm_medium: false,
      utm_campaign: false,
    });
  };
  useEffect(() => {
    showingChart();
    searchAllCoins();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={response.iconUrl} style={{ width: 60, height: 60 }} />
          <div>
            <p> {response.name}</p>
            <p>{response.symbol}</p>
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", textAlign: "end" }}
        >
          <h2>{response.price}</h2>
          <p>Live</p>
        </div>
      </div>

      <br />
      <p dangerouslySetInnerHTML={{ __html: response.description }} />

      <div className="tradingview-widget-container" id="tvchart" style={{ width: '100%', height: 360 }}></div>
    </div>
  );
}

export default Price;

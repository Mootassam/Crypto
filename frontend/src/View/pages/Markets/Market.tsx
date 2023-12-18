import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Sparklines,
  SparklinesLine,
  SparklinesNormalBand,
  SparklinesBars,
  SparklinesSpots,
} from "react-sparklines";

function Market() {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get("http://192.168.3.16:8080/api/coins");
    setReponse(data.data.coins);
  };
  useEffect(() => {
    searchAllCoins();
  }, []);

  useEffect(() => {}, [response]);

  const changeColor = (item) => {
    if (!item) return;
    return parseFloat(item) <= 0 ? "red" : "green";
  };

  const changePrice = (price) => {
    if (!price) return;
    return parseFloat(price) <= 0 ? price : `+` + price;
  };

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
      {response.map((item, index) => (
        <Link to={`coin/${item.uuid}`} style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <p>
                <i className="fa-regular fa-heart"></i>
              </p>
              <p>{index + 1}</p>
              <img src={item.iconUrl} width={30} height={30} />
              <p>{item.name}</p>
            </div>
            <p>{item.price}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "small", fontWeight: "bold" }}>
                &nbsp;&nbsp;{item.change}&nbsp;&nbsp;
              </p>
              <Sparklines data={item.sparkline}>
                <SparklinesLine color={changeColor(item.change)} />
                <SparklinesNormalBand />
              </Sparklines>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Market;

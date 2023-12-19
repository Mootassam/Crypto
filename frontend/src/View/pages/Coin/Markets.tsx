import axios from "axios";
import React, { useState, useEffect } from "react";

function Markets(props) {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get(
      `http://192.168.3.16:8080/api/coins/markets/${props.id}`
    );
    setReponse(data.data.markets);
  };
  useEffect(() => {
    searchAllCoins();
  }, []);
  const search = () => {
    alert("search function");
  };
  return (
    <div>
      <div>
        <input type="text" placeholder="Search" />
        <button onClick={search}>search</button>
      </div>
      Markets {props.id}
      {response.map((item) => (
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <img src={item.exchange.iconUrl} alt="" width={30} height={30} />
            {item.exchange.name}
          </div>
          <div>
            <p>{item["24hVolume"]}</p>

            {item.price}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Markets;

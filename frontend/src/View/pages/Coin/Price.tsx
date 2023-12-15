import axios from "axios";
import React, { useState, useEffect } from "react";

function Price(props) {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get(
      `http://localhost:8080/api/coins/price/${props.id}`
    );
    setReponse(data.data.coin);
  };
  useEffect(() => {
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
          <img src={response.iconUrl} width={40} height={40} />
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
      <p dangerouslySetInnerHTML={{ __html: response.description }}></p>
    </div>
  );
}

export default Price;

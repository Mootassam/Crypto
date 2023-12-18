import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Exchanges(props) {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/coins/exchanges/${props.id}`
      );
      setResponse(data.data.exchanges);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchExchanges = async () => {
    try {
      const encodedSearch = encodeURIComponent(search);
      const data = await axios.get(
        `http://192.168.3.16:8080/api/coins/exchanges/${props.id}?search=${encodedSearch}`
      );
      setResponse(data.data.exchanges);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchExchanges}>Search</button>
      </div>
      <br />
      {response.map((item) => (
        <Link to={`/exchange/${item.uuid}`} style={{ textDecoration: "none" }}>
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              textAlign: "end",
              marginBottom: 15,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <img src={item.iconUrl} alt="" width={30} height={30} />
              {item.name}
            </div>

            <div>
              <p>{item["24hVolume"]}</p>
              {item.price}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Exchanges;

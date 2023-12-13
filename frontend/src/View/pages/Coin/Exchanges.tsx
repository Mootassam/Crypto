import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Exchanges(props) {
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/api/coins/exchanges/${props.id}`
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
        `http://localhost:8080/api/coins/exchanges/${props.id}?search=${encodedSearch}`
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
        <Link to={`/exchange/${item.uuid}`}>
          <div key={item.id} className="">
            <img src={item.iconUrl} alt="" width={20} height={20} />
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Exchanges;

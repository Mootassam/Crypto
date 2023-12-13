import axios from "axios";
import React, { useState, useEffect } from "react";

function Markets(props) {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get(`http://localhost:8080/api/coins/markets/${props.id}`);
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
        <div className="">
          <img src={item.exchange.iconUrl} alt="" width={20} height={20} />
          {item.exchange.name}
        </div>
      ))}
    </div>
  );
}

export default Markets;
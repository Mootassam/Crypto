import axios from "axios";
import React, { useEffect, useState } from "react";

function Cryptocurrencies(props) {
  const { id } = props;

  const [response, setResponse] = useState([]);

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.3.16:8080/api/exchange/cryptocurrencies/${props.id}`
      );
      setResponse(data.data.coins);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, [props.id]);
  return (
    <div>
      Cryptocurrencies
      {response.map((item) => (
        <p>{item.name}</p>
      ))}
      {props.id}
    </div>
  );
}

export default Cryptocurrencies;

import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleExchange from "../Coin/SingleExchange";

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
    
      <SingleExchange path="coin" response={response} name="Cryptocurrencies" />
    </div>
  );
}

export default Cryptocurrencies;

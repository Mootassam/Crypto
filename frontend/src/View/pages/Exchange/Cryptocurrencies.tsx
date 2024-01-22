import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleExchange from "../Coin/SingleExchange";

function Cryptocurrencies(props) {
  const { id } = props;

  const [response, setResponse] = useState([]);
  const [totale, setTotale] = useState("");

  const searchAllCoins = async () => {
    try {
      const data = await axios.get(
        `http://192.168.90.76:8080/api/exchange/cryptocurrencies/${props.id}`
      );
      setResponse(data.data.coins);
      setTotale(data.data.stats.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, [props.id]);
  return (
    <div>
      <br />
      <SingleExchange
        path="coin"
        response={response}
        name="Cryptocurrencies"
        total={totale}
      />
    </div>
  );
}

export default Cryptocurrencies;

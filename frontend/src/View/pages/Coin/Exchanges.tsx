import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Currency from "../../../View/shared/utils/Currency";
import SingleExchange from "./SingleExchange";

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
      <br />

      <SingleExchange path="exchange" response={response} name="Exhanges" />
    </div>
  );
}

export default Exchanges;

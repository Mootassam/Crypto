import axios from "axios";
import React, { useState, useEffect } from "react";
import SingleExchange from "./SingleExchange";

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
      <br />
      <SingleExchange
        response={response}
        path="/exchange"
        markets="markets"
        name="Markets"
      />
    </div>
  );
}

export default Markets;

import axios from "axios";
import React, { useState, useEffect } from "react";

function ExchangeAbout(props) {
  const [response, setResponse] = useState([]);
  const [about, setAbout] = useState({});
  
  const searchAllCoins = async () => {
    try {
      const data = await axios.get(`http://192.168.3.16:8080/api/exchange/overview/${props.id}`);
      setResponse(data.data.exchange.links);
      setAbout(data.data.exchange);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    searchAllCoins();
  }, [props.id]);

  return (
    <div>
      ExchangeAbout props <br /> <br />
      {response.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
      <div dangerouslySetInnerHTML={{ __html: about.description }} />
      {props.id}
    </div>
  );
}

export default ExchangeAbout;

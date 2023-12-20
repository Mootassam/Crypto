import axios from "axios";
import React, { useState, useEffect } from "react";
import removeHrefAndSentenceFromContent from "../../../View/shared/removeLink";

function Abouts(props) {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get(
      `http://192.168.3.16:8080/api/coins/about/${props.id}`
    );
    setReponse(data.data);
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
      {removeHrefAndSentenceFromContent(response?.content)}
      {response?.concat}
    </div>
  );
}

export default Abouts;

import { useEffect, useState } from "react";
import axios from "axios";
function Market() {
  const [response, setReponse] = useState([]);
  const searchAllCoins = async () => {
    const data = await axios.get("http://localhost:8080/api/coins");
    setReponse(data.data.coins);
  };
  useEffect(() => {
    searchAllCoins();
  }, []);

  return (
    <div>
      <h1>Crypto Currencies prcies and signals</h1>

      <br />
      <br />
      {response.map((item, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "20px",
          }}
        >
          <p>
            <i className="fa-regular fa-heart"></i>
          </p>
          <p>{index + 1}</p>
          <img src={item.iconUrl} width={20} height={20} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Market;

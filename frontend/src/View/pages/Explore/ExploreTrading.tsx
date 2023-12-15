import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ExploreTrading(props) {
  const [response, setResponse] = useState();
  const [data, setData] = useState<any>();
  const topic = props.topic;
  const searchTrading = async () => {
    const result = await axios.get(`http://localhost:8080/api/topic/${topic}`);
    setResponse(result.data);
    console.log(response);
  };

  useEffect(() => {
    searchTrading();
  }, []);

  useEffect(() => {}, [response]);

  return (
    <div>
      <div>
        Articels Count : {response?.total}
        {response?.data?.map((item) => (
          <Link
            to={`/explore/detail/${item.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                paddingBottom: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={`https://academy-public.coinmarketcap.com/${item?.image?.thumbnail}`}
                alt=""
              />
              <p>{item.title}</p>
              <p>{item.meta}</p>
              author : <p>{item.author.name}</p>
              created_at : <p>{item.created_at}</p>
              reading_time : <p>{item.reading_time}</p>
              updating_at : <p>{item.updated_at}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ExploreTrading;

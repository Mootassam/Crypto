import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import removeHrefFromContent from "../../../../View/shared/removeLink";

function ViewdetailTopic() {
  const { id } = useParams();
  const [response, setResponse] = useState<any>();
  const FetchDetaill = async () => {
    const data = await axios.get(
      `http://localhost:8080/api/explore/topic/${id}`
    );

    setResponse(data.data);
  };
  useEffect(() => {
    FetchDetaill();
    console.log(response);
  }, [id]);

  return (
    <div>
      <h3>{response?.title}</h3>
      <p>{response?.author.name}</p>
      <p>{response?.created_at}</p>
      <p>{response?.updated_at}</p>
      <p>{response?.meta}</p>
      <img
        src={`https://academy-public.coinmarketcap.com/${response?.image.thumbnail}`}
        alt=""
      />

      {removeHrefFromContent(response?.content)}
      <h3>Related Topics</h3>

      {response?.related.map((item) => (
        <>
          <img
            src={`https://academy-public.coinmarketcap.com/${item.image.thumbnail}`}
            alt=""
          />
          <p>{item?.title}</p>
          <p>{item?.meta}</p>
          <p>{item?.author.name}</p>
          <p>{item?.created_at}</p>
          <p>{item?.updated_at}</p>
        </>
      ))}
    </div>
  );
}

export default ViewdetailTopic;

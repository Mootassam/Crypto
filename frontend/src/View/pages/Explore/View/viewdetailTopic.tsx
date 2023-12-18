import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import removeHrefFromContent from "../../../../View/shared/removeLink";
import SingleItem from "../SingleItem";
import Dates from "../../../../View/shared/utils/Dates";

function ViewdetailTopic() {
  const { id } = useParams();
  const [response, setResponse] = useState<any>();
  const FetchDetaill = async () => {
    const data = await axios.get(
      `http://192.168.3.16:8080/api/explore/topic/${id}`
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
      <p>By {response?.author.name}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <p className="p__singledetail">
          Created {Dates.Monthago(response?.created_at)}
        </p>
        <p className="p__singledetail">
          last upated {Dates.Monthago(response?.updated_at)}
        </p>
      </div>

      <div className="singledetaill__subtitle">
        <p className="p__singledetail">{response?.meta}</p>
      </div>
      <img
        src={`https://academy-public.coinmarketcap.com/${response?.image.thumbnail}`}
        alt=""
      />

      {removeHrefFromContent(response?.content)}
      <h3 style={{ paddingBottom: 10 }}>Related Topics</h3>

      <SingleItem response={response?.related} />
    </div>
  );
}

export default ViewdetailTopic;

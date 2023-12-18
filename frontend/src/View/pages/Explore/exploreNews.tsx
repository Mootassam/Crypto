import axios from "axios";
import { useEffect, useState } from "react";
import Dates from "../../../View/shared/utils/Dates";

function ExploreNews(props) {
  const [response, setResponse] = useState();
  const topic = props.topic;
  const searchNews = async () => {
    const result = await axios.post(
      `http://192.168.3.16:8080/api/explore/news`
    );
    setResponse(result.data.data);
  };

  useEffect(() => {
    searchNews();
  }, []);

  useEffect(() => {
    console.log("====================================");
    console.log(response);
    console.log("====================================");
  }, [response]);
  return (
    <div className="news__item">
      <div className="news__today">
        <i
          className="fas fa-calendar"
          style={{ fontSize: 18, color: "#858ca2" }}
        ></i>
        <p className="news__todatext"> Today</p>
      </div>
      <div className="item__list">
        {response?.map((item) => (
          <div className="">
            <div>
              <label className="time__news">
                {Dates.newTime(item.meta.updatedAt)}
              </label>
              <img
                loading="lazy"
                src={item?.cover}
                alt=""
                width="100%"
                height="230px"
                style={{ paddingTop: 8 }}
              />
            </div>
            <h3 className="news__h3">{item?.meta?.title}</h3>
            <p className="news__p">{item?.meta?.subtitle}</p>
            <div className="ligne__item">
              <h5 className="news__h5">{item?.meta.sourceName}</h5>
              <span className="date__news" style={{ color: "#fff" }}>
                {Dates.NewsDate(item.meta.updatedAt)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreNews;

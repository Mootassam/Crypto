import React from "react";
import { Link } from "react-router-dom";
import Dates from "../../../View/shared/utils/Dates";

function SingleItem(props) {
  const { response } = props;
  return (
    <div>
      <div>
        {response?.total && (
          <div className="news__today" style={{ paddingBottom: 20 }}>
            <h2 className="trading__h2">Articels ({response?.total})</h2>
          </div>
        )}

        {response?.map((item) => (
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
              <h3 className="news__h3">{item.title}</h3>
              <p className="news__p">{item.meta}</p>
              <div className="small__detail">
                <p className="text__smalldetail">By {item.author.name}</p>
                <div className="text__aligndetail">
                  <p className="text__smalldetail ">
                    <i className="far fa-clock __smallspace"></i>
                    {Dates.Monthago(item.updated_at)}
                  </p>
                  <p className="text__smalldetail">
                    <i className="far fa-eye"></i> {item.reading_time}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SingleItem;

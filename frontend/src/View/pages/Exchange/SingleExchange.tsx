import React from "react";
import Currency from "../../../View/shared/utils/Currency";

function SingleExchange(props) {
  const { response, market , name } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 13,
      }}
    >
      <h3>Top Currencies by Volume</h3>

      <p>
        A list of top markets on {response.name} exchange based on the highest
        24h trading volume, with their current price.
      </p>

      <div className="">
        <ul>
          {market.map((item) => (
            <li className="list__ofechange">
              <div className="binance__item">
                <div>
                  <img src={item?.exchange?.iconUrl} style={{ width: 30 }} />
                </div>
                <div className="exchange__detail">
                  {item.base.symbol} / {item.quote.symbol}
                  <span className="name__ofexchange">{item.exchange.name}</span>
                </div>
              </div>
              <div>
                <span className="amount__exchange">
                  <p>{Currency.formatNumber(item["24hVolume"])}</p>
                </span>
                <span></span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SingleExchange;

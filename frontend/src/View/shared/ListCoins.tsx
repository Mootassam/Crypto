import React from "react";
import { Link } from "react-router-dom";
import {
  Sparklines,
  SparklinesLine,
  SparklinesNormalBand,
} from "react-sparklines";

function ListCoins(props) {
  const changeColor = (item) => {
    if (!item) return;
    return parseFloat(item) <= 0 ? "red" : "green";
  };

  const changePrice = (price) => {
    if (!price) return;
    return parseFloat(price) <= 0 ? price : `+${price}`;
  };

  const { response } = props;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: "start", width: "40%" }}>All coins</th>
            <th style={{ textAlign: "end", width: "40%" }}>Price</th>
            <th style={{ textAlign: "center", width: "20%" }}>3m</th>
          </tr>
        </thead>
        <tbody>
          {response.map((item, index) => (
            <tr key={index}>
              <Link
                key={index}
                to={`coin/${item.uuid}`}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  width: "100%",
                  color: "#b1b4c3",
                }}
              >
                <td
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 23% auto auto)", // Three columns with specified sizes
                    gridTemplateRows: "auto", // Automatic row sizing
                    // Add a gap between columns and rows
                    justifyContent: "flex-start",
                    width: "40%",
                    textAlign: "start",
                  }}
                >
                  <div>{index + 1}</div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      style={{ width: 30, height: 30 }}
                    />
                    <div>
                      <p>{item.name}</p>
                      <p style={{ fontSize: 11 }}>{item.symbol}</p>
                    </div>
                  </div>
                </td>

                <td style={{ width: "40%", justifyContent: "end" }}>
                  241,654.36
                </td>
                <td
                  style={{
                    flexDirection: "column",

                    width: "20%",
                  }}
                >
                  <p style={{ color: changeColor(item.change) }}>
                    {changePrice(item.change)}
                  </p>
                  <Sparklines data={item.sparkline}>
                    <SparklinesLine color={changeColor(item.change)} />
                    <SparklinesNormalBand />
                  </Sparklines>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListCoins;

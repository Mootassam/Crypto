import React from "react";
import Currency from "../../../View/shared/utils/Currency";
import { Link } from "react-router-dom";

function SingleExchange(props) {
  const { path, response, markets, base, name } = props;

  const showPath = (item) => {
    let paths;
    if (base) {
      paths = `/coin/${item.base.uuid}`;
    } else {
      paths = `/${path}/${item.uuid}`;
    }
    return paths;
  };
  return (
    <table>
      <thead>
        <tr style={{ paddingBottom: 6 }}>
          <th style={{ textAlign: "start" }}>{name}</th>
          <th style={{ textAlign: "end" }}>24h volumes</th>
        </tr>
      </thead>
      <tbody>
        {response.map((item, index) => (
          <tr key={index}>
            <Link
              key={index}
              to={showPath(item)}
              style={{
                textDecoration: "none",
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
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
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {markets ? (
                    <img
                      src={item?.exchange?.iconUrl}
                      alt={item.name}
                      style={{ width: 30, height: 30 }}
                    />
                  ) : (
                    <img
                      src={item.iconUrl}
                      alt={item.name}
                      style={{ width: 30, height: 30 }}
                    />
                  )}

                  <div>
                    {base ? (
                      <p>
                        {item?.base?.symbol}/{item?.quote?.symbol}
                      </p>
                    ) : (
                      ""
                    )}
                    {markets ? (
                      <p style={base ? { fontSize: 13, color: "#60A0C4" } : {}}>
                        {item.exchange.name}
                      </p>
                    ) : (
                      `${item?.name}`
                    )}
                    <p style={{ fontSize: 13, color: "#60A0C4" }}>
                      {item.symbol}
                    </p>
                  </div>
                </div>
              </td>

              <td
                style={{
                  display: "flex",
                  width: "35%",
                  justifyContent: "end",
                  flexDirection: "column",
                  textAlign: "start",
                  alignItems: "end",
                }}
              >
                <p> {Currency.formatNumber(item["24hVolume"])}</p>

                <p style={{ fontSize: 13, color: "#60A0C4" }}>
                  {Currency.formatNumber(item?.price)}
                </p>
              </td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SingleExchange;

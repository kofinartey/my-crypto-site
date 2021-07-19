import React, { useContext } from "react";
import { StocksContext } from "./StocksContext";

function Stocks() {
  const { stocks } = useContext(StocksContext);
  console.log(stocks);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th></th>
            <th>Primary Exchange</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr>
              <td>{stock.name}</td>
              <td>{stock.ticker}</td>
              <td>{stock.primary_exchange}</td>
              <td>{stock.locale}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;

import React, { useState, createContext, useEffect } from "react";

export const StocksContext = createContext();

export function StocksProvider(props) {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const getStocks = async () => {
      const response = await fetch(
        "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=100&apiKey=wiRag4nj94nksHvLeL583CQec07wo1yp"
      );
      const data = await response.json();
      setStocks(data.results);
    };
    getStocks();
  }, []);

  const value = { stocks, setStocks };
  return (
    <StocksContext.Provider value={value}>
      {props.children}
    </StocksContext.Provider>
  );
}

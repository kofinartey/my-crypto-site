import React, { createContext, useState } from "react";

export const MarketContext = createContext();

export function MarketProvider(props) {
  const [markets, setMarkets] = useState([
    { name: "crypto", active: true },
    { name: "stocks", active: false },
    { name: "energy", active: false },
    { name: "metals", active: false },
  ]);
  const value = { markets, setMarkets };
  return (
    <MarketContext.Provider value={value}>
      {props.children}
    </MarketContext.Provider>
  );
}

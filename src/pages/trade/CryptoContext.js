import React, { useState, useEffect, createContext } from "react";

export const CryptoContext = createContext();

export function CryptoProvider(props) {
  const [tradeData, setTradeData] = useState([]);
  const [numCoins, setNumCoins] = useState(10);
  const [searching, setSearching] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${numCoins}&page=1&sparkline=false`;

  //fetch data from API
  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setTradeData(data);
      setLoading(false);
    };
    console.log(tradeData);
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numCoins, API_URL]);

  //search through data with searchWord
  const search = (searchWord) => {
    let word = searchWord.toLowerCase();
    let newList = tradeData.filter(
      (coin) => coin.name.toLowerCase().includes(word) || coin.id.includes(word)
    );
    setSearchResults(newList);
  };

  //run search again when number of coins changes
  useEffect(() => {
    setSearchWord("");
  }, [numCoins]);

  const coinData = searching ? searchResults : tradeData;
  const value = {
    coinData,
    search,
    searching,
    searchWord,
    setSearchWord,
    setSearching,
    setTradeData,
    setNumCoins,
    loading,
    setLoading,
  };
  return (
    <div>
      <CryptoContext.Provider value={value}>
        {props.children}
      </CryptoContext.Provider>
    </div>
  );
}

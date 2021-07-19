import React, { useState, useEffect, useContext } from "react";
import { CryptoContext } from "./CryptoContext";
import Loader from "../../components/loader/Loader";
import styles from "./CryptoStyles";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function Crypto() {
  const classes = styles();
  const [select, setSelect] = useState(10);
  const [loading, setLoading] = useState(false);
  const {
    coinData,
    search,
    setSearching,
    searchWord,
    setSearchWord,
    setNumCoins,
  } = useContext(CryptoContext);

  const changeSelect = (e) => {
    setSelect(e.target.value);
    setNumCoins(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchWord(e.target.value);
    setSearching(true);
  };

  //call search anytime input changes
  useEffect(() => {
    search(searchWord);
  }, [searchWord, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchWord);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [select]);
  return (
    <>
      <div className={classes.filter__section}>
        {/* ***** SELECT ***** */}
        <div className={classes.select__container}>
          <p>Number of coins</p>
          <select className={classes.select} onChange={changeSelect}>
            <option defaultValue value={10}>
              Ten
            </option>
            <option value={20}>Twenty</option>
            <option value={50}>Fifty</option>
            <option value={100}>Hundred</option>
          </select>
        </div>

        {/* ***** SEARCH FROM ***** */}
        <div className={classes.search}>
          <form onSubmit={handleSubmit}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={searchWord}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
      {loading ? (
        <div className={classes.loader}>
          <Loader />
        </div>
      ) : (
        <div className={classes.data_container}>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.currency}>Currency</th>
                <th></th>
                <th>Current Price</th>
                <th>Total Volume</th>
                <th>24h</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coinData.map((coin, index) => (
                <tr key={coin.name}>
                  {/* ///// currency ///// */}
                  <td className={`${classes.currency} ${classes.cur__icon}`}>
                    <span>{index + 1}</span>
                    <img
                      className={classes.coin__icon}
                      src={coin.image}
                      alt={`${coin.name} logo`}
                    />
                    <span>{coin.name}</span>
                  </td>
                  <td className={`${classes.currency} ${classes.symbol}`}>
                    ({coin.symbol})
                  </td>

                  {/* ///// numbers ///// */}
                  <td>$ {coin.current_price}</td>
                  <td>$ {coin.total_volume}</td>
                  <td
                    style={{
                      color:
                        coin.price_change_percentage_24h < 1
                          ? "red"
                          : "lightgreen",
                    }}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)} %
                    {coin.price_change_percentage_24h < 1 ? (
                      <ArrowDropDownIcon color="secondary" />
                    ) : (
                      <ArrowDropUpIcon style={{ color: "lightgreen" }} />
                    )}
                  </td>
                  <td>$ {coin.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Crypto;

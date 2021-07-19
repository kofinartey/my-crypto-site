import React from "react";
import { CryptoProvider } from "./CryptoContext";
import { StocksProvider } from "./StocksContext";
import { MarketProvider } from "./MarketContext";
import CustomDrawer from "./CustomDrawer";
import Main from "./Main";
import styles from "./TradeStyles";

export default function Trade() {
  const classes = styles();

  return (
    <MarketProvider>
      <CryptoProvider>
        <StocksProvider>
          <div className={classes.root}>
            <div className={classes.drawer}>
              <CustomDrawer />
            </div>
            <div className={classes.main}>
              <Main />
            </div>
          </div>
        </StocksProvider>
      </CryptoProvider>
    </MarketProvider>
  );
}

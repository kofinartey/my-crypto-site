import React from "react";
import Crypto from "./Crypto";
import { AppBar, Avatar, Toolbar } from "@material-ui/core";

import styles from "./MainStyles";

function Main() {
  const classes = styles();
  // const { markets } = useContext(MarketContext);

  return (
    <div className={classes.root}>
      {/* ***** APPBAR ***** */}
      <AppBar className={classes.appbar}>
        <Toolbar>
          <div className={classes.toolbar}>
            <h2>Crypto</h2>
            <Avatar style={{ backgroundColor: "black" }}>U</Avatar>
          </div>
        </Toolbar>
      </AppBar>
      {/* ***** MAIN CONTENT OF PAGE ***** */}
      <div className={classes.page__content}>
        <div className={classes.wrapper}>
          {/* ***** SEARCH AND NUMBER OF COINS ***** */}

          <Crypto />
          {/* <Stocks /> */}
          {}
        </div>
      </div>
    </div>
  );
}

export default Main;

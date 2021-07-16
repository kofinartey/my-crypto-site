import React from "react";
import styles from "../styles/HomeHeaderStyles";
import { Link } from "react-router-dom";

function HomeHeader() {
  const classes = styles();
  return (
    <div className={classes.HomeHeader}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.heading}>
            SOME REALY COOL TEXT TO MAKE YOU WANT TO WORK WITH US
          </h1>

          <Link exact to="/market" className={classes.visit}>
            VISIT MARKET
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;

import React, { useContext } from "react";
import { MarketContext } from "./MarketContext";

import OfflineBoltIcon from "@material-ui/icons/OfflineBolt";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import SettingsIcon from "@material-ui/icons/Settings";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import styles from "./DrawerStyles";
import { Link } from "react-router-dom";
import logo from "../../images/logo-on-tomato.svg";

function CustomDrawer() {
  const classes = styles();
  const { markets, setMarkets } = useContext(MarketContext);
  const buttons = [
    {
      type: "Crypto",
      id: "crypto",
      icon: <MonetizationOnOutlinedIcon id="crypto" className={classes.icon} />,
    },
    {
      type: "Stocks",
      id: "stocks",
      icon: <AttachMoneyIcon id="stocks" className={classes.icon} />,
    },
    {
      type: "Energy",
      id: "energy",
      icon: <OfflineBoltIcon id="energy" className={classes.icon} />,
    },
    {
      type: "Metals",
      id: "metals",
      icon: <ViewStreamIcon id="metals" className={classes.icon} />,
    },
  ];

  const handleClick = (e) => {
    const id = e.target.id;
    console.log(id);
    const falseMarkets = markets.map((market) => ({
      ...market,
      active: false,
    }));
    const newMarkets = falseMarkets.map((market) => ({
      ...market,
      active: market.name === id ? true : false,
    }));
    setMarkets(newMarkets);
    console.log(markets);
  };

  return (
    <aside className={classes.drawer}>
      <div className={classes.logo__container}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={classes.buttons}>
        {buttons.map((button) => (
          <li
            className={classes.button}
            key={button.type}
            id={button.id}
            // change color for the current visible market
            style={
              {
                // backgroundColor: markets[button.id].active && "hsl(353,100%,63%)",
              }
            }
            onClick={handleClick}
          >
            <div className={classes.icon__background}>{button.icon}</div>
            <span id={button.id}>{button.type}</span>
          </li>
        ))}
      </ul>

      <ul className={classes.settings}>
        <li>
          <div className={classes.icon__background}>
            <SettingsIcon className={classes.icon} />
          </div>
          <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
}

export default CustomDrawer;

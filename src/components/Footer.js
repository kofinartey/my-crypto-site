import React from "react";
import styles from "../styles/FooterStyles";
import logo from "../images/logo-on-white-2.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export default function Footer() {
  const classes = styles();
  return (
    <footer className={classes.Footer}>
      <div className={classes.footer__wrapper}>
        <div className={`${classes.group} ${classes.one}`}>
          <Link to="/">
            <img src={logo} alt="company logo" />
          </Link>
          <p>Commish Investment Ltd</p>
          <p>235 Everton Street</p>
          <p>Accra</p>
        </div>

        <div className={classes.two}>
          <div className={`${classes.group}`}>
            <Link to="/">Home</Link>
            <Link to="/trade">Trade</Link>
            <Link to="/learn">Learn</Link>
            <Link to="/news">News</Link>
          </div>
          <div className={`${classes.group}`}>
            <Link to="#">About</Link>
            <Link to="#">Legal</Link>
            <Link to="#">Social</Link>
            <Link to="#">Terms and Conditions</Link>
          </div>
        </div>

        <div className={`${classes.group} ${classes.three}`}>
          <Button
            className={classes.button}
            startIcon={<ArrowDropUpIcon />}
            color="secondary"
            onClick={() => {
              window.scroll({ top: 0, behavior: "smooth" });
            }}
          >
            Back To Top
          </Button>
          <p>©Copyright 2021</p>
        </div>
      </div>
    </footer>
  );
}

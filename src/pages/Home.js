import React from "react";

import NavSection from "../components/navbar/NavSection";
import HomeHeader from "../components/HomeHeader";
import ChooseUs from "../components/ChooseUs";
import styles from "../styles/HomeStyles";
import TrendingNews from "../components/TrendingNews";
import { withStyles } from "@material-ui/styles";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home(props) {
  const { classes } = props;
  return (
    <>
      <NavSection className={classes.nav} />
      <div className={classes.Home}>
        <HomeHeader />
        <ChooseUs />
        <TrendingNews />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}

export default withStyles(styles)(Home);

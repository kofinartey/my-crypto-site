import { makeStyles } from "@material-ui/core";
import bg from "../images/woman-mobile.png";
import bgDesktop from "../images/woman-desktop.png";

const styles = makeStyles({
  HomeHeader: {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  wrapper: {
    width: "90%",
    // backgroundColor: "rgba(0,0,0,0.1)",
  },
  content: {
    // width: "%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    bottom: "2rem",
  },
  heading: {
    color: "#3F176D",
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  visit: {
    width: "70%",
    fontSize: "1rem",
    color: "white",
    textAlign: "center",

    // margin: "3rem 0",
    padding: ".5rem .5rem",
    backgroundColor: "#E13738",
    transition: "all .3s ease-in-out",
    boxShadow: "10px 10px 13px 0px rgba(0,0,0,0.37)",
    "&:hover": {
      opacity: "0.5",
    },
  },
  "@media(min-width: 600px)": {
    HomeHeader: {
      backgroundImage: `url(${bgDesktop})`,
    },
  },
  "@media(min-width: 720px)": {
    heading: {
      // backgroundColor: "red",
      fontSize: "1.2rem",
    },
  },
  "@media(min-width: 45rem)": {
    HomeHeader: {
      height: "500px",
    },
    wrapper: {
      width: "75%",
    },
    content: {
      width: "40%",
      bottom: "5rem",
    },
    heading: {
      fontSize: "2.2rem",
    },
  },
  "@media(min-width: 64rem)": {
    HomeHeader: {
      height: "700px",
    },
    heading: {
      fontSize: "2.5rem",
    },
    content: {
      bottom: "7rem",
    },
    visit: {
      fontSize: "1.8rem",
      padding: "1rem 1rem",
    },
  },
});

export default styles;

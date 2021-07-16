import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  Navbar: {
    width: "100%",
    height: "5rem",
    display: "flex",
    justifyContent: "center",
  },

  wrapper: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
  },
  Navbar__nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  desktop__links: {
    width: "60%",
    justifyContent: "space-between",
    display: "none",
  },
  nav__links: {
    width: "40%",
    display: "flex",
    justifyContent: "space-between",
    "& a": {
      color: "black",
      padding: "0.5rem 1rem",
      borderRadius: "2rem",
      transition: "all .3s ease-in-out",
      "&:hover": {
        color: "white",
        backgroundColor: "#E13738",
      },
    },
  },
  signIn: {
    backgroundColor: "#E13738",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    transition: "all .3s ease-in-out",
    "&:hover": {
      opacity: "0.5",
    },
  },
  DropDownMenu: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    top: "5rem",
    left: "0",
    backgroundColor: "rgba(63,23,109,.9)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem",
    zIndex: "100",
    transition: "all .3s ease-in-out",
  },

  DropDownItem: {
    width: "100%",
    padding: "1.5rem 0",
    margin: "0.2rem",
    textAlign: "center",
    color: "white",
    backgroundColor: "#562098",
    transition: "all .3s ease-in-out",

    borderRadius: "0.5rem",
    "&:hover": {
      backgroundColor: "#290F47",
    },
    "&:nth-of-type(4)": {
      backgroundColor: "white",
      color: "#470E8B",
      "&:hover": {
        backgroundColor: "#FF645C",
      },
    },
  },

  "@media(min-width:64rem)": {
    wrapper: {
      width: "75%",
    },
    desktop__links: {
      display: "flex",
    },
    menu__button: {
      display: "none",
    },
  },
});

export default styles;

import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  Footer: {
    padding: "3rem 0",
    position: "relative",
    top: "3rem",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  footer__wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
  },

  group: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0",
    "& a": {
      margin: ".2rem",
    },
    "& a:hover": {
      color: "#E13738",
    },
  },

  one: {
    order: "3",
  },
  two: {
    order: "1",
    display: "flex",
    justifyContent: "space-around",
  },
  three: {
    order: "4",
  },
  button: {
    marginBottom: "3rem",
  },
  "@media(min-width: 48rem)": {
    Footer: {
      textAlign: "left",
    },
    footer__wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    one: {
      order: "1",
      backgroundColor: "white",
    },
    two: {
      width: "50%",
    },
  },

  "@media(min-width: 64rem)": {
    footer__wrapper: {
      width: "75%",
    },
  },
});

export default styles;

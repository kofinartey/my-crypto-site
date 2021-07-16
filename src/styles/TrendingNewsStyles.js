import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  News: {
    backgroundColor: "#3F176D",
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    paddingBottom: "6rem",
  },
  wrapper: {
    width: "90%",
  },
  "@media(min-width: 45rem)": {
    news__wrapper: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    heading: {
      fontSize: "2rem",
    },
  },
  "@media(min-width: 64rem)": {
    News: {
      paddingBottom: "10rem",
    },
    wrapper: {
      width: "75%",
    },
  },
});

export default styles;

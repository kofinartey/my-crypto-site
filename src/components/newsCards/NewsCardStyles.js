import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  NewsCard: {
    fontWeight: "300",
    margin: " 4rem 0",
  },
  newsImg: {
    width: "100%",
    marginBottom: "1rem",
  },
  title: {
    color: "#FF645C",
    margin: "1rem 0",
  },
  story: {
    margin: ".5rem 0",
  },
  more: {
    color: "#FF645C",
    margin: "2rem 0",
    "&:hover": {
      color: "white",
      opacity: "0.5",
    },
  },

  "@media(min-width: 45rem)": {
    NewsCard: {
      //   width: "30%",
      width: "48%",
      marginBottom: "0",
    },
  },

  "@media(min-width: 64rem)": {
    NewsCard: {
      //   width: "30%",
      width: "30%",
      marginBottom: "0",
    },
  },
});

export default styles;

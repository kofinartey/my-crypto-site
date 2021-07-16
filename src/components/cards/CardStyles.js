import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  Card: {
    display: "flex",
    marginBottom: "2rem",
    backgroundColor: "#F7F7F7",
    borderRadius: "10px",
  },

  top: {
    background: `linear-gradient(135deg, rgba(255,64,87,1) 0%, rgba(149,41,99,1) 44%, rgba(63,23,109,1) 77%)`,
    borderRadius: "10px 0 0 10px",
    justifyContent: "center",
    display: "none",
  },
  img: {
    transform: "scale(0.3)",
  },
  bottom: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    "& h3": {
      paddingBottom: "1rem",
    },
  },

  "@media(min-width:600px)": {
    top: {
      display: "flex",
    },
    img: {
      transform: "scale(0.5)",
    },
    bottom: {
      padding: "1rem",
    },
  },

  "@media(min-width:900px)": {
    Card: {
      maxWidth: "30%",
      flexDirection: "column",
    },
    top: {
      borderRadius: "10px 10px 0 0",
    },
  },

  "@media(min-width:64rem)": {
    top: { padding: " 2rem" },
    img: { transform: "scale(0.6)" },
  },
});

export default styles;

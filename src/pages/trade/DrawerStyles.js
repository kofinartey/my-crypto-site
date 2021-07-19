import { makeStyles } from "@material-ui/core";
const mauve = {
  primary: "#290F47",
  secondary: "#3F176D",
};
const tomato = {
  primary: "#E13738",
  secondary: "#FF4057",
  light: "#FDE9E9",
};

const styles = makeStyles({
  drawer: {
    backgroundColor: tomato.primary,
    color: "white",
    // width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    padding: "1rem 0",
    position: "relative",
  },
  logo__container: {
    position: "relative",
    "& img": {
      width: "10rem",
    },
  },
  buttons: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  button: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    margin: ".2rem auto",
    padding: ".5rem 0 .5rem 3rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all .2s ease-in-out",
    "& span": {
      marginLeft: ".5rem",
    },
    "&:hover": {
      backgroundColor: tomato.secondary,
    },
  },

  icon__background: {
    width: "2rem",
    height: "2rem",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "7px",
  },
  icon: {
    color: tomato.primary,
  },

  settings: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    backgroundColor: mauve.primary,
    padding: "0.5rem 0",
    cursor: "pointer",
    "& li": {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& span": {
        marginLeft: ".5rem",
      },
    },
    "&:hover": {
      backgroundColor: mauve.secondary,
    },
  },
});

export default styles;

import { makeStyles } from "@material-ui/core";
const mauve = {
  primary: "#290F47",
  secondary: "#311254",
  tertiary: "#3F176D",
};
const tomato = {
  primary: "#E13738",
  secondary: "#FF4057",
  light: "#FDE9E9",
};
const styles = makeStyles({
  //   ***** SELECT *****//
  select__container: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginRight: "1rem",
    },
  },
  select: {
    backgroundColor: mauve.tertiary,
    color: "white",
    border: "none",
    width: "10rem",
    padding: "1rem",
    borderRadius: ".5rem",
    "& option": {
      // color: "red",
      margin: "1rem",
      padding: "1rem",
    },
  },

  // ***** SEARCH FIELD ***** //
  filter__section: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  },
  search: {
    position: "relative",
    borderRadius: ".6rem",
    backgroundColor: mauve.tertiary,
    color: "white",
    marginLeft: "0",
    width: "25rem",
    "&:focus": {
      backgroundColor: "red",
    },
  },
  searchIcon: {
    padding: "1rem",
    marginRight: "1rem",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    paddingLeft: "1rem",
  },
  inputInput: {
    padding: "1rem 1rem 1rem 0",
    paddingLeft: `calc(1em + 20px)`,
    width: "100%",
  },
  ///TABLE STYLES////
  data_container: {
    overflowY: "scroll",
    maxHeight: "70vh",
    "&::-webkit-scrollbar": {
      width: ".3rem",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: tomato.primary,
      borderRadius: "1rem",
    },
  },
  table: {
    width: "100%",
    borderSpacing: "1rem",
    position: "relative",

    "& thead": {
      color: tomato.secondary,
      position: "sticky",
      "& th": {
        position: "sticky",
        top: "0rem",
        marginBottom: "0",
        backgroundColor: mauve.primary,
        paddingBottom: "1rem",
      },
    },
    "& th,td": {
      fontWeight: "200",
      textAlign: "end",
      padding: "0 2rem",
      margin: "1rem 0",
    },

    "& $currency": {
      textAlign: "start",
    },
    "& tbody": {
      "& tr": {
        backgroundColor: mauve.secondary,
        margin: "1rem 0",
        borderTop: `.5rem solid ${mauve.primary}`,
        "&:hover": {
          backgroundColor: mauve.tertiary,
          cursor: "pointer",
        },
      },
    },
  },
  cur__icon: {
    display: "flex",
    alignItems: "center",
    "& img": {
      width: "2rem",
      height: "2rem",
      marginRight: "1rem",
    },
    "& span:nth-of-type(1)": {
      marginRight: "1rem",
    },
  },
  currency: {},
  symbol: {
    textTransform: "uppercase",
  },

  loader: {
    position: "absolute",
    top: "40%",
    left: "50%",
  },
});

export default styles;

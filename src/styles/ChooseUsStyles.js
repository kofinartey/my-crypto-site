import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  choose: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",
  },
  wrapper: {
    width: "90%",
  },
  choose__title: {
    color: "#3F176D",
    marginBottom: "2rem",
    fontSize: "1.5rem",
  },

  "@media(min-width:900px)": {
    choose: {
      padding: "4rem 0",
    },
    cards__wrapper: {
      display: "flex",
      justifyContent: "space-between",
    },

    "@media(min-width:64rem)": {
      choose__title: {
        fontSize: "2rem",
      },
      wrapper: {
        width: "75%",
        justifyContent: "center",
      },
    },
  },

  // choose: {
  //   display: "flex",
  //   justifyContent: "center",
  //   padding: "8rem 0",
  // },
  // wrapper: {
  //   width: "75%",
  // },
  // cards__wrapper: {
  //   width: "100%",
  //   display: "flex",
  //   justifyContent: "space-between",
  // },
  // choose__title: {
  //   marginBottom: "2rem",
  // },
  // "@media(max-width: 48rem)": {
  //   cards__wrapper: {
  //     flexDirection: "column",
  //   },
  // },
});

export default styles;

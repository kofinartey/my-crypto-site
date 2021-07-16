import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  Subscribe: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem 0",

    position: "relative",
  },
  wrapper1: {
    width: "100%",
    backgroundColor: "#E13738",
    color: "white",
    borderRadius: "4rem 4rem 0 0",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    padding: "3rem 0",
    top: "-4rem",
  },
  wrapper: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  Subscribe__text: {
    marginBottom: "2rem",
  },
  form: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    border: "none",
    borderRadius: "30px",
    padding: "1rem 1rem",
    width: "65%",
    marginRight: "1rem",
  },
  button: {
    border: "none",
    color: "white",
    fontSize: "1rem",
    backgroundColor: "#470E8B",
    borderRadius: "30px",
    padding: ".5rem 1rem",
    "&:hover": {
      opacity: ".8",
    },
  },
  "@media(min-width: 45rem)": {
    Subscribe__text: {
      fontSize: "2rem",
    },
  },
  "@media(min-width: 64rem)": {
    wrapper1: {
      borderRadius: "6rem 6rem 0 0",
      top: "-6rem",
    },
    form: {
      width: "500px",
    },
    input: {
      width: "430px",
    },
  },
});

export default function Subscribe() {
  const classes = styles();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };
  return (
    <div className={classes.Subscribe}>
      <div className={classes.wrapper1}>
        <div className={classes.wrapper}>
          <h2 className={classes.Subscribe__text}>
            Subscribe to our newsletter
          </h2>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={handleChange}
              className={classes.input}
              type="email"
              placeholder="Enter your email..."
            />
            <button className={classes.button}>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

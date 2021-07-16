import React from "react";

import styles from "./CardStyles";

export default function Card({ data }) {
  const classes = styles();
  return (
    <div className={classes.Card}>
      <div className={classes.top}>
        <img
          className={classes.img}
          src={data.icon}
          alt={`${data.title} icon`}
        />
      </div>
      <div className={classes.bottom}>
        <h3>{data.title}</h3>
        <p>{data.text}</p>
      </div>
    </div>
  );
}

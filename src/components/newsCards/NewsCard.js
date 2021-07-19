import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewsCardStyles";

export default function NewsCard({ data }) {
  const classes = styles();
  return (
    <div className={classes.NewsCard}>
      <img src={data.img} alt="" className={classes.newsImg} />
      <h4 className={classes.title}>{data.title}</h4>
      <p className={classes.story}>{data.story}</p>
      <Link to="#" className={classes.more}>
        Read More...
      </Link>
    </div>
  );
}

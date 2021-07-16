import React from "react";
import NewsCard from "./newsCards/NewsCard";
import styles from "../styles/TrendingNewsStyles";
import news1 from "../images/new-1.png";
import news2 from "../images/new-2.png";
import news3 from "../images/new-3.png";

const newsData = [
  {
    id: 1,
    title: "A trending story in today's business world",
    img: news1,
    story:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    id: 2,
    title: "A trending story in today's business world",
    img: news2,
    story:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
  {
    id: 3,
    title: "A trending story in today's business world",
    img: news3,
    story:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
  },
];

function TrendingNews() {
  const classes = styles();
  return (
    <section className={classes.News}>
      <div className={classes.wrapper}>
        <h1 className={classes.heading}>Trending News</h1>
        <div className={classes.news__wrapper}>
          {newsData.map((news) => (
            <NewsCard data={news} key={news.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingNews;

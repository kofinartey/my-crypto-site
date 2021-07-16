import React from "react";
import Card from "./cards/Card";
import timeIcon from "../images/icon-time.png";
import moneyIcon from "../images/icon-money.png";
import rocketIcon from "../images/icon-rocket.png";

import styles from "../styles/ChooseUsStyles";

const cardData = [
  {
    title: "Time Saving",
    icon: timeIcon,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it .",
  },
  {
    title: "Easy on wallet",
    icon: moneyIcon,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it",
  },
  {
    title: "Fast transactions",
    icon: rocketIcon,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it ",
  },
];

function ChooseUs() {
  const classes = styles();
  return (
    <div className={classes.choose}>
      <div className={classes.wrapper}>
        <h1 className={classes.choose__title}>Why Trade With Us</h1>
        <div className={classes.cards__wrapper}>
          {cardData.map((card) => (
            <Card data={card} key={card.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;

import React, { useState } from "react";
import styles from "./Cards.module.css";
import SingleCard from "../singleCard/SingleCard";
import cardImg1 from "../../assets/cardImg1.png";
import cardImg2 from "../../assets/cardImg2.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import hero11 from "../../assets/hero11.png";

const Cards = () => {
  const [item, setitem] = useState(
    [
      { id: 1, imgSrc: cardImg1, stat: "" },
      { id: 1, imgSrc: card1, stat: "" },
      { id: 2, imgSrc: cardImg2, stat: "" },
      { id: 2, imgSrc: card2, stat: "" },
      { id: 3, imgSrc: html, stat: "" },
      { id: 3, imgSrc: html, stat: "" },
      { id: 4, imgSrc: css, stat: "" },
      { id: 4, imgSrc: css, stat: "" },
      { id: 5, imgSrc: js, stat: "" },
      { id: 5, imgSrc: js, stat: "" },
      { id: 6, imgSrc: hero11, stat: "" },
      { id: 6, imgSrc: hero11, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [count, setCount] = useState(0);
  const [prevId, setPrevId] = useState(-1);

  const chechId = (current) => {
    if (item[current].id == item[prevId].id) {
      item[current].stat = "correct";
      item[prevId].stat = "correct";
      setitem([...item]);
      setPrevId(-1);
    } else {
      item[current].stat = "wrong";
      item[prevId].stat = "wrong";
      setitem([...item]);
      setTimeout(() => {
        item[current].stat = "";
        item[prevId].stat = "";
        setitem([...item]);
        setPrevId(-1);
      }, 300);
    }
    setCount(count + 1);
  };

  const handleCard = (id) => {
    if (prevId === -1) {
      item[id].stat = "active";
      setitem([...item]);
      setPrevId(id);
    } else {
      chechId(id);
    }
  };

  const handleNewGame = () => {
    setItem((prevItems) => {
      const shuffledItems = prevItems.sort(() => Math.random() - 0.5);
      return shuffledItems.map((item) => ({ ...item, stat: "" }));
    });
    setCount(0);
    setPrevId(-1);
  };

  return (
    <div className={styles.cardsContainer}>
      {item.map((singleitem, index) => (
        <SingleCard
          singleitem={singleitem}
          id={index}
          handleCard={handleCard}
        />
      ))}
      ;
      <h1 style={{ position: "absolute", top: "20%", left: "-20%" }}>
        Turn {count}
      </h1>
      <button className={styles.btn} onClick={handleNewGame}>
        New Game
      </button>
    </div>
  );
};

export default Cards;

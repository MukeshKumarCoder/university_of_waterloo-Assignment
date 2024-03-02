import React from "react";
import styles from "./GamePage.module.css";
import Button2 from "../../components/button2/Button2";
import Cards from "../../components/cards/Cards";

const GamePage = () => {
  return (
    <div className={styles.gameBox}>
      <Button2 />
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default GamePage;

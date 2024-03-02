import React from "react";
import styles from "./Play.module.css";
import layout from "../../assets/layout.png";
import Button from "../../components/button/Button";
import playButton from "../../assets/play.png";
import Button2 from "../../components/button2/Button2";
import blueH from "../../assets/blueH.png";
import orangeH from "../../assets/orangeH.png";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/gamepage");
  };
  return (
    <div className={styles.playContainer}>
      <Button img={playButton} handleNext={handleNext} />
      <Button2 />
      <div className={styles.cardBox}>
        <div className={styles.card}>
          <img src={orangeH} alt="image" />
        </div>
        <div className={styles.card}>
          <img src={blueH} alt="image" />
        </div>
        <div className={styles.card}>
          <img style={{position:"absolute", top:"0", width:"170px"}} src={orangeH} alt="image" />
          <img style={{position:"absolute", bottom:"0", width:"170px"}} src={blueH} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Play;

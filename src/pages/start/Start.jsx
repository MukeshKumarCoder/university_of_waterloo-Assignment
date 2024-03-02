import React from "react";
import styles from "./Start.module.css"
import layout from "../../assets/layout.png";
import monkey from "../../assets/Group 153.png"
import grass from "../../assets/Vector 123.png"
import star from "../../assets/Star.png"
import setting from "../../assets/Cog.png"
import img1 from "../../assets/Ellipse 308.png"
import img2 from "../../assets/Ellipse 307.png"
import cloud from "../../assets/Group 149.png"
import Button from "../../components/button/Button";
import startButton from "../../assets/Group 123.png"
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate()
  const handleNext = ()=>{
    navigate("/next")
  }
  return (
    <div className={styles.container}>
      <img className={styles.cloud} src={cloud} alt="cloud" />
      <img className={styles.monkey} src={monkey} alt="monkey" />
      <img className={styles.grass} src={grass} alt="grass" />
      <img className={styles.star} src={star} alt="star" />
      <img className={styles.setting} src={setting} alt="setting" />
      <img className={styles.img1} src={img1} alt="img1" />
      <img className={styles.img2} src={img2} alt="img2" />
      <img className={styles.img3} src={img1} alt="img1" />
      <img className={styles.img4} src={img2} alt="img2" />
      <Button handleNext={handleNext} img={startButton} />
      <p style={{fontSize: "1.6rem"}}>Welcome Kiddo !</p>
    </div>
  );
};

export default Start;

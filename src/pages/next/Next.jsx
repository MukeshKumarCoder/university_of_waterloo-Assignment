import React from "react";
import styles from "../start/Start.module.css";
import layout from "../../assets/layout.png";
import monkey from "../../assets/Group 153.png";
import grass from "../../assets/Vector 123.png";
import star from "../../assets/Star.png";
import setting from "../../assets/Cog.png";
import img1 from "../../assets/Ellipse 308.png";
import img2 from "../../assets/Ellipse 307.png";
import cloud from "../../assets/Group 149.png";
import Button from "../../components/button/Button";
import nextButton from "../../assets/next.png";
import Button2 from "../../components/button2/Button2";
import { useNavigate } from "react-router-dom";

const Next = () => {
  const navigate = useNavigate()
  const handleNext = ()=>{
    navigate("/yes")
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
      <Button handleNext={handleNext} img={nextButton} />
      <Button2 />
      <p>
        Hi , I am Mizo ! <br /> and I love bananas
      </p>
    </div>
  );
};

export default Next;

import React from "react";
import backButton from "../../assets/Group 156.png";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button2 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <button onClick={handleBack} className={styles.btn}>
      <img src={backButton} alt="backButton" />
    </button>
  );
};

export default Button2;

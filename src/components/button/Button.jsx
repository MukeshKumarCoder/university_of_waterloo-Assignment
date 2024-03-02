import React from 'react'
import styles from "./Button.module.css"

const Button = ({img, handleNext}) => {
  return (
    <button className={styles.nextBtn} onClick={handleNext}>
      <img src={img}/>
    </button>
  )
}

export default Button

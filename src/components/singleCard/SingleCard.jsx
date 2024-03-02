import React from "react";
import  "./SingleCard.css";

const SingleCard = ({ singleitem, id, handleCard }) => {
  const itemClass = singleitem.stat ? "active " + singleitem.stat : "";
  return (
    <>

    <div className={"card" + itemClass} onClick={() => handleCard(id)}>
      <img width={"150px"} src={singleitem.imgSrc} alt="Image" />
    </div>
    </>
  );
};

export default SingleCard;

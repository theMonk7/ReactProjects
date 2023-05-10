import styles from "./ImageCard.module.css";
import { useState } from "react";
import { waterImage } from "../Assets/ImageAssets";
const ImageCard = (props) => {
  const { image, uniqueId, onCardClick, state } = props;
  const flipImage = () => {
    onCardClick(uniqueId);
  };

  const containerStyles = `${styles.container} ${
    state === "correct" ? styles.correct : styles.hidden
  }`;

  return (
    <>
      <div className={containerStyles} onClick={flipImage}>
        <img
          src={state === "correct" ? image : waterImage}
          alt="Icon of a famous person"
          className={styles.iconImage}
        />
      </div>
    </>
  );
};

export default ImageCard;

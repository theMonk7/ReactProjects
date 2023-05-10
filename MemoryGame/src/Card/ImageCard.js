import styles from "./ImageCard.module.css";
import { useState } from "react";
import waterImage from "../Assets/water.png";
import ImageAssets from "../Assets/ImageAssets";
const ImageCard = (props) => {
  const [showImage, setShowImage] = useState(false);
  const flipImage = () => {
    setShowImage((prev) => !prev);
  };
  const containerStyles = `${styles.container} ${
    showImage ? styles.container_show : styles.container_hide
  }`;
  return (
    <>
      <div className={containerStyles} onClick={flipImage}>
        <img
          src={showImage ? ImageAssets.brandiLove : waterImage}
          alt="Icon image"
          className={styles.iconImage}
        />
      </div>
    </>
  );
};

export default ImageCard;

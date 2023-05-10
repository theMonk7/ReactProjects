import styles from "./ImageCard.module.css";
import { useState } from "react";
import { waterImage } from "../Assets/ImageAssets";
const ImageCard = (props) => {
  const { image, key } = props;
  const [showImage, setShowImage] = useState(false);
  const flipImage = () => {
    setShowImage((prev) => !prev);
  };

  const containerStyles = `${styles.container} ${
    showImage ? styles.container_show : styles.container_hide
  }`;

  return (
    <>
      <div className={containerStyles} onClick={flipImage} key={key}>
        <img
          src={showImage ? image : waterImage}
          alt="Icon of a famous person"
          className={styles.iconImage}
        />
      </div>
    </>
  );
};

export default ImageCard;

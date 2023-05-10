import styles from "./GameGrid.module.css";
import ImageAssets from "../Assets/ImageAssets";
import ImageCard from "../Card/ImageCard";
const GameGrid = (props) => {
  const imgArray = [];
  let duplicatedObj = { ...ImageAssets, ...ImageAssets };
  let i = 0;
  Object.entries(duplicatedObj).forEach(([key, value]) => {
    i += 1;
    return imgArray.push({
      id: i,
      ...value,
    });
  });

  imgArray.sort((a, b) => Math.random() - 0.5);

  return (
    <div className={styles.gridContainer}>
      {imgArray.map((value, key, arr) => {
        return <ImageCard image={value.image} key={value.tag} />;
      })}
    </div>
  );
};

export default GameGrid;

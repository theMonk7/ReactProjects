import styles from "./GameGrid.module.css";
import ImageAssets from "../Assets/ImageAssets";
import ImageCard from "../Card/ImageCard";
import { CARD_STATE } from "../Utils/Constants";
import { useState } from "react";
const GameGrid = (props) => {
  const setUp = () => {
    let imgArray = [];
    Object.entries(ImageAssets).forEach(([key, value]) => {
      return imgArray.push(value);
    });
    imgArray = imgArray.concat(imgArray);
    imgArray.sort((a, b) => Math.random() - 0.5);
    for (let i = 0; i < imgArray.length; i++) {
      imgArray[i] = {
        ...imgArray[i],
        id: i,
        state: CARD_STATE.HIDDEN,
      };
    }
    return imgArray;
  };
  let imgArray = setUp();
  const uniqueAssets = imgArray.length / 2;
  const [imageCards, setImageCards] = useState(imgArray);
  const [prevSelected, setPrevSelected] = useState(-1);

  let [correctMatchCount, setCorrectMatchCount] = useState(0);
  const onCardClick = (data) => {
    console.log(data);
    updateCardState(data, CARD_STATE.CORRECT);
    if (prevSelected === -1) {
      setPrevSelected(data);

      console.log("utkarsh 1");
    } else {
      if (imageCards[prevSelected].tag === imageCards[data].tag) {
        setPrevSelected(-1);
        setCorrectMatchCount((k) => {
          return k + 1;
        });
        console.log("utkarsh 2");
        console.log(correctMatchCount);
      } else {
        updateCardState(prevSelected, CARD_STATE.HIDDEN);
        updateCardState(data, CARD_STATE.HIDDEN);
        setPrevSelected(-1);
        // setTimeout(() => {
        //   updateCardState(prevSelected, CARD_STATE.HIDDEN);
        //   updateCardState(data, CARD_STATE.HIDDEN);
        //   setPrevSelected(-1);
        //   console.log("utkarsh 3");
        // }, 1000);
      }
    }
  };

  const updateCardState = (index, val) => {
    setImageCards((cards) => {
      return cards.map((value, idx, _) => {
        return idx === index
          ? {
              ...value,
              state: val,
            }
          : value;
      });
    });
  };
  console.log(imageCards);
  return (
    <>
      {correctMatchCount === uniqueAssets ? (
        <div style={{ height: 100, width: 100 }}>YOU WON BITCH</div>
      ) : null}
      <div className={styles.gridContainer}>
        {imageCards.map((value, key, arr) => {
          return (
            <ImageCard
              image={value.image}
              key={value.id}
              onCardClick={onCardClick}
              uniqueId={value.id}
              state={value.state}
            />
          );
        })}
      </div>
    </>
  );
};

export default GameGrid;

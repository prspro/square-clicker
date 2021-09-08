import { useState } from "react";
import { initialData } from "../data/initialData";

export default function useSquaresGame() {
  const [gameData, setGameData] = useState(initialData);

  const updateScore = (score) => {
    // const data = {
    //   ...gameData,
    //   totalScore: gameData.totalScore + score,
    // };
    // console.log(data);
    // setGameData(data);
    setGameData((prev) => {
      return {
        ...prev,
        totalScore: prev.totalScore + score,
      };
    });
  };

  const incClicksCount = () => {
    // const data = {
    //   ...gameData,
    //   totalClicksCount: gameData.totalClicksCount + 1,
    // };
    // console.log(data);
    // setGameData(data);
    setGameData((prev) => {
      return {
        ...prev,
        totalClicksCount: prev.totalClicksCount + 1,
      };
    });
  };

  return {
    gameData,
    updateScore,
    incClicksCount,
  };
}

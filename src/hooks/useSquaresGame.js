import { useState } from "react";
import { initialData } from "../data/initialData";

export default function useSquaresGame() {
  const [gameData, setGameData] = useState(initialData);

  const updateScore = (score) => {
    const data = {
      ...gameData,
      totalScore: gameData.totalScore + score,
    };
    setGameData(data);
  };

  const incClicksCount = () => {
    const data = {
      ...gameData,
      totalClicksCount: gameData.totalClicksCount + 1,
    };
    setGameData(data);
  };

  return {
    gameData,
    updateScore,
    incClicksCount,
  };
}

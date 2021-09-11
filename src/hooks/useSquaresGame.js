import { useState } from "react";
import { initialData } from "../data/initialData";

export default function useSquaresGame() {
  const [gameData, setGameData] = useState(initialData);

  const updateScore = (score) => {
    setGameData((prev) => {
      return {
        ...prev,
        totalScore: prev.totalScore + score,
        totalClicksCount: prev.totalClicksCount + 1,
      };
    });
  };

  const testAutoclicker = (id, score) => {
    setGameData((prev) => {
      return {
        ...prev,
        totalScore: prev.totalScore + score,
        totalClicksCount: prev.totalClicksCount + 1,
        clickers: prev.clickers.map((entry) => {
          if (entry.id === id) {
            console.log(entry);
            return {
              ...entry,
              score: entry.score + score,
              clicks: entry.clicks + 1,
            };
          } else {
            return entry;
          }
        }),
      };
    });
  };

  return {
    gameData,
    updateScore,
    testAutoclicker,
  };
}

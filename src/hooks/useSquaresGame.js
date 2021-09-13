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

  const squareClick = () => {
    setGameData((prev) => {
      return {
        ...prev,
        totalScore: prev.totalScore + 1,
        totalClicksCount: prev.totalClicksCount + 1,
      };
    });
  };

  const autoclickerTick = (id) => {
    setGameData((prev) => {
      const data = prev;
      const score = Math.pow(
        data.clickersProductivity,
        data.clickers.find((entry) => {
          return entry.id === id;
        }).productivityPow
      );
      return {
        ...prev,
        totalScore: prev.totalScore + score,
        totalClicksCount: prev.totalClicksCount + 1,
        clickers: prev.clickers.map((entry) => {
          if (entry.id === id) {
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

  const autoclickerUpgrade = (id) => {
    setGameData((prev) => {
      const data = prev;
      const price = Math.pow(
        data.clickersPrice,
        data.clickers.find((entry) => {
          return entry.id === id;
        }).pricePow
      );

      return {
        ...data,
        totalScore: data.totalScore - price,
        clickers: data.clickers.map((clicker) => {
          if (clicker.id === id) {
            return {
              ...clicker,
              pricePow: clicker.pricePow + 1,
              productivityPow: clicker.productivityPow + 1,
            };
          } else {
            return clicker;
          }
        }),
      };
    });
  };

  return {
    gameData,
    squareClick,
    autoclickerTick,
    autoclickerUpgrade,
  };
}

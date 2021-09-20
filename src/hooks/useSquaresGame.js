import { useState } from "react";
import { initialData } from "../data/initialData";

export default function useSquaresGame() {
  const [gameData, setGameData] = useState(initialData);

  const totalProducedPointsCount = gameData.clickers
    .map((entry) => {
      return entry.score;
    })
    .reduce((accum, current) => {
      return accum + current;
    });

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
      const { productivity, productivityPow } = data.clickers.find((entry) => {
        return entry.id === id;
      });
      const score = Math.pow(productivity, productivityPow);
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
      const { price, pricePow } = data.clickers.find((entry) => {
        return entry.id === id;
      });
      const deltaPrice = Math.pow(price, pricePow);
      return {
        ...data,
        totalScore: data.totalScore - deltaPrice,
        clickers: data.clickers.map((clicker) => {
          if (clicker.id === id) {
            return {
              ...clicker,
              pricePow: clicker.pricePow + 1,
              productivityPow: clicker.productivityPow + 1,
              // score: clicker.score - deltaPrice,
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
    totalProducedPointsCount,
    squareClick,
    autoclickerTick,
    autoclickerUpgrade,
  };
}

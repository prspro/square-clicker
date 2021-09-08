import { useState } from "react";

export default function useSquare({ gameData, updateScore, incClicksCount }) {
  const mainSquareClick = () => {
    incClicksCount();
    updateScore(5);
  };

  return {
    mainSquareClick,
  };
}

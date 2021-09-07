import React from "react";
import useSquaresGame from "../hooks/useSquaresGame";
import Square from "../Square/Square";

export default function SquaresGame() {
  const { gameData, updateScore, incClicksCount } = useSquaresGame();
  return (
    <div className="squares-scene">
      <div className="squares-scene__col squares-scene__col--main">
        <p className="squares-scene__score">
          Total score: {gameData.totalScore}
        </p>
        <p className="squares-scene__clicks">
          Total clicks: {gameData.totalClicksCount}
        </p>
        <Square
          updateScore={(score) => {
            updateScore(score);
          }}
          incClicksCount={() => {
            incClicksCount();
          }}
        />
      </div>
      <div className="squares-scene__col squares-scene__col--autoclicks"></div>
    </div>
  );
}

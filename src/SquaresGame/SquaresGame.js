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
          gameData={gameData}
          updateScore={(score) => {
            updateScore(score);
          }}
          incClicksCount={() => {
            incClicksCount();
          }}
        />
      </div>
      <ul className="squares-scene__col squares-scene__col--autoclicks">
        {gameData.clickers.map((clicker) => {
          return (
            <li className="square" key={clicker.id}>
              <div className="square__surface"></div>
              <button className="square__btn">Upgrade: 0</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

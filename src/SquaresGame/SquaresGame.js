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
      <ul className="squares-scene__col squares-scene__col--autoclicks autoclickers-list">
        {gameData.clickers.map((clicker) => {
          return (
            <li className="square autoclickers-list__item" key={clicker.id}>
              <button
                className="square__surface"
                onClick={() => {
                  updateScore(11);
                  incClicksCount();
                }}
              >
                <span className="square__clicks">CLicks: 0</span>
                <span className="square__score">Score: 0</span>
              </button>
              <button className="square__upgrade-btn">Upgrade: 0</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

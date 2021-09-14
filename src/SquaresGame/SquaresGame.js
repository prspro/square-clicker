import React from "react";
import useSquaresGame from "../hooks/useSquaresGame";
import Square from "../Square/Square";
import Autoclicker from "../Autoclicker/Autoclicker";

export default function SquaresGame() {
  const { gameData, squareClick, autoclickerTick, autoclickerUpgrade } =
    useSquaresGame();
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
          updateScore={() => {
            squareClick();
          }}
        />
      </div>
      <ul className="squares-scene__col squares-scene__col--autoclicks autoclickers-list">
        {gameData.clickers.map((clicker, idx) => {
          return (
            <li className="autoclickers-list__item" key={idx}>
              <Autoclicker
                totalScore={gameData.totalScore}
                clickersPrice={gameData.clickersPrice}
                clickerData={clicker}
                autoclickerTick={autoclickerTick}
                autoclickerUpgrade={autoclickerUpgrade}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

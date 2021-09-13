import React from "react";
import useSquare from "../hooks/useSquare";

export default function Square(props) {
  const { mainSquareClick, clicks, score } = useSquare(props);
  return (
    <div className="square">
      <button
        onClick={() => {
          mainSquareClick();
        }}
        className="square__surface square__surface--big"
      >
        <span className="square__clicks">CLicks: {clicks}</span>
        <span className="square__score">Score: {score}</span>
      </button>
    </div>
  );
}

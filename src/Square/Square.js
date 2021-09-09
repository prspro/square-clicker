import React from "react";
import useSquare from "../hooks/useSquare";

export default function Square(props) {
  const { mainSquareClick } = useSquare(props);
  return (
    <div className="square">
      <button
        onClick={() => {
          mainSquareClick();
        }}
        className="square__surface square__surface--big"
      >
        <span className="square__clicks">CLicks: 0</span>
        <span className="square__score">Score: 0</span>
      </button>
      <button className="square__upgrade-btn">Upgrade: 0</button>
    </div>
  );
}

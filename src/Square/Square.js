import React from "react";
import useSquare from "../hooks/useSquare";

export default function Square(props) {
  const { mainSquareClick } = useSquare(props);
  return (
    <div className="square">
      <div
        onClick={() => {
          mainSquareClick();
        }}
        className="square__surface square__surface--big"
      ></div>
      <button>Upgrade: 0</button>
    </div>
  );
}

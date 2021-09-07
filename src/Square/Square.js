import React from "react";
import useSquare from "../hooks/useSquare";

export default function Square(props) {
  const { mainSquareClick } = useSquare(props);
  return (
    <div
      onClick={() => {
        mainSquareClick();
      }}
      className="square square--big"
    ></div>
  );
}

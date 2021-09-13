import React from "react";
import useAutoclicker from "../hooks/useAutoclicker";

export default function Autoclicker(props) {
  const { handleClick } = useAutoclicker(props);
  return (
    <div className="square">
      <button
        className="square__surface"
        onClick={() => {
          handleClick();
        }}
      >
        <span className="square__clicks">
          CLicks: {props.clickerData.clicks}
        </span>
        <span className="square__score">Score: {props.clickerData.score}</span>
      </button>
      <button className="square__upgrade-btn">
        Upgrade: {Math.pow(10, props.clickerData.pricePow)}
      </button>
    </div>
  );
}

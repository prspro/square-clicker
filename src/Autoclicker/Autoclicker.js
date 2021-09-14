import React from "react";
import useAutoclicker from "../hooks/useAutoclicker";

export default function Autoclicker(props) {
  const { isActive, isUpgradable, squarePrice, handleClick } =
    useAutoclicker(props);

  const btnClassList = ["square__upgrade-btn"];
  if (isUpgradable) {
    btnClassList.push("square__upgrade-btn--enabled");
  } else {
    btnClassList.push("square__upgrade-btn--disabled");
  }

  return (
    <div className="square">
      <div className="square__surface">
        <span className="square__clicks">
          CLicks: {props.clickerData.clicks}
        </span>
        <span className="square__score">Points: {props.clickerData.score}</span>
      </div>
      <button
        className={btnClassList.join(" ")}
        onClick={() => {
          handleClick();
        }}
      >
        {isActive ? "Upgrade" : "Buy"}: {squarePrice} point
        {squarePrice > 1 ? "s" : ""}
      </button>
    </div>
  );
}

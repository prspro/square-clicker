import React from "react";
import useAutoclicker from "../hooks/useAutoclicker";
import classnames from "classnames";

export default function Autoclicker(props) {
  const { isActive, isUpgradable, clickerPrice, handleClick } =
    useAutoclicker(props);

  return (
    <div className="square">
      <div className="square__surface">
        <span className="square__clicks">
          CLicks: {props.clickerData.clicks}
        </span>
        <span className="square__score">Points: {props.clickerData.score}</span>
      </div>
      <button
        className={classnames("square__upgrade-btn", {
          "square__upgrade-btn--enabled": isUpgradable,
          "square__upgrade-btn--disabled": !isUpgradable,
        })}
        onClick={() => {
          handleClick();
        }}
      >
        {isActive ? "Upgrade" : "Buy"}: {clickerPrice} point
        {clickerPrice > 1 ? "s" : ""}
      </button>
    </div>
  );
}

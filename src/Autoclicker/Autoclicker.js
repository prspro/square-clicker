import React from "react";
import useAutoclicker from "../hooks/useAutoclicker";
import classnames from "classnames";

export default function Autoclicker(props) {
  const { isActive, isUpgradable, clickerPrice, productivity, handleClick } =
    useAutoclicker(props);

  return (
    <div className="square">
      <div
        className="square__surface square__surface--painted"
        style={{ "--paint-height": productivity + "%" }}
      >
        <span className="square__pints">
          Points produced: {props.clickerData.score}
        </span>
        <span className="square__clicks">
          Clicks: {props.clickerData.clicks}
        </span>
        <span className="square__score">
          Productivity:{" "}
          {Math.pow(
            props.clickerData.productivity,
            props.clickerData.productivityPow
          )}
        </span>
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

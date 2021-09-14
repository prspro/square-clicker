import { useState } from "react";
import { useEffect } from "react";

export default function useAutoclicker({
  totalScore,
  clickersPrice,
  clickerData,
  autoclickerTick,
  autoclickerUpgrade,
}) {
  const [isActive, setIsActive] = useState(false);
  const [squarePrice, setSquarePrice] = useState(
    Math.pow(clickersPrice, clickerData.pricePow)
  );
  const [isUpgradable, setisUpgradable] = useState(
    Math.pow(clickersPrice, clickerData.pricePow) <= totalScore
  );

  useEffect(() => {
    setSquarePrice(Math.pow(clickersPrice, clickerData.pricePow));
    setisUpgradable(
      Math.pow(clickersPrice, clickerData.pricePow) <= totalScore
    );
  });

  const handleClick = () => {
    if (!isActive) {
      if (totalScore >= Math.pow(clickersPrice, clickerData.pricePow)) {
        setIsActive(true);
        autoclickerUpgrade(clickerData.id);
        setInterval(() => {
          autoclickerTick(clickerData.id);
        }, 2e3);
      }
    } else {
      if (totalScore >= Math.pow(clickersPrice, clickerData.pricePow)) {
        autoclickerUpgrade(clickerData.id);
        // console.log(clickerData);
      }
    }
  };

  // const updateOnTick = () => {
  //   scoreUpdate(
  //     clickerData.id,
  //     Math.pow(clickersProductivity, clickerData.initialProductivityPow)
  //   );
  // };

  return {
    isActive,
    isUpgradable,
    squarePrice,
    handleClick,
  };
}

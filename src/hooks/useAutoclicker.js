import { useState } from "react";
import { useEffect } from "react";

export default function useAutoclicker({
  totalScore,
  clickerData,
  autoclickerTick,
  autoclickerUpgrade,
}) {
  const [isActive, setIsActive] = useState(false);
  const [clickerPrice, setClickerPrice] = useState(
    Math.pow(clickerData.price, clickerData.pricePow)
  );
  const [isUpgradable, setIsUpgradable] = useState(
    Math.pow(clickerData.price, clickerData.pricePow) <= totalScore
  );

  useEffect(() => {
    setClickerPrice(Math.pow(clickerData.price, clickerData.pricePow));
  }, [clickerData.price, clickerData.pricePow]);

  useEffect(() => {
    setIsUpgradable(
      Math.pow(clickerData.price, clickerData.pricePow) <= totalScore
    );
  }, [clickerData.price, clickerData.pricePow, totalScore]);

  const handleClick = () => {
    if (!isActive) {
      if (totalScore >= Math.pow(clickerData.price, clickerData.pricePow)) {
        setIsActive(true);
        autoclickerUpgrade(clickerData.id);
        setInterval(() => {
          autoclickerTick(clickerData.id);
        }, 2e3);
      }
    } else {
      if (totalScore >= Math.pow(clickerData.price, clickerData.pricePow)) {
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
    clickerPrice,
    handleClick,
  };
}

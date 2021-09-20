import { useState } from "react";
import { useEffect } from "react";

export default function useAutoclicker({
  totalScore,
  clickerData,
  totalProducedPointsCount,
  autoclickerTick,
  autoclickerUpgrade,
}) {
  const [isActive, setIsActive] = useState(false);
  const [clickerPrice, setClickerPrice] = useState(
    Math.pow(clickerData.price, clickerData.pricePow)
  );
  const [productivity, setProductivity] = useState(0);
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

  useEffect(() => {
    setProductivity(
      Math.round((clickerData.score / totalProducedPointsCount) * 100)
    );
    // console.log(totalScore, clickerData.score);
  }, [totalScore, clickerData.score]);

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
    productivity,
    handleClick,
  };
}

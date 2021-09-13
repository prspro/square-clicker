import { useState } from "react";
import { useEffect } from "react";

export default function useAutoclicker({
  clickerData,
  autoclickerTick,
  autoclickerUpgrade,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!isActive) {
      setIsActive(true);
      autoclickerUpgrade(clickerData.id);
      setInterval(() => {
        autoclickerTick(clickerData.id);
      }, 2e3);
    } else {
      autoclickerUpgrade(clickerData.id);
      console.log(clickerData);
    }
  };

  // const updateOnTick = () => {
  //   scoreUpdate(
  //     clickerData.id,
  //     Math.pow(clickersProductivity, clickerData.initialProductivityPow)
  //   );
  // };

  return {
    handleClick,
  };
}

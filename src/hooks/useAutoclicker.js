export default function useAutoclicker({
  clickerData,
  scoreUpdate,
  clickersProductivity,
}) {
  const updateOnClick = () => {
    scoreUpdate(
      clickerData.id,
      Math.pow(clickersProductivity, clickerData.initialProductivityPow)
    );
  };

  return {
    updateOnClick,
  };
}

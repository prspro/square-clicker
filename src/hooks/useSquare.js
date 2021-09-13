export default function useSquare({ gameData, updateScore }) {
  const mainSquareClick = () => {
    updateScore(0);
  };

  const clicks = gameData.totalClicksCount;
  const score = gameData.totalScore;

  return {
    mainSquareClick,
    clicks,
    score,
  };
}

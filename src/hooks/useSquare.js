export default function useSquare({ gameData, updateScore }) {
  const mainSquareClick = () => {
    updateScore(1);
  };

  return {
    mainSquareClick,
  };
}

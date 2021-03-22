import React from "react";

function isWin(score: number) {
  if (score >= 10) {
    // This block will not be coverage since we have not test code for this case.
    return false
  }
  if (score >= 3) {
    return true;
  }
  return false;
}

function useScore() {
  const [score, setScore] = React.useState(0);
  const win = isWin(score);
  const addScore = () => setScore((i) => i + 1);
  return { score, addScore, win };
}

const App = () => {
  const { score, addScore, win } = useScore();

  return (
    <div className="App">
      <p>
        your score: <span data-testid="score">{score}</span>
      </p>
      {win && (
        <p data-testid="win" style={{ color: "red" }}>
          you win
        </p>
      )}
      <button data-testid="button" onClick={addScore}>
        click me
      </button>
    </div>
  );
};

export default App;

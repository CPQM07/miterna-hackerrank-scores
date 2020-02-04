import React from "react";
import ScoreCompleted from "./ScoreCompleted";
import ScoreAwaiting from "./ScoreAwaiting";

const ScoreBar = ({ score, maxScore, percentage }) => {
  if (!score) {
    return <ScoreAwaiting />;
  }
  return (
    <ScoreCompleted score={score} maxScore={maxScore} percentage={percentage} />
  );
};

export default ScoreBar;

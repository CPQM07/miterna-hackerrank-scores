import React from "react";
import ScoreCompleted from "./ScoreCompleted";
import ScoreAwaiting from "./ScoreAwaiting";

const ScoreBar = ({ percentage }) => {
  if (!percentage) {
    return <ScoreAwaiting />;
  }
  return <ScoreCompleted percentage={percentage} />;
};

export default ScoreBar;

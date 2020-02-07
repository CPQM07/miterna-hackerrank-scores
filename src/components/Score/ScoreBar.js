import React from "react";
import ScoreCompleted from "./ScoreCompleted";
import ScoreAwaiting from "./ScoreAwaiting";

const ScoreBar = ({ percentage }) =>
  !percentage ? <ScoreAwaiting /> : <ScoreCompleted percentage={percentage} />;

export default ScoreBar;

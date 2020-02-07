import React from "react";
import ScoreTitle from "./ScoreTitle";
import ScoreBar from "./ScoreBar";

const Score = ({ skill, name }) => {
  const percentage = percentage
    ? skill.percentage_score
    : Math.round((skill.score * 100) / skill.max_score);

  return (
    <div className="col-12">
      <ScoreTitle name={name} score={skill.score} maxScore={skill.max_score} />
      <ScoreBar percentage={percentage} />
      <hr></hr>
    </div>
  );
};

export default Score;

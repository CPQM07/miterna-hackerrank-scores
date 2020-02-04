import React from "react";
import ScoreTitle from "./ScoreTitle";
import ScoreBar from "./ScoreBar";

const Score = ({ skill, name }) => {
  return (
    <div className="col-12">
      <ScoreTitle name={name} />

      <ScoreBar
        score={skill.score}
        maxScore={skill.max_score}
        percentage={skill.percentage_score}
      />
      <hr></hr>
    </div>
  );
};

export default Score;

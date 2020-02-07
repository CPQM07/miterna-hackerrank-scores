import React from "react";
import ScoreTitle from "./ScoreTitle";
import ScoreBar from "./ScoreBar";
import Tags from "./Tags";

const Score = ({ skill, name, timeTaken }) => {
  const tags = skill.tags;
  const percentage = percentage
    ? skill.percentage_score
    : Math.round((skill.score * 100) / skill.max_score);

  return (
    <div className="col-12">
      <ScoreTitle
        name={name}
        score={skill.score}
        maxScore={skill.max_score}
        timeTaken={timeTaken}
      />
      <ScoreBar percentage={percentage} />
      {tags ? (
        <div className="small">
          <Tags tags={tags} />
        </div>
      ) : null}
      <hr></hr>
    </div>
  );
};

export default Score;

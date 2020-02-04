import React from "react";
import ProfileScore from "../Profile/ProfileScore";
import FavoriteProfileScore from "../Profile/FavoriteProfileScore";

const ScoreCompleted = ({ score, maxScore, percentage }) => {
  const roundedScore = Math.round(score);

  return (
    <div>
      <div className="d-block relative-item">
        <input
          type="range"
          disabled
          readOnly
          className="custom-range without_slider"
        ></input>
        <ProfileScore
          score={roundedScore}
          tooltipMessage="Puntaje Logrado"
          icon="fa-user"
        />
      </div>

      <div className="row text-primary">
        <div className="col-sm-6 text-left">
          <small>{maxScore}</small>
        </div>

        <div className="col-sm-6 text-right">
          <small>{percentage}</small>
        </div>
      </div>
    </div>
  );
};

export default ScoreCompleted;

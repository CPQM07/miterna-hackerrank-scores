import React from "react";

const ScoreCompleted = ({ percentage }) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
        role="progressbar"
        aria-valuenow={percentage}
        style={{ width: `${percentage}%` }}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ScoreCompleted;

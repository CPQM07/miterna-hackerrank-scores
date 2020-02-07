import React from "react";

const ScoreTitle = ({ name, score, maxScore, timeTaken }) => (
  <div className="d-flex justify-content-between align-items-center">
    <div className="d-block">
      <h5 className="text-capitalize h6 mb-0">{name}</h5>
      {score && maxScore ? (
        <small className="text-muted d-block text-justify">
          {score} / {maxScore} points
        </small>
      ) : null}
    </div>

    {timeTaken ? (
      <small
        className="font-weight-light text-muted"
        data-placement="top"
        data-toggle="tooltip"
        data-original-title="Time Taken"
      >
        {timeTaken}
        <i className="fas fa-sm fa-clock ml-1" />
      </small>
    ) : null}
  </div>
);

export default ScoreTitle;

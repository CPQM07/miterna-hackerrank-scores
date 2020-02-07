import React from "react";

const ScoreTitle = ({ name, score, maxScore }) => (
  <div className="d-flex justify-content-between align-items-center">
    <div className="d-block">
      <h5 className="text-capitalize h6 mb-0">{name}</h5>
      {score && maxScore ? (
        <small className="text-muted d-block text-justify">
          {score} / {maxScore} points
        </small>
      ) : null}
    </div>

    <span
      className="btn text-muted"
      data-placement="top"
      data-toggle="tooltip"
      data-original-title={name}
    >
      <i className="fas fa-info-circle" />
    </span>
  </div>
);

export default ScoreTitle;

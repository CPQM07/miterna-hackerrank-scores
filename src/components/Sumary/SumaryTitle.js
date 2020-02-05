import React, { useState } from "react";
import _ from "lodash";
// import ScoreRadalChart from "../Score/ScoreRadalChart";

const SumaryTitle = ({ title, enrollmentId, skills }) => {
  const [toggle, setToggle] = useState(false);
  const drawInfoText = () => (toggle ? "ver menos" : "ver más");

  return (
    <div className="card-header bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-code fa-pull-left h5 mb-0"></i>
          <h3 className="h5 mb-0 d-inline-block">{title}</h3>
        </div>
        <div className="text-info">test</div>
      </div>
      <div className="small text-muted text-justify py-4">description</div>
      {!_.isEmpty(skills) ? <ScoreRadalChart skills={skills} /> : null}
      <div className="d-flex justify-content-end align-items-center">
        <small
          onClick={() => setToggle(!toggle)}
          className="text-primary pointer"
          data-toggle="collapse"
          data-target={`#developer_${enrollmentId}_toggler`}
          aria-expanded="false"
          aria-controls={`developer_${enrollmentId}_toggler`}
        >
          {drawInfoText()}
        </small>
      </div>
    </div>
  );
};

export default SumaryTitle;

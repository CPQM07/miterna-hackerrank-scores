import React, { useState } from "react";
import _ from "lodash";
import ScoreRadalChart from "../Score/ScoreRadalChart";
import TestCompleted from "../TestNumber/TestCompleted";
import TestInProgress from "../TestNumber/TestInProgress";

const DeveloperTitle = ({ title, enrollmentId, skills }) => {
  const [toggle, setToggle] = useState(false);
  const drawInfoText = () => (toggle ? "Show Less" : "Show More");
  const hasSkills = !_.isEmpty(skills);

  const drawTestStatus = () =>
    hasSkills ? <TestCompleted /> : <TestInProgress />;

  return (
    <div className="card-header bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-code fa-pull-left h5 mb-0"></i>
          <h3 className="h5 mb-0 d-inline-block">{title}</h3>
        </div>
        <div>{drawTestStatus()}</div>
      </div>
      <div className="small text-muted text-justify py-2">description</div>
      {hasSkills ? <ScoreRadalChart skills={skills} /> : null}
      {hasSkills ? (
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
      ) : null}
    </div>
  );
};

export default DeveloperTitle;

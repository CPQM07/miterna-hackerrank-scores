import React from "react";
import TestCompleted from "../TestNumber/TestCompleted";
import TestInProgress from "../TestNumber/TestInProgress";
import _ from "lodash";

const SumaryTitle = ({ title, enrollmentId, details }) => {
  const hasDetails = !_.isEmpty(details);

  const drawTestStatus = () =>
    hasDetails ? <TestCompleted /> : <TestInProgress />;

  return (
    <div className="card-header bg-white border-bottom-0 pb-0 mb-0">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-quote-left fa-pull-left h5 mb-0"></i>
          <h3 className="h5 mb-0 d-inline-block">{title}</h3>
        </div>
        <div>{drawTestStatus()}</div>
      </div>
      <div className="small text-muted text-justify py-2">description</div>
    </div>
  );
};

export default SumaryTitle;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
// import CompletedInfo from "../TestNumber/CompletedInfo";

const DeveloperTitle = ({ title, enrollmentId }) => {
  const toggle = true;
  const iconBrain = <FontAwesomeIcon icon={faBrain} />;

  const drawInfoText = () => {
    return toggle ? "ver más" : "ver menos";
  };

  return (
    <div className="card-header bg-white">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="fas fa-pull-left h5 mb-0">{iconBrain}</i>
          <h3 className="h5 mb-0 d-inline-block">{title}</h3>
        </div>
        <div className="text-info">test</div>
      </div>
      <div className="small text-muted text-justify py-4">description</div>
      <div className="d-flex justify-content-between align-items-center">
        <span
          className="badge badge-pill badge-primary"
          data-placement="bottom"
          data-toggle="tooltip"
          title="Coincidencia - Puntaje Cognitivo"
          data-original-title="Coincidencia - Puntaje Cognitivo"
        >
          test dos
        </span>

        <small
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

export default DeveloperTitle;

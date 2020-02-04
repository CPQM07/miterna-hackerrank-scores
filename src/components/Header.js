import React from "react";
import moment from "moment";

import CompletedInfo from "./TestNumber/CompletedInfo";
import Profile from "./Profile/Profile";

const Header = ({ info: { additional, personal, score } }) => {
  return (
    <div className="d-flex align-items-center justify-content-around text-bold m-4">
      <span className="text-center">
        <i className="fas fa-medal mr-1" />
        Puntaje HackerRank:
        <strong className="ml-1">{score.percentage}%</strong>
        <small className="d-block text-muted">
          {score.value} of {score.max_value} points
        </small>
      </span>
      <span className="text-center">
        <i className="fas fa-paper-plane mr-1" />
        Fecha Invitación:
        <strong className="ml-1">
          {moment(additional.invited_at).format("D MMMM YYYY")}
        </strong>
        <small className="d-block text-muted">
          Duración Test: {additional.total_time_taken}
        </small>
      </span>
    </div>
  );
};

export default Header;

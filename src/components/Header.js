import React from "react";
import moment from "moment";

const Header = ({ info: { additional, personal, score } }) => (
  <div className="d-flex align-items-center justify-content-around text-bold m-4">
    <span className="text-center">
      <i className="fas fa-medal mr-1" />
      HackerRank Achievement Percentage:
      <strong className="ml-1">{score.percentage}%</strong>
      <small className="d-block text-muted">
        {score.value} of {score.max_value} points
      </small>
    </span>

    <span className="text-center">
      <i className="fas fa-paper-plane mr-1" />
      Invited At:
      <strong className="ml-1">
        {moment(additional.invited_at).format("D MMMM YYYY")}
      </strong>
      <small className="d-block text-muted">
        Total Time Taken: {additional.total_time_taken}
      </small>
    </span>
  </div>
);

export default Header;

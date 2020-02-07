import React from "react";
import _ from "lodash";
import Score from "../Score/Score";

const SumaryDetail = ({ details }) => (
  <div className="card-body row">
    {_.map(details, detail => (
      <Score
        skill={detail}
        name={detail.name}
        key={detail.name}
        tags={detail.tags}
        timeTaken={detail.time_taken}
      />
    ))}
  </div>
);

export default SumaryDetail;

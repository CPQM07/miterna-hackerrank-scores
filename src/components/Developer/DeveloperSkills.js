import React from "react";
import _ from "lodash";
import Score from "../Score/Score";

const DeveloperSkills = ({ skills }) => (
  <div className="card-body row">
    {_.map(skills, (skill, name) => (
      <Score skill={skill} name={name} key={name} />
    ))}
  </div>
);

export default DeveloperSkills;

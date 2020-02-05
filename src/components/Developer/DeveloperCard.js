import React from "react";
import DeveloperTitle from "./DeveloperTitle";
import DeveloperSkills from "./DeveloperSkills";

const DeveloperCard = ({ enrollmentId, skills }) => {
  return (
    <div className="card card-hover mb-4">
      <DeveloperTitle
        title="Developer Skills"
        enrollmentId={enrollmentId}
        skills={skills}
      />
      <div className="collapse" id={`developer_${enrollmentId}_toggler`}>
        <DeveloperSkills skills={skills} />
      </div>
    </div>
  );
};

export default DeveloperCard;

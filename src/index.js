import React from "react";
import _ from "lodash";

import Header from "./components/Header";
import DeveloperCard from "./components/Developer/DeveloperCard";

import "./scss/enrollments.scss";

import data from "./scores/enrollment";

const EnrollmentScores = props => {
  // const { data } = props;

  return (
    <div className="container">
      <Header
        info={{
          additional: data.additional_info,
          personal: data.personal_info,
          score: data.score
        }}
      />
      <div className="row">
        {!_.isEmpty(data.developer_skills) ? (
          <div className="col">
            <DeveloperCard
              enrollmentId={data.enrollment_id}
              skills={data.developer_skills}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EnrollmentScores;

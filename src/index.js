import React from "react";
import _ from "lodash";

import Header from "./components/Header";
import DeveloperCard from "./components/Developer/DeveloperCard";
import SumaryCard from "./components/Sumary/SumaryCard";

import data from "./scores/enrollment";

const HackerRankScores = props => {
  return (
    <div className="container">
      <Header
        info={{
          additional: data.additional_info,
          personal: data.personal_info,
          score: data.score
        }}
      />
      <div className="row justify-content-md-center">
        {!_.isEmpty(data.developer_skills) ? (
          <div className="col-sm-12 col-md-6">
            <DeveloperCard
              enrollmentId={data.enrollment_id}
              skills={data.developer_skills}
            />
          </div>
        ) : null}

        {!_.isEmpty(data.test_sumary) ? (
          <div className="col-sm-12 col-md-6">
            <SumaryCard
              enrollmentId={data.enrollment_id}
              details={data.test_sumary}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HackerRankScores;

import React from "react";
import SumaryTitle from "./SumaryTitle";
// import SumaryDetail from "./SumaryDetail";

const SumaryCard = ({ enrollmentId, details }) => {
  return (
    <div className="card card-hover mb-4">
      <SumaryTitle
        title="Test Sumary"
        enrollmentId={enrollmentId}
        details={details}
      />
      <div className="collapse" id={`sumary_${enrollmentId}_toggler`}>
        <SumaryDetail details={details} />
      </div>
    </div>
  );
};

export default SumaryCard;

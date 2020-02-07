import React from "react";
import SumaryTitle from "./SumaryTitle";
import SumaryDetail from "./SumaryDetail";

const SumaryCard = ({ enrollmentId, details }) => (
  <div className="card card-hover mb-4">
    <SumaryTitle
      title="Test Sumary"
      enrollmentId={enrollmentId}
      details={details}
    />
    <div className="card-body pt-0 mt-0">
      <SumaryDetail details={details} />
    </div>
  </div>
);

export default SumaryCard;

import React from "react";

const ScoreAwaiting = () => (
  <small className="text-info">
    <strong>
      <i className="fas fa-spinner fa-pulse mr-1" />
      En espera de resultados:
    </strong>
    <span>El candidato no ha rendido esta evaluación</span>
  </small>
);

export default ScoreAwaiting;

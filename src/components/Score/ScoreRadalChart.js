import React from "react";
import _ from "lodash";
import Chart from "react-apexcharts";
import chartOptions from "./ChartOptions";

const ScoreRadalChart = ({ skills }) => {
  const skillsWithKeys = _.map(skills, (item, key) => ({
    ...item,
    _key: key
  }));
  const sortedSkillsWithKeys = _.orderBy(
    skillsWithKeys,
    "percentage_score",
    "desc"
  );

  const topSkill = _.take(sortedSkillsWithKeys, 5);
  const labels = _.map(topSkill, "_key");
  const _chartOptions = chartOptions(labels);

  const series = [
    {
      name: "Average Score",
      data: _.map(topSkill, "percentage_score")
    }
  ];

  return (
    <div className="col-12 p-0">
      <Chart
        options={_chartOptions.options}
        series={series}
        type="radar"
        height="auto"
      />
    </div>
  );
};

export default ScoreRadalChart;

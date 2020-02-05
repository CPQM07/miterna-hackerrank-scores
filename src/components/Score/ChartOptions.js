const chartOptions = labels => ({
  options: {
    chart: {
      offsetX: 25,
      redrawOnParentResize: true,
      fontFamily: "Nunito, Helvetica, Arial, sans-serif",
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColor: "#e9e9e9",
          fill: {
            colors: ["#f8f8f8", "#fff"]
          }
        }
      }
    },
    colors: ["#5a3ee0"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#5a3ee0",
      strokeWidth: 2
    },
    tooltip: {
      y: {
        formatter: val => `${val}%`
      }
    },
    xaxis: {
      categories: labels
    }
  }
});

export default chartOptions;

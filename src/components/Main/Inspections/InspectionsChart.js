import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";


const InspectionsChart = () => {
  const [options, setObject] = useState({
    series: [58, 34.9, 6.5],
    labels: ["A", "B", "C"],
  });

  const [series, setSeries] = useState([58, 34.9, 6.5]);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="100%"
      />
    </>
  );
};

export default InspectionsChart;

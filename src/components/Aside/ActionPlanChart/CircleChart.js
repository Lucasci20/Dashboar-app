import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CircleChart = () => {
  const [options, setObject] = useState({
    series: [],
    labels: [],
  });

  const [series, setSeries] = useState([55,44,31,4,77]);

  useEffect(() => {
    axios.get("https://fakerapi.it/api/v1/companies?_quantity=5").then((response) => {
      console.log("res", response)
    })
  }, [])
   
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
}
export default CircleChart;

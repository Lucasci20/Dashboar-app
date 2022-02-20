import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CircleChart = () => {
  const [options] = useState({
    labels: [],
  });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    let age = [];

    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log("res", response);
        response.data.data.forEach((item) => {
          age.push(item.employee_age);
        });
        age.splice(6);
        setSeries(age);
      });
  }, []);

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
export default CircleChart;

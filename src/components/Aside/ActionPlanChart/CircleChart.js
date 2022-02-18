import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CircleChart = () => {
  const [options, setObject] = useState({
    labels: [],
  });

  const [series, setSeries] = useState([55,44,31,4,77]);

  useEffect(() => {
    const age = []

    axios.get("https://dummy.restapiexample.com/api/v1/employees").then((response) => {
      console.log("res", response)
      response.data.data.map((item) => {
        age.push(item.employee_age)
      })

      setSeries([age])

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

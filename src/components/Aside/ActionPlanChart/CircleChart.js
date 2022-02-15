import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CircleChart = () => {
  const [options, setObject] = useState({
    series: [],
    labels: [],
  });

  const [series, setSeries] = useState([58, 34.9, 6.5]);

  useEffect(() => {
    axios.get("https://www.dnd5eapi.co/api/spells/acid-arrow/").then((response) => {
      console.log('Res', response)
      response.data.components.map((item) =>{
        console.log('it', item) 
      })
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
};

export default CircleChart;

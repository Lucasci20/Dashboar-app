import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const InspectionsChart = () => {
  const [options] = useState({
    labels: [],
  });

  const [series, setSeries] = useState([]);

  useEffect(() => {
    let Id = [];

    axios
      .get("https://fakerapi.it/api/v1/companies?_quantity=5")
      .then((response) => {
        console.log("res", response);
        response.data.data.map((item) => {
          Id.push(item.id);
        });
        Id.splice(3);
        setSeries(Id);
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
export default InspectionsChart;

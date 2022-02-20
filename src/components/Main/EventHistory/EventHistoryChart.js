import { useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect } from "react";

const EventHistoryChart = () => {
  const [options, setObject] = useState({
    chart: {
      id: "apexchart-example",
    },

    xaxis: {
      categories: [],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [],
    },
  ]);

  useEffect(() => {
    const age = [];
    const Id = [];
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        //console.log("response", response);
        response.data.data.forEach((item) => {
          //console.log("item", item);
          age.push(item.employee_age);
          Id.push(item.id);
        });
        setObject({
          chart: {
            id: "apexchart-example",
            redrawOnParentResize: true,
          },
          xaxis: {
            categories: Id,
          },
        });

        setSeries([
          {
            name: "series-1",
            data: age,
          },
        ]);
        // console.log("age", age, salary);
      });
  }, []);

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="100%"
      />
    </>
  );
};
export default EventHistoryChart;

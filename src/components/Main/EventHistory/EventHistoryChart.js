import { useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useEffect } from "react";

const EventHistoryChart = () => {
  const [options, setObject] = useState({
    chart: {
      id: "apexchart-example",
      redrawOnParentResize: true,
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
    const salary = [];
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        //console.log("response", response);
        response.data.data.map((item) => {
          //console.log("item", item);
          age.push(item.employee_age);
          salary.push(item.employee_salary);
        });
        setObject({
          chart: {
            id: "apexchart-example",
            redrawOnParentResize: true,
          },
          xaxis: {
            categories: salary,
          },
        });

        setSeries([
          {
            name: "series-1",
            data: age,
          },
        ]);
        console.log("age", age, salary);
      })
      .catch((e) => {
        alert("Erro ao carregar informações da API");
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

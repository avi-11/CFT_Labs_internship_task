import React, { useState } from "react";

import Charts from "react-apexcharts";
import "./modern.css";

const Revenue = () => {
  const [options, setOptions] = useState({
    colors: ["#03C9D7", "#FB9678"],
    chart: {
      id: "my-chart",
      toolbar: {
        show: false,
      },
    },

    title: {
      text: "Revenue Updates",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "20px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },

    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: [
        "16 / 08",
        "17 / 08",
        "18 / 08",
        "19 / 08",
        "20 / 08",
        "21 / 08",
        "22 / 08",
        "23 / 08",
      ],
      dash: 1,
    },
  });

  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [0, 5, 6, 8, 25, 9, 11, 24],
    },
    {
      name: "series2",
      data: [0, 3, 1, 2, 8, 1, 5, 1],
    },
  ]);
  return (
    <div>
      <div className="lineChart m-8">
        <div>
          <select className="absolute">
            <option>March 2021</option>
            <option>April 2021</option>
            <option>May 2021</option>
          </select>
        </div>
        <Charts
          options={options}
          series={series}
          type="line"
          width={900}
          height={350}
        />
      </div>
    </div>
  );
};

export default Revenue;

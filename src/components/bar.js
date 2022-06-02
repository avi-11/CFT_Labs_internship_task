import React, { useState } from "react";
import Charts from "react-apexcharts";

const Bar = () => {
  const [options, setOptions] = useState({
    colors: ["#03C9D7"],
    chart: {
      id: "my-chart",
      toolbar: {
        show: false,
      },
    },

    title: {
      text: "Monthly Earnings",
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
  });

  const [series, setSeries] = useState([
    {
      name: "series1",
      data: [0, 5, 6, 8, 25, 9, 11, 24],
    },
  ]);
  return (
    <div>
      <div className="bar">
        <Charts
          options={options}
          series={series}
          type="bar"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Bar;

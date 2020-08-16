import React, { useState } from "react";
import data from "./spdata";
import "./styles.css";
import Table from "./Table";
import Slider from "./Slider";

export default function App() {
  const sortData = data.sort(function (a, b) {
    return a.year - b.year;
  });
  const [spdata, updateSpdata] = useState(sortData);
  const handle = (vals) => {
    const data = sortData.filter(
      (row) => vals[0] <= row.year && row.year <= vals[1]
    );
    updateSpdata(data);
  };

  return (
    <div className="App">
      <h1>S and P</h1>
      <Slider
        min={sortData[0].year}
        max={sortData[sortData.length - 1].year}
        onChange={handle}
      />
      <Table data={spdata} min={spdata[0].totalReturn} />
    </div>
  );
}

import React from "react";
import data from "./spdata";
import "./styles.css";
import Table from "./Table";
import Slider from "./Slider";

export default function App() {
  const sortData = data.sort(function (a, b) {
    return a.year - b.year;
  });
  const [spdata, updateSpdata] = useState(sortData);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slider/>
      <Table data={spdata}/>
    </div>
  );
}

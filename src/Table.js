import React from "react";

export default function Table({ data }) {
  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Return</th>
          <th>Cumulative Return</th>
        </tr>
      </thead>
      <tbody>
      {data.map((row, i) => (
          <tr key={i}>
            <td className="">{row.year}</td>
            <td>{row.totalReturn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

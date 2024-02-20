"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class PieDiagram extends PureComponent {
  render() {
    return (
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={350}
          cy={200}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name, props) => [
            `${value} (${props.payload.name})`,
            "",
          ]}
        />
      </PieChart>
    );
  }
}

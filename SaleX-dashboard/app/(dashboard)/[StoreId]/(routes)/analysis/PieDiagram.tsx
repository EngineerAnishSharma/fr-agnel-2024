"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
  { name: "Summer", value: 20000 },
  { name: "Winter", value: 30000 },
  { name: "Monsoon", value: 15000 },
];
const COLORS = ["#FFBB28", "#0088FE", "#00C49F"];

export default class PieDiagram extends PureComponent {
  render() {
    return (
      <>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, props) => [
              `${value} (${props.payload.name})`,
              "",
            ]}
          />
        </PieChart>
      </>
    );
  }
}

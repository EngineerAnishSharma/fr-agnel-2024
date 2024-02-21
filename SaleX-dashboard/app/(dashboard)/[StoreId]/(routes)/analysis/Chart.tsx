"use client";
import React, { PureComponent, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Computer",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name:'Apple',
    uv: 4500,
    pv: 2500,
    amt: 2500,
  },
  {
    name: "BaseBall",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

const data2 = [
  {
    name: "Computer",
    uv: 3500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "BaseBall",
    uv: 5000,
    pv: 2500,
    amt: 2500,
  },
  {
    name:"Apple",
    uv: 2500,
    pv: 1398,
    amt: 2210,
  }
]

export default class Chart extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            borderRadius: "25px",
            width: "95%",
            background: "black",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
            }}
          >
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "fantasy",
              }}
            >
              Products with maximum sales
            </h1>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart width={500} height={200} data={data} syncId="anyId">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type={"natural"}
                  dataKey="uv"
                  stroke="blue"
                  fill="blue"
                  strokeWidth={3}
                  dot={{
                    stroke: "white",
                    fill: "white",
                    strokeWidth: 2,
                    r: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                textAlign: "center",
                color: "white",
                fontSize: "30px",
                fontFamily: "fantasy",
              }}
            >
              Products with maximum Profit
            </h1>

            <ResponsiveContainer width="100%" height={350}>
              <LineChart width={500} height={200} data={data2} syncId="anyId">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="pv"
                  stroke="red"
                  fill="red"
                  strokeWidth={3}
                  dot={{
                    stroke: "white",
                    fill: "white",
                    strokeWidth: 2,
                    r: 4,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}

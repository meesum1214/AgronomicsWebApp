import React, { FunctionComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";





// const data = [
//   {
//     name: "Page A",
//     uv: 4,
//     pv: 24,

//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,

//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,

//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,

//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,

//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,

//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,

//   }
// ];

const CustomizedLabel: FunctionComponent<any> = (props: any) => {
  const { x, y, stroke, value } = props;

  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick: FunctionComponent<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default ({ data }: { data: any }) => {
  // let data = rates?.map((item: any, i: number) => {
  //   return {
  //     name: `${new Date(item.date).getMonth() + 1 + '-' + new Date(item.date).getDate()}`,
  //     uv: item.max,
  //     pv: item.min
  //   }
  // })
  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={100} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8">
          <LabelList content={<CustomizedLabel />} />
        </Line>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

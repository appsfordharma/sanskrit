import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Q1 2019",
    sa: 4000,
    hi: 2400,
    amt: 2400,
  },
  {
    name: "Q2 2019",
    sa: 3000,
    hi: 1398,
    amt: 2210,
  },
  {
    name: "Q3 2019",
    sa: 2000,
    hi: 9800,
    amt: 2290,
  },
  {
    name: "Q4 2019",
    sa: 2780,
    hi: 3908,
    amt: 2000,
  },
  {
    name: "Q1 2020",
    sa: 1890,
    hi: 4800,
    amt: 2181,
  },
  {
    name: "Q2 2020",
    sa: 2390,
    hi: 3800,
    amt: 2500,
  },
  {
    name: "Q3 2020",
    sa: 3490,
    hi: 4300,
    amt: 2100,
  },
];

const randomVal = () => Math.floor(Math.random() * 100);

// generate data for 5 years with each year having 4 quarters
const data2 = Array.from({
  length: 20,
})
  .map((_, i) => ({
    name: `Q${1 + (i % 4)} ${2019 + Math.floor(i / 4)}`,
    sa: randomVal(),
    hi: randomVal(),
    // en: randomVal(),
    // he: randomVal(),
    // fr: randomVal(),
    // de: randomVal(),
    // it: randomVal(),
    // es: randomVal(),
    // pt: randomVal(),
    // ru: randomVal(),
    // ja: randomVal(),
    // zh: randomVal(),
    // ko: randomVal(),
    // ar: randomVal(),
    // tr: randomVal(),
    // th: randomVal(),
    // vi: randomVal(),
    // id: randomVal(),
    // ms: randomVal(),
  }))
  .reduce((acc: any, curr: any) => {
    const { name, ...rest } = curr;

    const len = acc.length;

    if (len === 0) {
      return [curr];
    }

    return [
      ...acc,
      {
        name,
        sa: curr.sa + (acc[len - 1].sa || 0),
        hi: curr.hi + (acc[len - 1].hi || 0),
        // en: curr.en + (acc.en || 0),
        // he: curr.he + (acc.he || 0),
        // fr: curr.fr + (acc.fr || 0),
        // de: curr.de + (acc.de || 0),
        // it: curr.it + (acc.it || 0),
        // es: curr.es + (acc.es || 0),
        // pt: curr.pt + (acc.pt || 0),
        // ru: curr.ru + (acc.ru || 0),
        // ja: curr.ja + (acc.ja || 0),
        // zh: curr.zh + (acc.zh || 0),
        // ko: curr.ko + (acc.ko || 0),
        // ar: curr.ar + (acc.ar || 0),
        // tr: curr.tr + (acc.tr || 0),
        // th: curr.th + (acc.th || 0),
        // vi: curr.vi + (acc.vi || 0),
        // id: curr.id + (acc.id || 0),
        // ms: curr.ms + (acc.ms || 0),
      },
    ];
  }, []);

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi";

  render() {
    const { name, ...rest } = data2[0];
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data2}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Line
            type="monotone"
            dataKey="hi"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          {/* <Line type="monotone" dataKey="sa" stroke="#82ca9d" /> */}
          {Object.keys(rest).map((key) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke="#82ca9d"
              // stroke={randomVal()}
              activeDot={{ r: 8 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

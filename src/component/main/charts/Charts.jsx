import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Line,
  CartesianGrid,
  ComposedChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const Charts = () => {
  const MarksData = [
    {
      id: "s001",
      name: "Alice Johnson",
      math: 85,
      physics: 78,
      chemistry: 82,
      python: 90,
      java: 88,
      javascript: 84,
      average: 84.5,
    },
    {
      id: "s002",
      name: "Brian Smith",
      math: 72,
      physics: 69,
      chemistry: 75,
      python: 80,
      java: 77,
      javascript: 70,
      average: 73.83,
    },
    {
      id: "s003",
      name: "Catherine Lee",
      math: 91,
      physics: 89,
      chemistry: 94,
      python: 95,
      java: 92,
      javascript: 90,
      average: 91.83,
    },
    {
      id: "s004",
      name: "David Kim",
      math: 64,
      physics: 60,
      chemistry: 58,
      python: 70,
      java: 65,
      javascript: 62,
      average: 63.17,
    },
    {
      id: "s005",
      name: "Emily Davis",
      math: 78,
      physics: 82,
      chemistry: 80,
      python: 85,
      java: 87,
      javascript: 83,
      average: 82.5,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-5">
      <div>
        <BarChart width={600} height={250} data={MarksData} className="w-11/12">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math" fill="#8884d8" />
          <Bar dataKey="chemistry" fill="#82ca9d" />
        </BarChart>
      </div>

      <div>
        <ComposedChart width={600} height={250} data={MarksData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Area
            type="monotone"
            dataKey="math"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="chemistry" stroke="#ff7300" />
        </ComposedChart>
      </div>

      <div>
        <RadarChart outerRadius={90} width={600} height={250} data={MarksData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name={"Shad"}
            dataKey="python"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />

          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default Charts;

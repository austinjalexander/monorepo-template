import React from 'react';
import {
  GoCloudDownload,
  GoGraph
} from 'react-icons/go';
import {
  MdCloudOff
} from 'react-icons/md';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import './MetRate.css';

const MetRate = () => {
  const data = [
    {
      "name": "Page A",
      "EV1": 4000,
      "EV2": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "EV1": 3000,
      "EV2": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "EV1": 2000,
      "EV2": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "EV1": 2780,
      "EV2": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "EV1": 1890,
      "EV2": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "EV1": 2390,
      "EV2": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "EV1": 3490,
      "EV2": 4300,
      "amt": 2100
    }
  ];

  return (
    <div className="MetRate">
      <h2>Met Rate</h2>
      <div>
        <LineChart className="MetRate-linechart" data={data} height={200} width={500}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="EV1" stroke="#8884d8" />
          <Line type="monotone" dataKey="EV2" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="MetRate-controls">
        <button>
          <GoCloudDownload size={40} />
        </button>
        <button>
          <GoGraph size={40} />
        </button>
        <button>
          <MdCloudOff size={40} />
        </button>
      </div>
    </div>
  );
};

export default MetRate;

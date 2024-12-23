// src/components/HistoricalData.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: 'Jan', value: 2800 },
  { time: 'Feb', value: 2900 },
  { time: 'Mar', value: 3100 },
  { time: 'Apr', value: 3400 },
  { time: 'May', value: 3600 },
];

export default function HistoricalData() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Historical Stock Data</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

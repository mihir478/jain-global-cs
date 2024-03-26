import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartWithDates = ({ data, metric }) => {
    if (!data || !data.length) {
        return null;
    }
    return (
        <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="key" type="category" scale="time" tick={{ fontSize: 12 }} tickFormatter={(key) => new Date(key).toLocaleDateString()} />
                <YAxis />
                <Tooltip labelFormatter={(key) => new Date(key).toLocaleDateString()} />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#0080fe" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartWithDates;
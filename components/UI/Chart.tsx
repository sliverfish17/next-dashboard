import { TTransaction } from 'types/common';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { transformMonth } from 'helpers/time';

export const Chart = ({ data }: { data: TTransaction[] }) => {


    return (
        <ResponsiveContainer className='min-h-[400px] bg-purple' width="100%" height="100%">
            <BarChart
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={date => transformMonth(new Date(date))} />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="amount" fill="#82ca9d" />
                <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>


    );

}

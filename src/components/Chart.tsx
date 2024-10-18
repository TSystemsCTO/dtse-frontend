"use client";
import React, { useEffect, useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

interface ChartInfo {
    id: string;
    name: string;
    count: number;
    fill: string;
}

const CustomLegend: React.FC<{ data: ChartInfo[] }> = ({ data }) => (
    <div className="flex flex-col mb-4 w-[190px] gap-6 justify-center">
        {data.map((entry) => (
            <div key={entry.id} className="flex items-center mb-1">
                <div style={{ backgroundColor: entry.fill }} className="w-4 h-4 mr-2 rounded"></div>
                <span className="text-sm">{entry.id}</span>
            </div>
        ))}
    </div>
);

const Chart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartInfo[]>([]); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/chartDetails.json');
                const data = await response.json();
                setChartData(data.chartData);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className="text-[19.06px] leading-[26.68px] font-bold mb-4">
                Technical Overlay
            </h1>
            <div className='flex'>
                <CustomLegend data={chartData} />
                <ResponsiveContainer width={600} height={250}>
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="id" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" barSize={80}>
                            {chartData.map((entry) => (
                                <Cell key={entry.id} fill={entry.fill} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;

import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useTimeline } from '../../context/TimelineContext';

const Stats = () => {
    const { entries } = useTimeline();

    const callCount = entries.filter((entry) => entry.type === 'call').length;
    const textCount = entries.filter((entry) => entry.type === 'text').length;
    const videoCount = entries.filter((entry) => entry.type === 'video').length;

    const chartData = [
        {
            name: 'Call',
            value: callCount,
            color: '#244D3F',
        },
        {
            name: 'Text',
            value: textCount,
            color: '#8B5CF6',
        },
        {
            name: 'Video',
            value: videoCount,
            color: '#F59E0B',
        },
    ];

    const totalInteractions = callCount + textCount + videoCount;

    return (
        <main className="min-h-screen bg-[#f4f7f9] px-6 py-12">
            <section className="mx-auto max-w-5xl">
                <h1 className="text-3xl font-extrabold text-slate-900">Friendship Analytics</h1>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="rounded-md border border-slate-100 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-extrabold text-slate-900">
                            Interaction Breakdown
                        </h2>

                        {totalInteractions === 0 ? (
                            <div className="flex h-72 items-center justify-center">
                                <p className="text-sm font-medium text-slate-500">
                                    No interactions logged yet.
                                </p>
                            </div>
                        ) : (
                            <div className="h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={chartData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={65}
                                            outerRadius={100}
                                            paddingAngle={4}
                                        >
                                            {chartData.map((item) => (
                                                <Cell key={item.name} fill={item.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </div>

                    <div className="space-y-4">
                        <StatsCard label="Total Interactions" value={totalInteractions} />
                        <StatsCard label="Call" value={callCount} color="#244D3F" />
                        <StatsCard label="Text" value={textCount} color="#8B5CF6" />
                        <StatsCard label="Video" value={videoCount} color="#F59E0B" />
                    </div>
                </div>
            </section>
        </main>
    );
};

const StatsCard = ({ label, value, color = '#244D3F' }) => {
    return (
        <div className="rounded-md border border-slate-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
                </div>

                <span
                    className="h-4 w-4 rounded-full"
                    style={{
                        backgroundColor: color,
                    }}
                ></span>
            </div>
        </div>
    );
};

export default Stats;

import React from 'react';
import { Plus } from 'lucide-react';

const Home = () => {
    const summaryCards = [
        {
            value: '10',
            label: 'Total Friends',
        },
        {
            value: '3',
            label: 'On Track',
        },
        {
            value: '6',
            label: 'Need Attention',
        },
        {
            value: '12',
            label: 'Interactions This Month',
        },
    ];

    return (
        <main className="min-h-screen bg-[#f4f7f9] px-6 py-14">
            <section className="mx-auto max-w-5xl text-center">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                    Friends to keep close in your life
                </h1>

                <p className="mx-auto mt-4 max-w-md text-xs leading-5 text-slate-500">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="mt-6 inline-flex items-center gap-2 rounded-[3px] bg-[#244D3F] px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-[#1d3f34]">
                    <Plus size={14} strokeWidth={2.4} />
                    <span>Add a Friend</span>
                </button>

                <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {summaryCards.map((card) => (
                        <div
                            key={card.label}
                            className="rounded-md border border-slate-100 bg-white px-6 py-6 shadow-sm"
                        >
                            <p className="text-2xl font-extrabold text-[#244D3F]">{card.value}</p>
                            <p className="mt-2 text-xs font-medium text-slate-500">{card.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;

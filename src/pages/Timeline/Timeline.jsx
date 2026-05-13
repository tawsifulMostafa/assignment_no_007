import React, { useState } from 'react';
import { MessageCircle, Phone, Video } from 'lucide-react';
import { useTimeline } from '../../context/TimelineContext';

const Timeline = () => {
    const { entries } = useTimeline();
    const [activeFilter, setActiveFilter] = useState('all');

    let filteredEntries = entries;

    if (activeFilter !== 'all') {
        filteredEntries = entries.filter((entry) => entry.type === activeFilter);
    }

    return (
        <main className="min-h-screen bg-[#f4f7f9] px-6 py-12">
            <section className="mx-auto max-w-3xl">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h1 className="text-3xl font-extrabold text-slate-900">Timeline</h1>

                    <div className="flex w-fit rounded-md bg-white p-1 shadow-sm">
                        {timelineFilters.map((filter) => (
                            <FilterButton
                                key={filter.value}
                                filter={filter}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                            />
                        ))}
                    </div>
                </div>

                <TimelineList
                    entries={entries}
                    filteredEntries={filteredEntries}
                    activeFilter={activeFilter}
                />
            </section>
        </main>
    );
};

const FilterButton = ({ filter, activeFilter, setActiveFilter }) => {
    const isActive = activeFilter === filter.value;
    let buttonClass = 'rounded-[3px] px-3 py-1.5 text-xs font-semibold transition-colors';

    if (isActive) {
        buttonClass += ' bg-[#244D3F] text-white';
    } else {
        buttonClass += ' text-slate-500 hover:text-[#244D3F]';
    }

    return (
        <button onClick={() => setActiveFilter(filter.value)} className={buttonClass}>
            {filter.label}
        </button>
    );
};

const TimelineList = ({ entries, filteredEntries, activeFilter }) => {
    if (entries.length === 0) {
        return <EmptyMessage message="No check-ins logged yet." />;
    }

    if (filteredEntries.length === 0) {
        return <EmptyMessage message={`No ${activeFilter} check-ins found.`} />;
    }

    return (
        <div className="mt-6 space-y-4">
            {filteredEntries.map((entry) => (
                <TimelineEntry key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

const EmptyMessage = ({ message }) => {
    return (
        <div className="mt-6 rounded-md border border-slate-100 bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-medium text-slate-500">{message}</p>
        </div>
    );
};

const timelineFilters = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Call',
        value: 'call',
    },
    {
        label: 'Text',
        value: 'text',
    },
    {
        label: 'Video',
        value: 'video',
    },
];

const TimelineEntry = ({ entry }) => {
    const Icon = timelineIcons[entry.type];

    return (
        <article className="flex gap-4 rounded-md border border-slate-100 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#244D3F]">
                <Icon size={18} strokeWidth={2.3} />
            </span>

            <div>
                <p className="text-xs font-semibold text-slate-400">{formatTimelineDate(entry.date)}</p>
                <h2 className="mt-1 text-base font-extrabold text-slate-900">{entry.title}</h2>
            </div>
        </article>
    );
};

const timelineIcons = {
    call: Phone,
    text: MessageCircle,
    video: Video,
};

const formatTimelineDate = (date) => {
    return new Intl.DateTimeFormat('en', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
};

export default Timeline;

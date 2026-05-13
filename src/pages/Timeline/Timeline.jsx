import React from 'react';
import { MessageCircle, Phone, Video } from 'lucide-react';
import { useTimeline } from '../../context/TimelineContext';

const Timeline = () => {
    const { entries } = useTimeline();

    return (
        <main className="min-h-screen bg-[#f4f7f9] px-6 py-12">
            <section className="mx-auto max-w-3xl">
                <h1 className="text-3xl font-extrabold text-slate-900">Timeline</h1>

                {entries.length === 0 ? (
                    <div className="mt-6 rounded-md border border-slate-100 bg-white p-8 text-center shadow-sm">
                        <p className="text-sm font-medium text-slate-500">
                            No check-ins logged yet.
                        </p>
                    </div>
                ) : (
                    <div className="mt-6 space-y-4">
                        {entries.map((entry) => (
                            <TimelineEntry key={entry.id} entry={entry} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

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

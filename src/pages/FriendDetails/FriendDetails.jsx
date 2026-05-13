import React, { useEffect, useState } from 'react';
import { Archive, Mail, Pencil, Trash2, AlarmClock } from 'lucide-react';
import { useParams } from 'react-router-dom';
import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';
import { useTimeline } from '../../context/TimelineContext';

const FriendDetails = () => {
    const { id } = useParams();
    const { addTimelineEntry } = useTimeline();
    const [friend, setFriend] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('/data/friends.json')
            .then((res) => res.json())
            .then((data) => {
                const selectedFriend = data.find((item) => item.id === Number(id));
                setFriend(selectedFriend || null);
                setIsLoading(false);
            })
            .catch(() => {
                setError('Unable to load friend details.');
                setIsLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return (
            <main className="min-h-screen bg-[#f4f7f9] px-6 py-16">
                <div className="flex justify-center">
                    <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#244D3F]"></span>
                </div>
            </main>
        );
    }

    if (error || !friend) {
        return (
            <main className="min-h-screen bg-[#f4f7f9] px-6 py-16">
                <section className="mx-auto max-w-3xl rounded-md bg-white p-8 text-center shadow-sm">
                    <p className="text-sm font-semibold text-red-500">
                        {error || 'Friend not found.'}
                    </p>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#f4f7f9] px-6 py-12">
            <section className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <aside className="rounded-md border border-slate-100 bg-white p-7 text-center shadow-sm">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="mx-auto h-28 w-28 rounded-full object-cover"
                    />

                    <h1 className="mt-5 text-2xl font-extrabold text-slate-900">{friend.name}</h1>
                    <StatusBadge status={friend.status} />

                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {friend.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase text-[#244D3F]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="mt-6 text-sm leading-6 text-slate-500">{friend.bio}</p>

                    <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
                        <Mail size={16} />
                        <span>{friend.email}</span>
                    </div>

                    <div className="mt-7 grid gap-3">
                        <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            <AlarmClock size={16} />
                            <span>Snooze 2 Weeks</span>
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600">
                            <Archive size={16} />
                            <span>Archive</span>
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 rounded-md bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-500">
                            <Trash2 size={16} />
                            <span>Delete</span>
                        </button>
                    </div>
                </aside>

                <section className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-3">
                        <StatsCard value={friend.days_since_contact} label="Days Since Contact" />
                        <StatsCard value={friend.goal} label="Goal in Days" />
                        <StatsCard value={formatDate(friend.next_due_date)} label="Next Due Date" />
                    </div>

                    <div className="rounded-md border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h2 className="text-lg font-extrabold text-slate-900">
                                    Relationship Goal
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Current contact goal is every{' '}
                                    <span className="font-bold text-[#244D3F]">{friend.goal} days</span>.
                                </p>
                            </div>

                            <button className="inline-flex items-center gap-2 rounded-[3px] bg-[#244D3F] px-3 py-2 text-xs font-semibold text-white">
                                <Pencil size={14} />
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>

                    <div className="rounded-md border border-slate-100 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-extrabold text-slate-900">Quick Check-In</h2>

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                            <CheckInButton
                                icon={callIcon}
                                label="Call"
                                onClick={() => addTimelineEntry('call', friend.name)}
                            />
                            <CheckInButton
                                icon={textIcon}
                                label="Text"
                                onClick={() => addTimelineEntry('text', friend.name)}
                            />
                            <CheckInButton
                                icon={videoIcon}
                                label="Video"
                                onClick={() => addTimelineEntry('video', friend.name)}
                            />
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};

const StatsCard = ({ value, label }) => {
    return (
        <div className="rounded-md border border-slate-100 bg-white p-5 text-center shadow-sm">
            <p className="text-xl font-extrabold text-[#244D3F]">{value}</p>
            <p className="mt-2 text-xs font-medium text-slate-500">{label}</p>
        </div>
    );
};

const CheckInButton = ({ icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#244D3F] hover:text-[#244D3F]"
        >
            <img src={icon} alt="" className="h-5 w-5" />
            <span>{label}</span>
        </button>
    );
};

const StatusBadge = ({ status }) => {
    const statusClass = {
        overdue: 'bg-red-500 text-white',
        'almost due': 'bg-amber-400 text-white',
        'on-track': 'bg-[#244D3F] text-white',
    };

    return (
        <span
            className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-bold capitalize ${
                statusClass[status]
            }`}
        >
            {status}
        </span>
    );
};

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
    }).format(new Date(date));
};

export default FriendDetails;

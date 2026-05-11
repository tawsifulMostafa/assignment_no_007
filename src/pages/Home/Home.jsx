import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const totalFriends = friends.length;
    const onTrackFriends = friends.filter((friend) => friend.status === 'on-track').length;
    const needAttentionFriends = friends.filter((friend) => friend.status !== 'on-track').length;

    const summaryCards = [
        {
            value: totalFriends,
            label: 'Total Friends',
        },
        {
            value: onTrackFriends,
            label: 'On Track',
        },
        {
            value: needAttentionFriends,
            label: 'Need Attention',
        },
        {
            value: '12',
            label: 'Interactions This Month',
        },
    ];

    useEffect(() => {
        fetch('/data/friends.json')
            .then((res) => res.json())
            .then((data) => {
                setFriends(data);
                setIsLoading(false);
            })
            .catch(() => {
                setError('Unable to load friends.');
                setIsLoading(false);
            });
    }, []);

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

            <section className="mx-auto mt-14 max-w-5xl">
                <h2 className="text-base font-extrabold text-slate-900">Your Friends</h2>

                {isLoading && <LoadingSpinner />}

                {error && (
                    <p className="mt-6 rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                        {error}
                    </p>
                )}

                {!isLoading && !error && (
                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {friends.map((friend) => (
                            <FriendCard key={friend.id} friend={friend} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

const LoadingSpinner = () => {
    return (
        <div className="mt-10 flex justify-center">
            <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-[#244D3F]"></span>
        </div>
    );
};

const FriendCard = ({ friend }) => {
    return (
        <Link
            to={`/friends/${friend.id}`}
            className="rounded-md border border-slate-100 bg-white px-5 py-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
        >
            <img
                src={friend.picture}
                alt={friend.name}
                className="mx-auto h-16 w-16 rounded-full object-cover"
            />

            <h3 className="mt-4 text-sm font-extrabold text-slate-900">{friend.name}</h3>
            <p className="mt-1 text-xs font-medium text-slate-400">
                {friend.days_since_contact}d ago
            </p>

            <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {friend.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase text-[#244D3F]"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <StatusBadge status={friend.status} />
        </Link>
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
            className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold capitalize ${
                statusClass[status]
            }`}
        >
            {status}
        </span>
    );
};

export default Home;

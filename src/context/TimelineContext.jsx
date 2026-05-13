import React, { createContext, useContext, useEffect, useState } from 'react';

const TimelineContext = createContext(null);
const storageKey = 'keenkeeper-timeline';

export const TimelineProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);
    const [toast, setToast] = useState('');

    useEffect(() => {
        const savedEntries = localStorage.getItem(storageKey);

        if (savedEntries) {
            setEntries(JSON.parse(savedEntries));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(entries));
    }, [entries]);

    useEffect(() => {
        if (!toast) return;

        const timer = setTimeout(() => {
            setToast('');
        }, 2200);

        return () => clearTimeout(timer);
    }, [toast]);

    const addTimelineEntry = (type, friendName) => {
        const label = type.charAt(0).toUpperCase() + type.slice(1);
        const newEntry = {
            id: crypto.randomUUID(),
            type,
            date: new Date().toISOString(),
            title: `${label} with ${friendName}`,
        };

        setEntries((currentEntries) => [newEntry, ...currentEntries]);
        setToast(`${label} check-in added for ${friendName}`);
    };

    return (
        <TimelineContext.Provider value={{ entries, addTimelineEntry }}>
            {children}

            {toast && (
                <div className="fixed right-5 top-20 z-[100] rounded-md bg-[#244D3F] px-5 py-3 text-sm font-semibold text-white shadow-lg">
                    {toast}
                </div>
            )}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => {
    return useContext(TimelineContext);
};

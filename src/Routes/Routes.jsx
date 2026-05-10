import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Stats from '../pages/Stats/Stats';
import Timeline from '../pages/Timeline/Timeline';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'timeline',
                element: <Timeline />,
            },
            {
                path: 'stats',
                element: <Stats />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;

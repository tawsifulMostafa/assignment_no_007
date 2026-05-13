import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import router from './Routes/Routes';
import { TimelineProvider } from './context/TimelineContext';

const App = () => {
    return (
        <TimelineProvider>
            <RouterProvider router={router} />
        </TimelineProvider>
    );
};

export default App;

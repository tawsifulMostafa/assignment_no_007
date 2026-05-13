import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f4f7f9] px-6 py-12">
            <section className="w-full max-w-xl rounded-md border border-slate-100 bg-white p-10 text-center shadow-sm">
                <h1 className="text-8xl font-extrabold text-[#244D3F]">404</h1>

                <h2 className="mt-4 text-3xl font-extrabold text-slate-900">Page Not Found</h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-7 inline-flex rounded-[3px] bg-[#244D3F] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1d3f34]"
                >
                    Go Back Home
                </Link>
            </section>
        </main>
    );
};

export default NotFound;

'use client';
import { useState } from 'react';

import { useAppDispatch } from '@/lib/hooks';
import { fetchMusic } from '@/lib/features/musicSlice';

export default function SearchForm() {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            dispatch(fetchMusic(query));
        }
    };
    return (
        <div className="w-full p-4 sm:p-10 flex justify-center bg-gray-50">
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col sm:flex-row w-full sm:w-[90%] md:w-[75%] lg:w-[65%] max-w-4xl"
            >
                <div className="relative flex-1">
                    <input
                        type="text"
                        id="search"
                        placeholder=" "
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                        className="peer w-full border border-gray-300 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none px-4 pt-5 pb-2 text-base  placeholder-transparent focus:outline-none focus:border-blue-500"
                    />
                    <label
                        htmlFor="search"
                        className="absolute left-4 top-2 text-gray-500 text-sm transition-all
          peer-placeholder-shown:top-3.5
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-blue-500"
                    >
                        Search for a movie...
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-b-xl sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl hover:bg-blue-600 cursor-pointer"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

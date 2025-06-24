'use client';

import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import type { MusicType } from '@/types';
import {
    removeFromFavorites,
    clearFavorites
} from '@/lib/features/favoritesSlice';

export default function Favorites() {
    const dispatch = useDispatch();
    const favorites = useSelector((state: any) => state.favorites.items); // Correcting the use of state

    const handleRemoveFromFavorites = (trackId: number) => {
        dispatch(removeFromFavorites(trackId));
    };

    const handleClearFavorites = () => {
        dispatch(clearFavorites());
    };

    if (favorites.length === 0) {
        return (
            <div className="text-center text-gray-500 mt-10">
                No favorites yet.
            </div>
        );
    }

    return (
        <div className="p-4">
            <button
                onClick={handleClearFavorites}
                className="sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 cursor-pointer "
            >
                Clear All Favorites
            </button>
            {favorites.map((song: MusicType) => (
                <div
                    key={song.trackId}
                    className="w-full max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4 mb-4 relative"
                >
                    <img
                        src={song.artworkUrl100}
                        alt={song.trackName}
                        className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 w-full">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-blue-600">
                                    {song.trackName}
                                </h2>
                                <p className="text-gray-700">
                                    {song.artistName}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {song.collectionName}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Released:{' '}
                                    {new Date(song.releaseDate).toDateString()}
                                </p>
                            </div>
                            <button
                                onClick={() =>
                                    handleRemoveFromFavorites(song.trackId)
                                }
                                className="text-2xl text-red-500 hover:scale-110 transition cursor-pointer"
                            >
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

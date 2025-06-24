'use client';

import { useState } from 'react';
import { useDispatch, UseDispatch } from 'react-redux';
import {
    addToFavorites,
    removeFromFavorites
} from '@/lib/features/favoritesSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { MusicType } from '@/types';

type Props = {
    song: MusicType;
};

export default function Music({ song }: Props) {
    const [liked, setLiked] = useState(false);
    const dispatch = useDispatch();

    const handleAddToBasket = () => {
        setLiked((prev) => !prev);

        !liked
            ? dispatch(addToFavorites(song))
            : dispatch(removeFromFavorites(song.trackId));
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center gap-4 mb-4 relative">
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
                        <p className="text-gray-700">{song.artistName}</p>
                        <p className="text-sm text-gray-500">
                            {song.collectionName}
                        </p>
                        <p className="text-xs text-gray-400">
                            Released:{' '}
                            {new Date(song.releaseDate).toDateString()}
                        </p>
                    </div>
                    <button
                        onClick={handleAddToBasket}
                        className="text-2xl text-red-500 hover:scale-110 transition cursor-pointer"
                    >
                        {liked ? <FaHeart /> : <FaRegHeart />}
                    </button>
                </div>
                <audio controls src={song.previewUrl} className="mt-3 w-full" />
            </div>
        </div>
    );
}

'use client';

import { useAppSelector } from '@/lib/hooks';

import type { MusicType } from '@/types';

import Music from './Music';

export default function MusicList() {
    const { music, status } = useAppSelector((state) => state.music);

    return (
        <>
            {status === 'loading' && (
                <p className="text-center mt-10 text-lg text-gray-500">
                    Loading...
                </p>
            )}
            {music.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-8 max-w-6xl mx-auto">
                    {music.map((song: MusicType) => (
                        <Music key={song.trackId} song={song} />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-10 text-lg text-gray-500">
                    No results found.
                </p>
            )}
        </>
    );
}

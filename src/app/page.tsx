'use client';

import SearchForm from '@/components/SearchForm';
import MusicList from '@/components/MusicList';

export default function Home() {
    return (
        <div>
            <SearchForm />
            <MusicList />
        </div>
    );
}

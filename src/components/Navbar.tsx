'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl font-bold text-blue-700 hover:text-blue-900 transition-colors"
                >
                    🎵 Music Search
                </Link>
                <div className="flex gap-6">
                    <Link
                        href="/favorites"
                        className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                    >
                        ❤️ Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
}

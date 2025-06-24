import '@/styles/globals.css';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata = {
    title: 'Music'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

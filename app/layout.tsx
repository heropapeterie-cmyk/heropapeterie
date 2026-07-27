import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { BackToTopButton } from '@/components/back-to-top';

export const metadata: Metadata = {
  title: 'Hero Papeterie Ltd',
  description: 'Professional stationery, printing, branding, and ICT solutions in Kigali, Rwanda.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTopButton />
        </div>
      </body>
    </html>
  );
}

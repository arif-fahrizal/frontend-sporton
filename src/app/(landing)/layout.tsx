import Header from '@/app/(landing)/_components/layouts/Header';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sport On',
  description:
    'Engineered for endurance and designed for speed. Experience gear that moves as fast as you do. Premium fabrics. Unmatched comfort. Limitless motion.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

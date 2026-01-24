import Sidebar from '@/app/(dashboard)/_components/layouts/Sidebar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sport On Admin',
  description: 'Admin Dashboard Sport On',
  icons: {
    icon: [
      {
        url: '/logo/logo-dark.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo/logo-light.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: [
      {
        url: '/logo/logo-dark.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo/logo-light.svg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <div className="flex min-h-dvh bg-white">
          <Sidebar />
          <main className="flex-1 min-h-dvh ml-80 p-14 bg-[#F7F9FA]">{children}</main>
        </div>
      </body>
    </html>
  );
}

import Sidebar from '@/app/(dashboard)/_components/Layouts/Sidebar';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <div className="flex flex-col md:flex-row min-h-dvh bg-white">
          <Sidebar />
          <main className="flex-1 w-full min-h-dvh mt-18 lg:mt-0 lg:ml-60 xl:ml-80 p-5 xl:p-14 bg-[#F7F9FA] overflow-hidden">
            {children}
          </main>
        </div>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}

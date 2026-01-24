import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../globals.css';

const poppins = Poppins({
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Sport On Admin - Sign In',
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
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}

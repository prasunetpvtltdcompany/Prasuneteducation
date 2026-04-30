import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Portal | Prasunet',
  description: 'Admin portal for Prasunet master verification and organization controls.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staff Portal | Prasunet',
  description: 'Teacher and staff portal for Prasunet.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

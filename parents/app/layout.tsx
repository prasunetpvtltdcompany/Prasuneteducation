import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parents Portal | Prasunet',
  description: 'Parent portal to track student progress and connect with teachers.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

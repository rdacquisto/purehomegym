import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo-container">
            <Image
              src="/purehomegym/phg.png"
              alt="Pure Home Gym Logo"
              width={80}
              height={80}
              className="logo"
            />
            <h1>Pure Home Gym</h1>
          </div>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/workouts">Workouts</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2025 Pure Home Gym. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}

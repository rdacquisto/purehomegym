import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo-container">
            <img src="/logo.png" alt="Pure Home Gym Logo" className="logo" />
            <h1>Pure Home Gym</h1>
          </div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/equipment">Equipment</a>
            <a href="/workouts">Workouts</a>
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

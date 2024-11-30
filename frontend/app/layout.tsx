import type { Metadata } from "next";
import './globals.css';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}


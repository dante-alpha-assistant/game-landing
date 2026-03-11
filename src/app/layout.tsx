import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Echoes of the Void — Sci-Fi Action RPG",
  description:
    "Explore the shattered remnants of a dying galaxy. Echoes of the Void — coming Q4 2026 to PS5, Xbox Series X, and PC.",
  openGraph: {
    title: "Echoes of the Void",
    description: "A sci-fi action RPG set in the remnants of a dying galaxy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void-deeper text-white antialiased font-body">
        {children}
      </body>
    </html>
  );
}

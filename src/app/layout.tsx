import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Nest at Waikiki | Mumbai's Premier Rooftop Bar & Restaurant",
  description:
    "Experience Mumbai's most stunning rooftop destination. The Nest at Waikiki blends Hawaiian tropical luxury with modern mixology and Japanese-Peruvian fusion cuisine at The Peninsula Grand Hotel, Andheri East.",
  keywords:
    "The Nest at Waikiki, rooftop bar Mumbai, rooftop restaurant Andheri, Peninsula Grand Hotel, tropical bar Mumbai, cocktails Mumbai, best rooftop Mumbai 2025",
  openGraph: {
    title: "The Nest at Waikiki | Mumbai's Premier Rooftop",
    description:
      "Above the city, below the stars. A tropical luxury experience unlike any other in Mumbai.",
    url: "https://thenestbywaikiki.com",
    siteName: "The Nest at Waikiki",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased noise-overlay relative">
        {children}
      </body>
    </html>
  );
}

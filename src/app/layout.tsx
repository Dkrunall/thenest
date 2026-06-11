import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Nest at Waikiki | Best Rooftop Bar & Restaurant in Andheri East, Mumbai",
  description:
    "The Nest at Waikiki — Mumbai's premier rooftop restaurant, cocktail bar & party venue in Andheri East. Japanese + Continental dining, luxury nightlife, birthday parties, corporate events & rooftop dining experience at Peninsula Grand Hotel. Best rooftop bar in Andheri East Mumbai.",
  keywords: [
    "restaurants in andheri east",
    "night clubs in andheri",
    "birthday party places in andheri",
    "japanese restaurant in mumbai",
    "best restaurants in mumbai",
    "party venues in andheri",
    "best clubs in andheri",
    "best rooftop restaurants in mumbai",
    "top restaurants in Andheri East",
    "bars in andheri east",
    "nightlife in mumbai",
    "best cocktail bar in mumbai",
    "best clubs in andheri east",
    "party place in andheri",
    "rooftop bar in andheri east",
    "pubs in andheri mumbai",
    "pan asian restaurant in mumbai",
    "late night bars in Andheri East Mumbai",
    "best cocktail bar in Andheri East Mumbai",
    "party places in Andheri Mumbai",
    "luxury dining experience Mumbai",
    "rooftop restaurants in Andheri East",
    "tropical theme restaurant in mumbai",
    "rooftop dining experience in andheri",
    "rooftop dining in andheri mumbai",
    "terrace bar in mumbai",
    "The Nest at Waikiki",
    "rooftop bar Mumbai",
    "Peninsula Grand Hotel rooftop",
    "Andheri East restaurant",
    "Mumbai nightlife",
    "cocktail bar Andheri",
    "birthday celebration Mumbai",
    "private party venue Mumbai",
  ].join(", "),
  openGraph: {
    title: "The Nest at Waikiki | Rooftop Bar & Restaurant, Andheri East Mumbai",
    description:
      "Beneath the Skyline, Beyond the Ordinary. Mumbai's finest rooftop dining experience — Japanese + Continental cuisine, signature cocktails, and luxury nightlife at Peninsula Grand Hotel, Andheri East.",
    url: "https://thenestbywaikiki.com",
    siteName: "The Nest at Waikiki",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nest at Waikiki | Best Rooftop Bar in Andheri East Mumbai",
    description:
      "Mumbai's premier rooftop restaurant & cocktail bar. Japanese + Continental dining, DJ nights & private events at Peninsula Grand Hotel, Andheri East.",
  },
  alternates: {
    canonical: "https://thenestbywaikiki.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Nest at Waikiki",
  description:
    "Mumbai's premier rooftop restaurant and cocktail bar in Andheri East. Japanese + Continental cuisine, signature tiki mixology, DJ nights, and private event venue at Peninsula Grand Hotel.",
  url: "https://thenestbywaikiki.com",
  telephone: "+918150000345",
  email: "info@thenestbywaikiki.com",
  image: "https://thenestbywaikiki.com/logo.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, Grand Pavilion, Peninsula Grand Hotel, Sakinaka Junction",
    addressLocality: "Andheri East",
    addressRegion: "Mumbai",
    postalCode: "400072",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.1009,
    longitude: 72.8887,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "01:30",
    },
  ],
  servesCuisine: ["Japanese", "Continental", "Pan Asian", "Cocktail Bar", "Fusion"],
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Rooftop Seating", value: true },
    { "@type": "LocationFeatureSpecification", name: "Private Event Space", value: true },
    { "@type": "LocationFeatureSpecification", name: "Full Bar", value: true },
    { "@type": "LocationFeatureSpecification", name: "DJ Nights", value: true },
    { "@type": "LocationFeatureSpecification", name: "Birthday Party Venue", value: true },
    { "@type": "LocationFeatureSpecification", name: "Live Music", value: true },
  ],
  hasMap: "https://maps.google.com/?q=Peninsula+Grand+Hotel+Andheri+East+Mumbai",
  sameAs: [
    "https://www.instagram.com/thenestbywaikiki/",
    "https://www.zomato.com",
    "https://www.swiggy.com",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://thenestbywaikiki.com/book",
    },
    result: {
      "@type": "Reservation",
      name: "Table Reservation",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased noise-overlay relative">
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import ThemeProvider from "../context/provider";
import { ConditionalHeader } from "@/src/components/layout";
import { PERSONAL_INFO } from "@/src/lib/personal-info";

const info = {
  name: PERSONAL_INFO.name,
  twitter: "@notmuchayush",
  description: PERSONAL_INFO.bio,
  url: PERSONAL_INFO.url,
  image: PERSONAL_INFO.previewImage,
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default: `${info.name} - ${PERSONAL_INFO.title1}`,
    template: `%s | ${info.name}`,
  },
  description: info.description,
  keywords: [
    "Ayush Kumar",
    "Backend Engineer",
    "System Design",
    "System Design Enthusiast",
    "LinkedIn ayushkumar2601",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Web Development",
    "Backend Developer",
    "System Architecture",
    "Scalable Systems",
    "API Development",
    "Database Design",
    "Microservices",
    "Cloud Architecture",
    "Performance Optimization",
    "Hackathon Winner",
    "Payload 26",
    "Diversion 26",
    "Software Engineer",
    "Tech Portfolio",
  ],
  authors: [{ name: info.name, url: info.url }],
  creator: info.name,
  publisher: info.name,
  
  // Category for better classification
  category: 'technology',
  
  // Application name
  applicationName: `${info.name} Portfolio`,

  // Open Graph (for WhatsApp, LinkedIn, Discord, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: info.url,
    title: `${info.name} | ${PERSONAL_INFO.title1}`,
    description: info.description,
    siteName: `${info.name} Portfolio`,
    images: [
      {
        url: info.image,
        width: 1200,
        height: 630,
        alt: `${info.name} - Backend Engineer & System Design Enthusiast Portfolio`,
        type: "image/png",
      },
    ],
  },

  // Twitter Card (Twitter/X)
  twitter: {
    card: "summary_large_image",
    site: info.twitter, 
    creator: info.twitter,
    title: `${info.name} | ${PERSONAL_INFO.title1}`,
    description: info.description,
    images: [info.image],
  },

  // Favicons / web manifest
  icons: {
    icon: "/logo-ak.png",
    shortcut: "/logo-ak.png",
    apple: "/logo-ak.png",
  },

  // SEO
  alternates: { 
    canonical: info.url,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { 
      index: true, 
      follow: true, 
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification (add these when you get them)
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },
};

export const viewport: Viewport = {
  initialScale: 0.9,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSONAL_INFO.name,
    url: PERSONAL_INFO.url,
    image: PERSONAL_INFO.previewImage,
    jobTitle: PERSONAL_INFO.title1,
    description: PERSONAL_INFO.bio,
    sameAs: [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.twitter,
    ],
    knowsAbout: [
      'Backend Development',
      'System Design',
      'Full-Stack Development',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Database Design',
      'API Development',
      'Microservices',
      'Cloud Architecture',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ConditionalHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

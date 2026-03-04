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
    "LinkedIn ayushkumar2601",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
    "Backend Developer",
    "System Architecture",
  ],
  authors: [{ name: info.name, url: info.url }],
  creator: info.name,
  publisher: info.name,

  // Open Graph (for WhatsApp, LinkedIn, Discord, Facebook)
  openGraph: {
    type: "website",
    url: info.url,
    title: `${info.name} | ${PERSONAL_INFO.title1}`,
    description: info.description,
    siteName: info.name,
    images: [
      {
        url: info.image,
        width: 1200,
        height: 630,
        alt: `${info.name} Portfolio Preview`,
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
  alternates: { canonical: info.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, noimageindex: false },
  },
};

export const viewport: Viewport = {
  initialScale: 0.9,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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

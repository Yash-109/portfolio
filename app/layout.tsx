import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yashparmar.dev'),
  title: {
    default: "Yash Parmar | Full-Stack Developer & ML Engineer",
    template: "%s | Yash Parmar"
  },
  description: "Full-Stack Developer specializing in Next.js, React, Node.js, and Machine Learning. Building scalable web applications with modern tech stack.",
  keywords: [
    "Yash Parmar",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Machine Learning",
    "MongoDB",
    "TypeScript",
    "Portfolio",
    "Software Engineer"
  ],
  authors: [{ name: "Yash Parmar", url: "https://yashparmar.dev" }],
  creator: "Yash Parmar",
  publisher: "Yash Parmar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashparmar.dev",
    title: "Yash Parmar | Full-Stack Developer & ML Engineer",
    description: "Full-Stack Developer specializing in Next.js, React, Node.js, and Machine Learning. Building scalable web applications with modern tech stack.",
    siteName: "Yash Parmar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Parmar - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Parmar | Full-Stack Developer & ML Engineer",
    description: "Full-Stack Developer specializing in Next.js, React, Node.js, and Machine Learning.",
    images: ["/profile.jpg"],
    creator: "@yashparmar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/profile.jpg', sizes: '180x180', type: 'image/jpeg' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLoader />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishidh Singh | Full Stack Developer",
  description:
    "Hey, I'm Nishidh (Nihit) – a passionate Full Stack Developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, Django, and more. Open to internships, full-time opportunities, and freelance projects.",
  keywords: [
    "Nishidh Singh",
    "Nihit",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript",
    "Node.js",
    "Django",
    "Portfolio",
    "Web Developer",
    "Open Source Contributor",
    "Hackathon Developer",
    "Nihit Singh",
    "xnishdh.space",
    "quebits",
    "devrel labs",
    "Devrel labs nihit",
    "qibits",
    "Quebits IT services"
  ],
  authors: [{ name: "Nishidh Singh", url: "https://github.com/nee-hit476" }],
  openGraph: {
    title: "Nishidh Singh | Full Stack Developer",
    description:
      "Portfolio of Nishidh (Nihit) Singh – Full Stack Developer, open-source contributor, and hackathon enthusiast.",
    url: "https://nee-hit476.github.io/Nifolio/",
    siteName: "Nishidh's Portfolio",
    images: [
      {
        url: "https://nee-hit476.github.io/Nifolio/og-image.png", // Place this image in /public
        width: 1200,
        height: 630,
        alt: "Nishidh Singh Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishidh Singh | Full Stack Developer",
    description:
      "Hey, I'm Nishidh – Full Stack Developer working with React, Next.js, Django, and Node.js.",
    site: "@ins_Nihit",
    images: ["https://nee-hit476.github.io/Nifolio/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/og-image.png",
  },
  metadataBase: new URL("https://nee-hit476.github.io/Nifolio/"),
  alternates: {
    canonical: "https://xnishidh.space/",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

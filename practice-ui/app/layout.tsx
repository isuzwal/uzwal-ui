import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzwal UI",
  description:
    "A modern UI practice project built with Next.js, featuring customizable themes and beautiful typography.",
  authors: [{ name: "Uzwal", url: "https://github.com/isuzwal" }],
  keywords: ["Next.js", "UI", "React", "Theme", "Geist", "Practice"],
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Uzwal UI",
    description:
      "A modern UI practice project built with Next.js, featuring customizable themes and beautiful typography.",
    url: "https://your-domain.com",
    siteName: "Uzwal UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uzwal UI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzwal UI",
    description:
      "A modern UI practice project built with Next.js, featuring customizable themes and beautiful typography.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased dark:bg-black bg-white`}
      >
        <ThemeProvider defaultTheme="system" enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

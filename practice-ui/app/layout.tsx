import type { Metadata } from "next";
import { Barlow_Condensed, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Barlow_Semi_Condensed({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const geistMono = Barlow_Condensed({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Uzwal UI",
  description:
    "A modern UI practice project built with Next.js, featuring customizable themes, beautiful typography, and a growing UI component library.",
  authors: [{ name: "Uzwal", url: "https://github.com/isuzwal" }],
  keywords: [
    "Next.js",
    "UI",
    "React",
    "Theme",
    "Geist",
    "Practice",
    "UI Library",
    "Component Library",
    "Design System",
    "TailwindCSS",
    "Accessibility",
    "Dark Mode",
  ],
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Visual UI",
    description:
      "A modern UI practice project built with Next.js, featuring customizable themes, beautiful typography, and a robust UI component library.",
    url: "https://your-domain.com",
    siteName: "Uzwal UI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Visual UI Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual UI",
    description:
      "A modern UI practice project built with Next.js, featuring customizable themes, beautiful typography, and a robust UI component library.",
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

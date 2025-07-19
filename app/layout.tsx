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
  title: "Tunklasik Print | Professional Printing Services",
  description:
    "Tunklasik Print offers high-quality, timely, and customer-focused printing solutions. Over 5 years of experience delivering professional results to 500+ happy clients.",
  keywords: [
    "Tunklasik Print",
    "printing company",
    "quality printing",
    "professional prints",
    "custom print services",
    "print solutions",
    "affordable printing",
    "timely delivery",
    "Nigeria print services",
    "customer-focused printing",
  ],
  authors: [{ name: "Tunklasik Print" }],
  creator: "Tunklasik Print",
  themeColor: "#0d9488", // Tailwind's teal-600
  openGraph: {
    title: "Tunklasik Print | Professional Printing Services",
    description:
      "Your trusted partner for top-notch printing services. We combine precision, speed, and creativity to meet all your print needs.",
    url: "https://tunklasik.com", // update this to your actual domain
    siteName: "Tunklasik Print",
    type: "website",
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
        className={`${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

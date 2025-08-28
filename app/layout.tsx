// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wouter Vervloessem — Portfolio",
  description: "Portfolio — projects, writing, and contact.",
  keywords: ["portfolio", "projects", "automation", "IT", "service delivery", "integration"],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio",
    description: "Selected work and case studies.",
    url: "https://example.com",
    siteName: "Portfolio",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Selected work and case studies.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = { themeColor: "#6E56CF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-zinc-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "@fontsource-variable/onest";
import "@fontsource-variable/roboto-condensed";
import "@fontsource/poppins";

import "@/styles/globals.css";

import Header from "@/components/layout/Header";
import Background from "@/components/layout/Background";
import SocialsDesktop from "@/components/layout/SocialsDesktop";

import SmoothScrolling from "@/providers/SmoothScrolling";
import BackToTopButton from "@/components/layout/BackToTopButton";

export const metadata: Metadata = {
  title: "Gerard Doncel • Software Developer",
  description: "Driving high-quality and efficient software solutions",
  openGraph: {
    title: "Gerard Doncel • Software Developer",
    description: "Driving high-quality and efficient software solutions.",
    type: "website",
    url: "https://gerarddoncel.com",
    siteName: "Gerard Doncel",
    images: [
      {
        url: "https://gerarddoncel.com/metadata-image.png",
        width: 1200,
        height: 630,
        alt: "Gerard Doncel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SmoothScrolling>
          <SocialsDesktop />
          <Background />
          <Header />
          {children}
          <BackToTopButton />
        </SmoothScrolling>
        <Analytics />
      </body>
    </html>
  );
}

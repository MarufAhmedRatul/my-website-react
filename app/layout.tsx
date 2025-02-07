import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@/components/analytics"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Enver Studio - Digital Services Agency",
    template: "%s | Enver Studio",
  },
  description: "We provide the best digital services including UI/UX Design, Development, and more.",
  keywords: ["digital agency", "UI/UX design", "web development", "graphic design", "animation"],
  authors: [{ name: "Enver Studio" }],
  creator: "Enver Studio",
  publisher: "Enver Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.enverstudio.com",
    siteName: "Enver Studio",
    title: "Enver Studio - Digital Services Agency",
    description: "We provide the best digital services including UI/UX Design, Development, and more.",
    images: [
      {
        url: "https://www.enverstudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enver Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enver Studio - Digital Services Agency",
    description: "We provide the best digital services including UI/UX Design, Development, and more.",
    images: ["https://www.enverstudio.com/twitter-image.jpg"],
    creator: "@enverstudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-slate-950 to-slate-900 text-white`}>
        <Header />
        {children}
        <Footer />
        <Analytics
          googleAnalyticsId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
          facebookPixelId={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}
        />
      </body>
    </html>
  )
}


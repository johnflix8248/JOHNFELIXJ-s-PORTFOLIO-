import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "John Felix J — AI & Data Science Student | Python Developer",
  description:
    "Portfolio of John Felix J — B.Tech (Artificial Intelligence & Data Science) student at Alpha College of Engineering, Chennai. Python, full-stack web development, data analytics and AI.",
  keywords: [
    "John Felix J",
    "AI and Data Science",
    "Python Developer",
    "Full Stack Developer",
    "Chennai",
    "Portfolio",
  ],
  authors: [{ name: "John Felix J" }],
  openGraph: {
    title: "John Felix J — Portfolio",
    description: "AI & Data Science student · Python developer · Full-stack in the making",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#070b14",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

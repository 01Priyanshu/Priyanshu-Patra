import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Priyanshu Patra | Data Science & ML Engineer",
  description: "Portfolio of Priyanshu Patra — Data Science & Machine Learning Engineer. Explore projects in AI, NLP, and data analytics.",
  keywords: ["Priyanshu Patra", "Data Science", "Machine Learning", "AI Engineer", "Portfolio", "Python", "NLP"],
  authors: [{ name: "Priyanshu Patra" }],
  openGraph: {
    title: "Priyanshu Patra | Data Science & ML Engineer",
    description: "Portfolio of Priyanshu Patra — Data Science & Machine Learning Engineer.",
    url: "https://01priyanshu.github.io/Priyanshu-Patra-Portfolio",
    siteName: "Priyanshu Patra Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Patra | Data Science & ML Engineer",
    description: "Portfolio of Priyanshu Patra — Data Science & Machine Learning Engineer.",
    creator: "@priyanshu_thone",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

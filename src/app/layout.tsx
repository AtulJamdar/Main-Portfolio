import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Atul Jamdar // Full-Stack Web Architect & SaaS Engineer",
  description: "Elite freelance software engineer. I build high-performance web applications, robust serverless platforms, and conversion-focused digital systems for startups & scaleups.",
  keywords: [
    "Freelance Developer",
    "SaaS Engineer",
    "Next.js Architect",
    "Full-Stack Developer",
    "React Performance Specialist",
    "Web Application Architect"
  ],
  authors: [{ name: "Atul Jamdar" }],
  robots: "index, follow",
  openGraph: {
    title: "Atul Jamdar // Full-Stack Web Architect & SaaS Engineer",
    description: "Elite freelance software engineer. I build high-performance web applications, robust serverless platforms, and conversion-focused digital systems for startups & scaleups.",
    type: "website",
    locale: "en_US",
    siteName: "Atul Jamdar Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Atul Jamdar",
    "jobTitle": "Full-Stack Web Architect & SaaS Product Engineer",
    "url": "https://atuljamdar.com",
    "alumniOf": {
      "@type": "Organization",
      "name": "Cravita Technologies"
    },
    "knowsAbout": [
      "TypeScript", "JavaScript", "Python", "React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "PostgreSQL", "MongoDB", "OpenAI API", "Docker", "DevOps"
    ],
    "description": "Elite freelance software engineer. I build high-performance web applications, robust serverless platforms, and AI systems."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 select-none">
        {children}
      </body>
    </html>
  );
}

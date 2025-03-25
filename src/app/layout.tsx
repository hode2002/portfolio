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
  title: "Hồ Văn Dễ - Web Developer Portfolio",
  description: "My name is Hồ Văn Dễ and I'm a web developer",
  keywords: [
    "fullstack web developer", "fullstack development", "fullstack engineer", "fullstack JavaScript",
    "fullstack TypeScript", "web application", "modern web development", "frontend development",
    "backend development", "cloud computing", "scalable web application", "web API development",

    "Next.js", "Next.js 15", "Next.js App Router", "Next.js API Routes", "React server components",
    "React.js", "Server-side rendering", "Static site generation", "Client-side rendering",
    "SEO optimization with Next.js", "TanStack Query", "React hooks", "Zustand",

    "NestJS", "Node.js backend", "TypeScript backend", "RESTful API", "WebSockets with NestJS",
    "Authentication with NestJS", "Passport.js JWT authentication", "OAuth2 authentication",
    "Google OAuth authentication", "NestJS CQRS", "NestJS Dependency Injection",
    "NestJS Middleware", "NestJS Guards", "NestJS Interceptors",

    "MySQL", "MySQL indexing", "Prisma ORM", "MongoDB", "NoSQL database", "MongoDB Atlas", "MongoDB indexing",

    "Redis", "Redis caching", "In-memory caching",

    "Docker", "Docker Compose", "Containerized applications", "AWS EC2 deployment", "Cloudflare",
    "Nginx reverse proxy",

    "API security", "JWT authentication", "OAuth 2.0", "Rate limiting", "CORS policy", "HTTPS encryption",
    "Cloudflare security",
  ],
  authors: [{ name: "Hồ Văn Dễ", url: "https://hovande.id.vn" }],
  creator: "Hồ Văn Dễ",
  publisher: "Hồ Văn Dễ",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    noarchive: false,
    nosnippet: false,
  },
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://hovande.id.vn",
    title: "Hồ Văn Dễ - Web Developer Portfolio",
    description: "My name is Hồ Văn Dễ and I'm a web developer",
    images: [
      {
        url: "/favicon.webp",
        width: 1200,
        height: 630,
        alt: "Hồ Văn Dễ Portfolio",
      },
    ],
    siteName: "Hồ Văn Dễ Portfolio",
  },
  alternates: {
    canonical: "https://hovande.id.vn",
    languages: {
      "vi": "https://hovande.id.vn",
    },
  },
  verification: {
    google: "IoUEHtSznyVv3eWlehBPN2EBan1_yPdSFcBBABDHW3s"
  },
  category: "Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

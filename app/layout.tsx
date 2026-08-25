import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/footer/Footer";
import { Backdrop } from "@/components/shared/Backdrop";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Md Shahinur Rahman — Backend Engineer | Python · Go · Distributed Systems";
const description =
  "Backend Engineer with 7+ years of experience building APIs, microservices, payment systems and distributed backend platforms using Python, Go and modern infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.shortName}`,
  },
  description,
  keywords: [
    "Backend Engineer",
    "Python",
    "Go",
    "Golang",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "Distributed Systems",
    "Microservices",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Bangladesh",
  ],
  authors: [{ name: profile.name, url: profile.links.linkedin }],
  creator: profile.name,
  openGraph: {
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: profile.siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  jobTitle: profile.role,
  description: profile.supportingLine,
  url: profile.siteUrl,
  email: `mailto:${profile.links.email}`,
  sameAs: [profile.links.github, profile.links.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  knowsAbout: [
    "Python",
    "Go",
    "Django",
    "Django REST Framework",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "gRPC",
    "Distributed Systems",
    "Microservices",
    "Backend Engineering",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
        >
          Skip to content
        </a>
        <Backdrop />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

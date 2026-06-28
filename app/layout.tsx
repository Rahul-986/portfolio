import type { Metadata } from "next";
import { siteConfig, socialProfiles } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Rahul Gupta",
  },
  description: siteConfig.description,
  applicationName: "Rahul Gupta Portfolio",
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  keywords: [
    "Rahul Gupta",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "React Developer",
    "PostgreSQL Developer",
    "Backend Developer",
    "Web Developer India",
    "Redis",
    "Technical SEO",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Rahul Gupta Portfolio",
    locale: "en_IN",
    firstName: "Rahul",
    lastName: "Gupta",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Rahul Gupta — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: "Rahul Gupta Portfolio",
      description: siteConfig.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteConfig.url}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/#profile`,
      url: siteConfig.url,
      name: siteConfig.title,
      mainEntity: { "@id": `${siteConfig.url}/#person` },
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      jobTitle: "Full Stack Developer",
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi NCR",
        addressCountry: "IN",
      },
      worksFor: { "@type": "Organization", name: "AstroKapoor", url: "https://astrokapoor.com/" },
      knowsAbout: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs", "Technical SEO"],
      sameAs: socialProfiles,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

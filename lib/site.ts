const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Rahul Gupta",
  title: "Rahul Gupta | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, Node.js, PostgreSQL, Redis, scalable APIs, performance optimization, and SEO-focused web migrations.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, ""),
  email: "rahulgupta.sidhi986@gmail.com",
  phone: "+916260530114",
  location: "Delhi NCR, India",
  github: "https://github.com/rahulastrokapoor-sudo",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
};

export const socialProfiles = [siteConfig.github, siteConfig.linkedin].filter(Boolean);

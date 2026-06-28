"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  Mail, Phone, MapPin, ExternalLink,
  ArrowUpRight, Download, ArrowUp, Code2, Database,
  Server, Wrench, Layers, Zap, ChevronRight, ArrowRight, Globe,
} from "lucide-react";

const GITHUB_URL = "https://github.com/rahulastrokapoor-sudo";
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "";

function Github({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.26 3.38.97.1-.75.4-1.26.74-1.55-2.57-.3-5.28-1.29-5.28-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.9 10.9 0 0 1 12 6.12c.98 0 1.95.13 2.86.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.72 5.39-5.3 5.68.42.36.79 1.07.79 2.16v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function Linkedin({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.28 2.37 4.28 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

// ─── RESUME DATA ──────────────────────────────────────────────────────────────

const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    company: "AstroKapoor",
    location: "Noida",
    period: "Jul 2025 – Present",
    current: true,
    highlights: [
      "Built and launched AstroKapoor.net, a full-stack gemstone e-commerce platform using Next.js, Node.js, and PostgreSQL",
      "Developed product discovery, multi-currency browsing, authentication, wishlist, cart, filtering, sorting, and pagination flows",
      "Owned SEO continuity strategy — preserved URL slugs, meta tags, canonical URLs, JSON-LD structured data with full index parity within 4 weeks",
      "Integrated Redis caching to reduce average API response time by ~35%",
      "Improved Core Web Vitals by ~25% using SSR/SSG patterns and reusable React components",
      "Built REST APIs for catalog, customer, content, and commerce workflows",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Express.js", "SSR/SSG"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Cybrom Technology Pvt. Ltd.",
    location: "Bhopal",
    period: "Dec 2024 – Jun 2025",
    current: false,
    highlights: [
      "Developed full stack MERN applications including user auth, CRUD APIs, and data visualization dashboards",
      "Built 15+ responsive, reusable React UI components with Redux client-side state management",
      "Participated in code reviews and Git branching workflows in an agile team environment",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Redux", "Express.js"],
  },
];

const PROJECTS = [
  {
    title: "AstroKapoor.net",
    subtitle: "Gemstone E-Commerce Platform · Professional Work",
    description:
      "Built and launched AstroKapoor.net, a production e-commerce platform for discovering and purchasing certified gemstones and astrological products across multiple currencies.",
    highlights: [
      "Implemented category navigation, product filtering, sorting, pagination, cart, wishlist, and customer authentication",
      "Designed PostgreSQL data models and REST APIs for catalog, customer, and commerce workflows",
      "Preserved SEO-critical URLs and metadata while improving performance with SSR/SSG and Redis caching",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Express.js", "SEO"],
    status: "Live",
    color: "blue",
    repoUrl: "",
    liveUrl: "https://astrokapoor.net/",
    caseStudySlug: "astrokapoor",
  },
  {
    title: "ShopEase",
    subtitle: "E-Commerce Full Stack Application",
    description:
      "Full stack e-commerce application with product catalog, cart, order management, JWT-based authentication, and role-based access control.",
    highlights: [
      "Redis caching for product listings and sessions for fast response times",
      "Deployed behind Nginx with PM2 process management, covered with 50+ Postman test cases",
      "RBAC (customer/admin), order status tracking, and secure payment flow",
    ],
    tech: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT", "Nginx", "PM2"],
    status: "Production",
    color: "violet",
    repoUrl: "",
    liveUrl: "",
    caseStudySlug: "shopease",
  },
  {
    title: "SprintSync",
    subtitle: "Real-Time Team Workspace",
    description:
      "A collaborative project workspace for distributed teams with live task updates, shared boards, threaded discussions, and activity history.",
    highlights: [
      "Real-time board synchronization and presence indicators powered by Socket.IO",
      "Optimistic UI updates with conflict-safe server reconciliation",
      "Workspace-level RBAC, audit logs, filters, and searchable task history",
    ],
    tech: ["Next.js", "Socket.IO", "Node.js", "PostgreSQL", "Redis", "Docker"],
    status: "Concept Build",
    color: "blue",
    repoUrl: "",
    liveUrl: "",
    caseStudySlug: "",
  },
  {
    title: "MetricFlow",
    subtitle: "SaaS Analytics Dashboard",
    description:
      "A multi-tenant analytics platform that turns product events into clear funnels, retention reports, and configurable business dashboards.",
    highlights: [
      "Event ingestion API with batched processing and idempotent writes",
      "Interactive charts, date comparisons, saved views, and CSV exports",
      "Subscription-ready architecture with tenant isolation and usage limits",
    ],
    tech: ["React", "Express.js", "PostgreSQL", "Redis", "Recharts", "JWT"],
    status: "Concept Build",
    color: "violet",
    repoUrl: "",
    liveUrl: "",
    caseStudySlug: "",
  },
  {
    title: "UptimePulse",
    subtitle: "API Monitoring & Incident Platform",
    description:
      "A developer-focused monitoring service for tracking API health, response times, and incidents from one clean operational dashboard.",
    highlights: [
      "Scheduled HTTP checks with retry policies and regional health history",
      "Incident timelines and email/webhook alerts when services degrade",
      "Public status pages with uptime summaries and latency trends",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "BullMQ", "Redis", "Docker"],
    status: "Concept Build",
    color: "blue",
    repoUrl: "",
    liveUrl: "",
    caseStudySlug: "",
  },
];

const SKILLS: Record<string, string[]> = {
  Frontend: ["React.js", "Next.js", "JavaScript", "ES6+", "HTML5", "CSS3", "Tailwind CSS", "jQuery", "Responsive Design"],
  Backend: ["Node.js", "Express.js", "REST API Design", "Redis", "JWT Auth", "Caching", "Sessions"],
  Database: ["PostgreSQL", "MongoDB", "Mongoose", "MySQL"],
  "CMS & UI": ["WordPress", "Component-Based Architecture", "Dynamic Content Rendering"],
  "DevOps & Tools": ["Git", "GitHub", "Bitbucket", "Linux", "PM2", "Nginx", "Postman"],
};

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "2", label: "Production Apps" },
  { value: "~35%", label: "API Response Boost" },
  { value: "~25%", label: "Core Web Vitals ↑" },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

// ─── SMALL HELPERS ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px w-8 bg-blue-500/70" />
      <span className="text-blue-400 text-[11px] font-mono uppercase tracking-[0.22em]">{children}</span>
    </div>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl md:text-[3.25rem] font-bold text-white tracking-tight leading-[1.1] mb-4">
      {children}
    </h2>
  );
}

function TechBadge({ label, subtle = false }: { label: string; subtle?: boolean }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
        subtle
          ? "bg-white/[0.04] border border-white/[0.07] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.14]"
          : "bg-blue-500/[0.08] border border-blue-500/[0.18] text-blue-300"
      }`}
    >
      {label}
    </span>
  );
}

// ─── HERO ILLUSTRATION ────────────────────────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-blue-500/[0.06] blur-[80px]" />
      </div>

      {/* Code window card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[420px]"
      >
        <div
          className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-[11px] text-zinc-500 font-mono">horoscope.route.ts</span>
          </div>

          {/* Code body */}
          <div className="p-5 font-mono text-[12.5px] leading-6 space-y-0.5 overflow-hidden">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">router</span>{" "}
              <span className="text-zinc-300">=</span>{" "}
              <span className="text-yellow-300">express</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-400">Router</span>
              <span className="text-zinc-300">();</span>
            </div>
            <div className="pt-2">
              <span className="text-purple-400">router</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-400">get</span>
              <span className="text-zinc-300">(</span>
              <span className="text-green-400">&quot;/horoscope/:sign&quot;</span>
              <span className="text-zinc-300">,</span>
            </div>
            <div className="pl-4">
              <span className="text-yellow-300">cache</span>
              <span className="text-zinc-300">(</span>
              <span className="text-orange-400">3600</span>
              <span className="text-zinc-300">),</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">async</span>
              <span className="text-zinc-300"> (</span>
              <span className="text-blue-300">req</span>
              <span className="text-zinc-300">, </span>
              <span className="text-blue-300">res</span>
              <span className="text-zinc-300">) =&gt; &#123;</span>
            </div>
            <div className="pl-8">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-blue-300">data</span>{" "}
              <span className="text-zinc-300">=</span>{" "}
              <span className="text-purple-400">await</span>
            </div>
            <div className="pl-10">
              <span className="text-yellow-300">db</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-400">query</span>
              <span className="text-zinc-300">(</span>
            </div>
            <div className="pl-12 text-green-400">
              `SELECT * FROM signs
            </div>
            <div className="pl-13 text-green-400">
              &nbsp;WHERE sign = $1`,
            </div>
            <div className="pl-12">
              <span className="text-zinc-300">[</span>
              <span className="text-blue-300">req</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-300">params</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-300">sign</span>
              <span className="text-zinc-300">]);</span>
            </div>
            <div className="pl-8 pt-1">
              <span className="text-blue-300">res</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-400">json</span>
              <span className="text-zinc-300">(</span>
              <span className="text-blue-300">data</span>
              <span className="text-zinc-300">.</span>
              <span className="text-blue-300">rows</span>
              <span className="text-zinc-300">);</span>
            </div>
            <div className="pl-4"><span className="text-zinc-300">&#125;</span></div>
            <div><span className="text-zinc-300">);</span></div>
            {/* Blinking cursor */}
            <div className="flex items-center gap-1.5 pt-2">
              <span className="text-zinc-600">$</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[7px] h-4 bg-blue-400 rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Floating metric chips */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-5 -right-5 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono"
          style={{
            background: "rgba(16,185,129,0.08)",
            border: "1px solid rgba(16,185,129,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400">API: 42ms</span>
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -left-5 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono"
          style={{
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Zap size={11} className="text-blue-400" />
          <span className="text-blue-400">Core Web Vitals +25%</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 220) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = ["about", "experience", "projects", "skills", "contact"];

  const SKILL_ICONS: Record<string, ReactNode> = {
    Frontend: <Layers size={15} />,
    Backend: <Server size={15} />,
    Database: <Database size={15} />,
    "CMS & UI": <Globe size={15} />,
    "DevOps & Tools": <Wrench size={15} />,
  };

  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden"
      style={{ background: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}
    >
      <a href="#main-content" className="skip-link">Skip to main content</a>
      {/* Subtle noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          opacity: 0.6,
        }}
      />

      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[20%] right-[8%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[55%] left-[40%] w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── NAVBAR ── */}
      <motion.nav
        aria-label="Primary navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                paddingTop: "12px",
                paddingBottom: "12px",
                background: "rgba(10,10,10,0.75)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
              }
            : { paddingTop: "20px", paddingBottom: "20px" }
        }
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-xl font-bold tracking-tight text-white"
          >
            RG<span className="text-blue-400">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-4 py-2 rounded-lg text-sm capitalize transition-all duration-200 ${
                  activeSection === s
                    ? "text-white bg-white/[0.07]"
                    : "text-zinc-500 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-blue-300 transition-all duration-200 hover:text-blue-200"
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.08)";
            }}
          >
            Hire Me <ArrowUpRight size={13} />
          </button>
        </div>
      </motion.nav>

      <main id="main-content" tabIndex={-1}>
      {/* ── HERO ── */}
      <section id="hero" className="relative min-h-screen flex items-center pt-4">
        <div className="max-w-6xl mx-auto px-6 w-full pt-4 ">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Available badge */}
              <motion.div variants={fadeUp}>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-green-400"
                  style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to opportunities
                </div>
              </motion.div>

              {/* Name */}
              <motion.div variants={fadeUp}>
                <h1 className="text-[clamp(3.5rem,8vw,5.5rem)] font-black tracking-tight leading-[0.95]">
                  <span className="text-white">Rahul</span>
                  <br />
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #E0F2FE 100%)" }}
                  >
                    Gupta
                  </span>
                </h1>
                <div className="flex items-center gap-3 mt-4">
                  <div className="h-px w-6 bg-blue-500/60" />
                  <p className="text-zinc-500 text-base font-mono tracking-wide">
                    Full Stack Developer
                  </p>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.p variants={fadeUp} className="text-zinc-400 text-lg leading-[1.75] max-w-[500px]">
                Building scalable web applications with{" "}
                <span className="text-zinc-200 font-medium">Next.js, Node.js & PostgreSQL</span>
                . Specialized in performance optimization, SEO-focused migration, and shipping
                end-to-end products that work at scale.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white text-sm font-semibold transition-all duration-200 hover:bg-blue-400 active:scale-[0.97]"
                  style={{ boxShadow: "0 0 0 0 rgba(59,130,246,0)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,130,246,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 rgba(59,130,246,0)";
                  }}
                >
                  View Projects <ArrowRight size={15} />
                </button>
                <a
                  href="/rahul-gupta-full-stack-developer-resume.pdf"
                  download="Rahul-Gupta-Full-Stack-Developer-Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:bg-white/[0.08]"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Download size={15} /> Download CV
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} className="flex items-center gap-5 pt-1">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-600 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={19} />
                </a>
                {LINKEDIN_URL && (
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={19} />
                  </a>
                )}
                <a
                  href="mailto:rahulgupta.sidhi986@gmail.com"
                  className="text-zinc-600 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={19} />
                </a>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <div className="flex items-center gap-1.5 text-zinc-600 text-sm">
                  <MapPin size={13} />
                  <span>Delhi, India</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right — illustration */}
            <div className="hidden lg:block h-[520px]">
              <HeroIllustration />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>About Me</SectionLabel>
              <SectionHeading>
                Crafting digital<br />
                <span className="text-zinc-600">experiences that scale.</span>
              </SectionHeading>
            </motion.div>

            <div className="grid lg:grid-cols-[1fr_420px] gap-16 mt-14">
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="text-zinc-400 text-lg leading-[1.85]">
                  I&apos;m a Full Stack Developer based in Delhi with over a year of professional experience
                  delivering production-grade web applications. My expertise spans the full web stack —
                  from crafting performant React interfaces to architecting robust{" "}
                  <span className="text-zinc-200">Node.js APIs</span> backed by{" "}
                  <span className="text-zinc-200">PostgreSQL</span>.
                </p>
                <p className="text-zinc-400 text-lg leading-[1.85]">
                  At AstroKapoor, I led the migration of a high-traffic platform from WordPress to a modern
                  Next.js stack — preserving all organic rankings while improving performance by 25%.
                  I take pride in writing maintainable, thoughtful code that solves real business problems.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Next.js", "Node.js", "PostgreSQL", "Redis", "React.js", "Express.js"].map((t) => (
                    <TechBadge key={t} label={t} />
                  ))}
                </div>
              </motion.div>

              {/* Stats grid */}
              <motion.div variants={stagger} className="grid grid-cols-2 gap-4 content-start">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="p-6 rounded-2xl transition-all duration-300 group cursor-default"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.04)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(59,130,246,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
                    }}
                  >
                    <div className="text-3xl font-black text-white mb-1.5 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-zinc-600 text-xs font-medium tracking-wide">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Work Experience</SectionLabel>
              <SectionHeading>
                Where I&apos;ve<br />
                <span className="text-zinc-600">made an impact.</span>
              </SectionHeading>
            </motion.div>

            <div className="mt-14 space-y-6 relative">
              {/* Timeline rail */}
              <div
                className="absolute left-[23px] top-10 bottom-10 w-px hidden md:block"
                style={{ background: "linear-gradient(to bottom, rgba(59,130,246,0.4), rgba(59,130,246,0.1), transparent)" }}
              />

              {EXPERIENCE.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="relative md:pl-16">
                  {/* Timeline node */}
                  <div
                    className="absolute left-[16px] top-[34px] w-4 h-4 rounded-full border-2 border-blue-500 hidden md:block"
                    style={{ background: "#0A0A0A" }}
                  >
                    {exp.current && (
                      <div className="absolute inset-[3px] rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </div>

                  <div
                    className="p-8 rounded-2xl transition-all duration-300 group"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className="text-blue-400 font-medium text-sm">{exp.company}</span>
                          <span className="text-zinc-700">·</span>
                          <span className="text-zinc-600 text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {exp.current && (
                          <span
                            className="px-2 py-0.5 rounded-full text-[11px] font-mono text-green-400"
                            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
                          >
                            Current
                          </span>
                        )}
                        <span className="text-zinc-600 text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-zinc-400 text-[15px] leading-relaxed">
                          <ChevronRight size={13} className="text-blue-500/70 mt-1 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <TechBadge key={t} label={t} subtle />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Featured Projects</SectionLabel>
              <SectionHeading>
                Selected work &amp;<br />
                <span className="text-zinc-600">product concepts.</span>
              </SectionHeading>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 mt-14">
              {PROJECTS.map((project, i) => {
                const isBlue = project.color === "blue";
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className={`relative p-8 rounded-2xl overflow-hidden transition-all duration-400 group cursor-default ${
                      i === PROJECTS.length - 1 ? "md:col-span-2" : ""
                    }`}
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.border = isBlue
                        ? "1px solid rgba(59,130,246,0.3)"
                        : "1px solid rgba(139,92,246,0.3)";
                      el.style.background = isBlue
                        ? "rgba(59,130,246,0.03)"
                        : "rgba(139,92,246,0.03)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.border = "1px solid rgba(255,255,255,0.06)";
                      el.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    {/* Corner glow */}
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: isBlue
                          ? "radial-gradient(circle at top right, rgba(59,130,246,0.07), transparent 70%)"
                          : "radial-gradient(circle at top right, rgba(139,92,246,0.07), transparent 70%)",
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-5">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.18em]">
                            {project.subtitle}
                          </span>
                          <h3 className="text-xl font-semibold text-white mt-1">{project.title}</h3>
                        </div>
                        <span
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono shrink-0"
                          style={
                            isBlue
                              ? { background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", color: "#93C5FD" }
                              : { background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)", color: "#C4B5FD" }
                          }
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{project.description}</p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6 flex-1">
                        {project.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-zinc-400 text-sm leading-relaxed">
                            <div
                              className="w-1 h-1 rounded-full mt-2 shrink-0"
                              style={{ background: isBlue ? "#3B82F6" : "#8B5CF6" }}
                            />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Tech */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <TechBadge key={t} label={t} subtle />
                        ))}
                      </div>

                      {/* Verified project links only */}
                      {(project.caseStudySlug || project.repoUrl || project.liveUrl) && (
                        <div className="flex items-center gap-5 pt-2 border-t border-white/[0.05]">
                          {project.caseStudySlug && (
                            <Link href={`/projects/${project.caseStudySlug}`} className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                              Read case study <ChevronRight size={14} />
                            </Link>
                          )}
                          {project.repoUrl && (
                            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-zinc-600 hover:text-white text-sm transition-colors">
                              <Github size={14} /> Source
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-zinc-600 hover:text-white text-sm transition-colors">
                              <ExternalLink size={14} /> Visit project
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Technical Skills</SectionLabel>
              <SectionHeading>
                My tech<br />
                <span className="text-zinc-600">arsenal.</span>
              </SectionHeading>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
              {Object.entries(SKILLS).map(([category, skills], i) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2 rounded-lg text-blue-400"
                      style={{ background: "rgba(59,130,246,0.08)" }}
                    >
                      {SKILL_ICONS[category]}
                    </div>
                    <h3 className="text-sm font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <TechBadge key={skill} label={skill} subtle />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Education</SectionLabel>
              <SectionHeading>
                Academic<br />
                <span className="text-zinc-600">foundation.</span>
              </SectionHeading>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-14">
              <div
                className="p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-start gap-6">
                  <div
                    className="p-4 rounded-xl shrink-0"
                    style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
                  >
                    <Code2 size={22} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Technocrats Institute of Technology
                    </h3>
                    <p className="text-zinc-500 mt-1 text-sm">
                      Bachelor of Technology — Computer Science & Engineering
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <span
                        className="px-3 py-1 rounded-lg text-sm font-mono text-green-400"
                        style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
                      >
                        GPA: 8.02 / 10
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-zinc-600 font-mono text-sm whitespace-nowrap shrink-0">
                  2020 – 2024
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-[3.75rem] font-black text-white tracking-tight leading-[1.05] mt-4 mb-5"
            >
              Let&apos;s build something
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 60%, #DBEAFE 100%)" }}
              >
                amazing together.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-500 text-lg max-w-md mx-auto">
              Open to full-time roles, freelance projects, and interesting collaborations.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-3"
            >
              {[
                { icon: <Mail size={17} />, label: "Email", value: "rahulgupta.sidhi986@gmail.com", href: "mailto:rahulgupta.sidhi986@gmail.com" },
                { icon: <Phone size={17} />, label: "Phone", value: "+91 6260530114", href: "tel:+916260530114" },
                { icon: <MapPin size={17} />, label: "Location", value: "Delhi, India", href: null },
                { icon: <Github size={17} />, label: "GitHub", value: "github.com/rahulastrokapoor-sudo", href: GITHUB_URL },
                ...(LINKEDIN_URL ? [{ icon: <Linkedin size={17} />, label: "LinkedIn", value: "LinkedIn profile", href: LINKEDIN_URL }] : []),
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)";
                  }}
                >
                  <div
                    className="p-2 rounded-lg text-blue-400 shrink-0 transition-colors"
                    style={{ background: "rgba(59,130,246,0.08)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-zinc-300 hover:text-white text-sm transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-zinc-300 text-sm">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:rahulgupta.sidhi986@gmail.com?subject=Hello Rahul&body=${encodeURIComponent(formData.message)}`;
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-zinc-700 outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.border = "1px solid rgba(59,130,246,0.4)";
                        (e.target as HTMLElement).style.background = "rgba(59,130,246,0.04)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-zinc-700 outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.border = "1px solid rgba(59,130,246,0.4)";
                        (e.target as HTMLElement).style.background = "rgba(59,130,246,0.04)";
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                        (e.target as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm placeholder:text-zinc-700 outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={(e) => {
                      (e.target as HTMLElement).style.border = "1px solid rgba(59,130,246,0.4)";
                      (e.target as HTMLElement).style.background = "rgba(59,130,246,0.04)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLElement).style.border = "1px solid rgba(255,255,255,0.08)";
                      (e.target as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:bg-blue-400 active:scale-[0.98]"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(59,130,246,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  Send Message <ArrowRight size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-zinc-700 text-sm font-mono">
            © 2026 Rahul Gupta — Full Stack Developer
          </div>
          <div className="flex items-center gap-5">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              <Github size={17} />
            </a>
            {LINKEDIN_URL && (
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-zinc-700 hover:text-zinc-400 transition-colors">
                <Linkedin size={17} />
              </a>
            )}
            <a href="mailto:rahulgupta.sidhi986@gmail.com" aria-label="Email" className="text-zinc-700 hover:text-zinc-400 transition-colors">
              <Mail size={17} />
            </a>
            <div className="h-4 w-px bg-white/[0.06]" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-zinc-700 hover:text-zinc-400 transition-colors text-xs font-mono flex items-center gap-1.5"
            >
              Back to top <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </footer>

      {/* ── SCROLL TO TOP BUTTON ── */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-3 rounded-full text-zinc-400 hover:text-white transition-all z-40"
          style={{
            background: "rgba(0,0,0,0.8)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={17} />
        </motion.button>
      )}
    </div>
  );
}

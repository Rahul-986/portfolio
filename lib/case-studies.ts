export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  role: string;
  timeline: string;
  stack: string[];
  problem: string;
  users: string[];
  responsibilities: string[];
  architecture: { title: string; detail: string }[];
  decisions: { title: string; detail: string }[];
  metrics: { value: string; label: string }[];
  screenshots: { src: string; alt: string; caption: string }[];
  sourceUrl?: string;
  liveUrl?: string;
  sourceNote: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "astrokapoor",
    title: "AstroKapoor.net",
    eyebrow: "Production e-commerce platform",
    summary:
      "A full-stack gemstone marketplace rebuilt for faster discovery, scalable commerce workflows, and SEO continuity.",
    status: "Live",
    role: "Full Stack Developer",
    timeline: "2025–Present",
    stack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "Redis", "REST APIs", "SSR/SSG", "Technical SEO"],
    problem:
      "The business needed a modern commerce platform that could support a large gemstone catalog, customer accounts, shopping workflows, and multiple currencies without sacrificing search visibility accumulated by the existing website.",
    users: [
      "Retail customers discovering certified gemstones and astrological products",
      "Returning customers managing accounts, wishlists, and carts",
      "Internal teams managing catalog and commerce content",
    ],
    responsibilities: [
      "Built responsive storefront experiences and reusable product-discovery components",
      "Developed catalog, customer, content, wishlist, and cart API integrations",
      "Designed PostgreSQL-backed commerce data flows and introduced Redis caching",
      "Preserved SEO-critical slugs, metadata, canonical URLs, and structured data",
      "Improved rendering and loading performance through SSR/SSG and lazy loading",
    ],
    architecture: [
      { title: "Storefront", detail: "Next.js pages and reusable React components render category, account, wishlist, and cart experiences." },
      { title: "API layer", detail: "Node.js and Express REST endpoints coordinate catalog, customer, and commerce workflows." },
      { title: "Data layer", detail: "PostgreSQL stores relational product and customer data; Redis caches frequently requested responses." },
      { title: "Delivery & SEO", detail: "SSR/SSG, stable routes, canonical metadata, and structured data support performance and crawl continuity." },
    ],
    decisions: [
      {
        title: "Preserve URLs instead of redesigning the taxonomy",
        detail: "Keeping established slugs and canonical relationships reduced migration risk and protected existing search equity.",
      },
      {
        title: "Cache reads without making commerce state stale",
        detail: "Redis was applied to read-heavy catalog data while user-specific cart and account operations remained authoritative in the primary data flow.",
      },
      {
        title: "Use server rendering where discovery matters",
        detail: "Indexable category and product experiences benefit from server-rendered HTML, while interactive customer workflows remain client-driven.",
      },
    ],
    metrics: [
      { value: "~35%", label: "Faster average API responses after caching" },
      { value: "~25%", label: "Core Web Vitals improvement" },
      { value: "4 weeks", label: "Full index parity after migration" },
      { value: "0", label: "Reported organic ranking loss" },
    ],
    screenshots: [
      {
        src: "/projects/astrokapoor-storefront.png",
        alt: "AstroKapoor.net storefront showing gemstone hero banner, navigation, currency selector, wishlist, account, and cart",
        caption: "Production storefront with category-led navigation, multi-currency selection, customer account, wishlist, and cart entry points.",
      },
      {
        src: "/projects/astrokapoor-categories.png",
        alt: "AstroKapoor.net top categories grid showing gemstone, sapphire, ruby, emerald, amethyst, danburite, peridot, and yellow sapphire",
        caption: "Responsive category-discovery grid helping customers navigate the gemstone catalog visually.",
      },
    ],
    liveUrl: "https://astrokapoor.net/",
    sourceNote: "The production repository is private company property and is not publicly shareable.",
  },
  {
    slug: "shopease",
    title: "ShopEase",
    eyebrow: "Full-stack commerce application",
    summary:
      "An end-to-end e-commerce system covering product discovery, secure authentication, authorization, cart, orders, and deployment operations.",
    status: "Production build",
    role: "Full Stack Developer",
    timeline: "Portfolio project",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "JWT", "Nginx", "PM2", "Postman"],
    problem:
      "A commerce application needs more than CRUD screens: customers require a reliable buying flow, while administrators need controlled access to catalog and order operations.",
    users: [
      "Customers browsing products, maintaining carts, and placing orders",
      "Administrators managing products and order status",
      "Developers and operators monitoring API behavior and deployments",
    ],
    responsibilities: [
      "Designed REST APIs for products, authentication, carts, and order management",
      "Implemented JWT authentication and role-based access control",
      "Modelled relational product, user, and order data in PostgreSQL",
      "Added Redis caching for product listings and session-adjacent workloads",
      "Deployed behind Nginx with PM2 process management and documented API tests",
    ],
    architecture: [
      { title: "Client", detail: "Responsive commerce UI consumes versioned REST endpoints for catalog and checkout workflows." },
      { title: "Application API", detail: "Express controllers, validation, authentication middleware, and RBAC enforce business rules." },
      { title: "Persistence", detail: "PostgreSQL maintains transactional entities and relationships; Redis accelerates repeat reads." },
      { title: "Operations", detail: "Nginx terminates and proxies traffic while PM2 manages the Node.js application process." },
    ],
    decisions: [
      {
        title: "Model orders as historical records",
        detail: "Order items preserve purchase-time product values so later catalog changes do not rewrite transaction history.",
      },
      {
        title: "Enforce authorization on the server",
        detail: "Role checks live in API middleware rather than relying on hidden client controls, keeping administrative operations protected.",
      },
      {
        title: "Cache only safe read paths",
        detail: "Product-list caching improves common reads while order and payment-adjacent writes bypass stale cache state.",
      },
    ],
    metrics: [
      { value: "50+", label: "Documented Postman API test cases" },
      { value: "2", label: "Customer and administrator roles" },
      { value: "7", label: "Core backend and deployment technologies" },
      { value: "End-to-end", label: "Catalog-to-order workflow coverage" },
    ],
    screenshots: [],
    sourceNote: "A public repository and live demo have not been supplied yet. Add verified URLs here when they are published.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}

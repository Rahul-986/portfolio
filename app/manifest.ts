import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rahul Gupta — Full Stack Developer",
    short_name: "Rahul Gupta",
    description: "Portfolio of Rahul Gupta, Full Stack Developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [{ src: "/icon", sizes: "32x32", type: "image/png" }],
  };
}

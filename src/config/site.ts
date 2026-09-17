export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Army Escape Wiki",
  shortName: "Army Escape",
  logoText: "AE",
  tagline: "Complete Guides, Codes, Soldiers & Stage Walkthroughs",
  description: "Your ultimate guide to Army Escape on Roblox! Explore active codes, soldier stats, stage walkthroughs, wins farming, and beginner tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://army-escape.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://army-escape.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/83053913264670/1-Army-Escape",
  heroVideoId: "qJPQ_NZ1OwQ", // Roblox +1 Army Escape gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

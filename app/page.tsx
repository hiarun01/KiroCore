import {About, Footer, Header, Hero, ScrollToTop} from "@/core/components";

// Hardcoded config for MVP
const appConfig = {
  name: "kiroCore",
  icon: "👻",
  footer: {
    attribution: "Built with Kiro 💀",
    links: [
      {label: "GitHub", href: "https://github.com"},
      {label: "Docs", href: "https://docs.example.com"},
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Header appName={appConfig.name} appIcon={appConfig.icon} />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      <Footer
        attribution={appConfig.footer.attribution}
        links={appConfig.footer.links}
        fixed={false}
      />

      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

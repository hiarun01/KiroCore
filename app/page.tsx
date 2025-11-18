import {Header} from "@/core/components/layout/Header";
import {Footer} from "@/core/components/layout/Footer";
import {Hero} from "@/core/components/sections/Hero";
import {About} from "@/core/components/sections/About";
import {ScrollToTop} from "@/core/components/ui/ScrollToTop";

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

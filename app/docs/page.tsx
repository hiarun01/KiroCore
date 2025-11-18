import {Header} from "@/core/components/layout/Header";
import {Footer} from "@/core/components/layout/Footer";
import {DocsContent} from "@/core/components/sections/DocsContent";

const appConfig = {
  name: "kiroCore",
  icon: "👻",
  footer: {
    attribution: "Built with Kiro 💀",
    links: [
      {label: "GitHub", href: "https://github.com"},
      {label: "Home", href: "/"},
    ],
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header appName={appConfig.name} appIcon={appConfig.icon} />

      <DocsContent />

      <Footer
        attribution={appConfig.footer.attribution}
        links={appConfig.footer.links}
      />
    </div>
  );
}

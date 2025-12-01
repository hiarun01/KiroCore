import {Header} from "@/core/components/layout/Header";
import {Footer} from "@/core/components/layout/Footer";
import {DocsContent} from "@/core/components/sections/DocsContent";

const appConfig = {
  name: "kiroCore",
  icon: "👻",
  footer: {
    links: [
      {label: "Home", href: "/"},
      {label: "Browse Apps", href: "/apps"},
      {label: "GitHub", href: "https://github.com/hiarun01/KiroCore"},
    ],
  },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header appName={appConfig.name} appIcon={appConfig.icon} />

      <DocsContent />

      <Footer links={appConfig.footer.links} />
    </div>
  );
}

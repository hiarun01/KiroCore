import {Header} from "@/core/components/Header";
import {Footer} from "@/core/components/Footer";
import {ChatArea} from "@/core/components/ChatArea";

// Hardcoded config for MVP
const appConfig = {
  name: "kiroCore",
  icon: "👻",
  welcomeMessage: "Welcome to kiroCore!",
  footer: {
    attribution: "Built with Kiro 💀",
    links: [
      {label: "GitHub", href: "https://github.com"},
      {label: "Docs", href: "https://docs.example.com"},
    ],
  },
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header appName={appConfig.name} appIcon={appConfig.icon} />

      {/* Chat Section */}
      <ChatArea
        welcomeMessage={appConfig.welcomeMessage}
        appIcon={appConfig.icon}
      />

      <Footer
        attribution={appConfig.footer.attribution}
        links={appConfig.footer.links}
      />
    </div>
  );
}

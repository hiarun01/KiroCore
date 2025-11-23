import {ChatArea, Footer, Header} from "@/components";

// Hardcoded config for MVP
const appConfig = {
  name: "KiroCore",
  icon: "👻",
  welcomeMessage: "Welcome to the haunted realm!",
  footer: {
    attribution: "Built with Kiro 💀",
    links: [
      {label: "GitHub", href: "https://github.com"},
      {label: "Docs", href: "http://localhost:3000//docs"},
    ],
  },
};

export default function AppPage() {
  return (
    <>
      <Header appName={appConfig.name} appIcon={appConfig.icon} />
      <ChatArea
        welcomeMessage={appConfig.welcomeMessage}
        appIcon={appConfig.icon}
      />
      <Footer
        attribution={appConfig.footer.attribution}
        links={appConfig.footer.links}
      />
    </>
  );
}

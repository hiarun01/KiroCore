"use client";

import {AppBrowser, Footer, Header} from "@/core/components";

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header appName="Browse Apps" appIcon="FiTarget" />

      <main className="pt-20">
        <AppBrowser />
      </main>

      <Footer
        attribution="Built with Kiro 💀"
        links={[
          {label: "GitHub", href: "https://github.com"},
          {label: "Home", href: "/"},
        ]}
        fixed={false}
      />
    </div>
  );
}

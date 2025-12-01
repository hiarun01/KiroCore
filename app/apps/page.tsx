"use client";

import {AppBrowser, Footer, Header} from "@/core/components";

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header appName="KiroCore" appIcon="👻" />

      <main className="pt-20">
        <AppBrowser />
      </main>

      <Footer
        links={[
          {label: "Home", href: "/"},
          {label: "Docs", href: "/docs"},
          {label: "GitHub", href: "https://github.com/hiarun01/KiroCore"},
        ]}
        fixed={false}
      />
    </div>
  );
}

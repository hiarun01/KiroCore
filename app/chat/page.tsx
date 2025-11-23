"use client";

import {ChatArea, ChatSidebar} from "@/core/components";
import {useState} from "react";

// Hardcoded config for MVP
const appConfig = {
  name: "kiroCore",
  icon: "👻",
  welcomeMessage: "Welcome to kiroCore!",
};

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Chat Sidebar */}
      <ChatSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Chat Section */}
      <ChatArea
        welcomeMessage={appConfig.welcomeMessage}
        appIcon={appConfig.icon}
        sidebarOpen={sidebarOpen}
      />
    </div>
  );
}

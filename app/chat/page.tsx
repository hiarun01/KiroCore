"use client";

import {useState} from "react";
import {ChatArea} from "@/core/components/chat/ChatArea";
import {ChatSidebar} from "@/core/components/chat/ChatSidebar";

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

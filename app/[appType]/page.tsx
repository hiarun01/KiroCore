"use client";
import {FiSidebar} from "react-icons/fi";
import {ChatArea} from "@/core/components";
import {Sidebar} from "@/core/components/chat/Sidebar";
import Link from "next/link";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";

type AppConfig = {
  name: string;
  description: string;
  icon: string;
  welcomeMessage: string;
  systemPrompt: string;
  features: string[];
  theme: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
};

export default function AppPage() {
  const params = useParams();
  const appType = params.appType as string;
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatKey, setChatKey] = useState(0);
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | undefined
  >();

  const handleNewChat = () => {
    // Set to "new" to trigger new conversation creation
    setSelectedConversationId("new");
    setChatKey((prev) => prev + 1); // Force ChatArea to remount
    setMenuOpen(false);
  };

  const handleSelectConversation = (conversationId: string) => {
    setSelectedConversationId(conversationId);
    setChatKey((prev) => prev + 1); // Force ChatArea to remount
  };

  const handleClearChat = () => {
    const storageKey = `kirocore_chat_${appType}`;
    localStorage.removeItem(storageKey);
    window.location.reload();
  };

  useEffect(() => {
    if (!appType) return;

    fetch(`http://localhost:3001/api/apps/${appType}`)
      .then((res) => {
        if (!res.ok) throw new Error(`App '${appType}' not found`);
        return res.json();
      })
      .then((data) => {
        setConfig(data.config);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load app config:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [appType]);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-pulse">👻</div>
          <p className="text-zinc-400">Loading {appType}...</p>
        </div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-zinc-100 mb-2">
            App Not Found
          </h1>
          <p className="text-zinc-400 mb-6">
            {error || `The app '${appType}' doesn't exist.`}
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-transform"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen bg-zinc-950 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        key={chatKey}
        appName={config.name}
        appIcon={config.icon}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat}
        onSelectConversation={handleSelectConversation}
        appType={appType}
      />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "lg:ml-64" : "lg:ml-0"
        } relative`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800 shadow-lg"
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
          {sidebarOpen ? <FiSidebar /> : <FiSidebar />}
        </button>

        {/* Floating Menu Button - Top Right */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800 shadow-lg"
          >
            <svg
              className="w-6 h-6 text-zinc-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setMenuOpen(false)}
              />

              {/* Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50">
                <Link
                  href="/apps"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-100 hover:bg-zinc-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  Browse Apps
                </Link>

                <Link
                  href="/docs"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-100 hover:bg-zinc-800 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Documentation
                </Link>

                <div className="border-t border-zinc-800" />

                <button
                  onClick={() => {
                    handleClearChat();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-900/20 transition-colors w-full text-left"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Clear Chat
                </button>
              </div>
            </>
          )}
        </div>

        {/* Chat Area */}
        <ChatArea
          key={chatKey}
          welcomeMessage={config.welcomeMessage}
          appIcon={config.icon}
          appType={appType}
          conversationId={selectedConversationId}
        />
      </div>
    </div>
  );
}

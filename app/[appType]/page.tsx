"use client";
import {FiSidebar} from "react-icons/fi";
import {ChatArea} from "@/core/components";
import {Sidebar} from "@/core/components/chat/Sidebar";
import Link from "next/link";
import {useParams} from "next/navigation";
import {useEffect, useState, useCallback} from "react";
import {useKeyboardShortcuts} from "@/core/hooks/useKeyboardShortcuts";
import {ShortcutsModal} from "@/core/components/ui/ShortcutsModal";

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
  const [showShortcuts, setShowShortcuts] = useState(false);

  const handleNewChat = useCallback(() => {
    setSelectedConversationId("new");
    setChatKey((prev) => prev + 1);
    setMenuOpen(false);
  }, []);

  const handleSelectConversation = useCallback((conversationId: string) => {
    setSelectedConversationId(conversationId);
    setChatKey((prev) => prev + 1);
  }, []);

  const handleClearChat = useCallback(() => {
    const storageKey = `kirocore_chat_${appType}`;
    localStorage.removeItem(storageKey);
    window.location.reload();
  }, [appType]);

  const handleExportChat = useCallback(async () => {
    const {default: toast} = await import("react-hot-toast");
    const storageKey = `kirocore_conversations_${appType}`;
    const data = localStorage.getItem(storageKey);

    if (!data) {
      toast.error("No chat history to export");
      return;
    }

    try {
      const {jsPDF} = await import("jspdf");
      const conversations = JSON.parse(data);

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 15;
      const maxWidth = pageWidth - 2 * margin;
      let yPos = 20;

      // Title
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text(`${config?.name || appType} - Chat Export`, margin, yPos);
      yPos += 10;

      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Exported: ${new Date().toLocaleDateString()}`, margin, yPos);
      yPos += 15;

      // Get all messages from all conversations
      const allMessages: Array<{
        role: string;
        content: string;
        timestamp: string;
      }> = [];

      const convs = conversations as Record<
        string,
        {messages?: Array<{role: string; content: string; timestamp: string}>}
      >;
      Object.values(convs).forEach((conv) => {
        if (conv.messages) {
          allMessages.push(...conv.messages);
        }
      });

      // Sort by timestamp
      allMessages.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );

      // Add messages
      allMessages.forEach((msg) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }

        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        const role = msg.role === "user" ? "You" : "AI";
        const time = new Date(msg.timestamp).toLocaleTimeString();
        doc.text(`${role} (${time}):`, margin, yPos);
        yPos += 6;

        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(msg.content, maxWidth);
        lines.forEach((line: string) => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          doc.text(line, margin, yPos);
          yPos += 5;
        });
        yPos += 5;
      });

      doc.save(`${appType}-chat-${new Date().toISOString().split("T")[0]}.pdf`);
      const {default: toast} = await import("react-hot-toast");
      toast.success("Chat exported successfully!");
      setMenuOpen(false);
    } catch (error) {
      console.error("Export failed:", error);
      const {default: toast} = await import("react-hot-toast");
      toast.error("Failed to export chat");
    }
  }, [appType, config]);

  // Keyboard shortcuts
  useKeyboardShortcuts([
    {
      key: "n",
      ctrl: true,
      callback: handleNewChat,
      description: "New chat",
    },
    {
      key: "b",
      ctrl: true,
      callback: () => setSidebarOpen((prev) => !prev),
      description: "Toggle sidebar",
    },
    {
      key: "e",
      ctrl: true,
      shift: true,
      callback: handleExportChat,
      description: "Export chat",
    },
    {
      key: "k",
      ctrl: true,
      shift: true,
      callback: handleClearChat,
      description: "Clear chat",
    },
    {
      key: "?",
      callback: () => setShowShortcuts(true),
      description: "Show shortcuts",
    },
  ]);

  useEffect(() => {
    if (!appType) return;

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
    fetch(`${API_URL}/api/apps/${appType}`)
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
        {/* Sidebar Toggle Button - Only show when closed */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="fixed top-3 left-3 z-50 p-1.5 sm:p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800 shadow-lg"
            aria-label="Open sidebar"
          >
            <FiSidebar className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Floating Menu Button - Top Right */}
        <div className="fixed top-3 right-3 z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 sm:p-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-800 shadow-lg"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-100"
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
                    setShowShortcuts(true);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-100 hover:bg-zinc-800 transition-colors w-full text-left"
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
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  Keyboard Shortcuts
                </button>

                <button
                  onClick={handleExportChat}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-100 hover:bg-zinc-800 transition-colors w-full text-left"
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Export Chat
                </button>

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

        {/* Floating Shortcuts Hint */}
        <button
          onClick={() => setShowShortcuts(true)}
          className="fixed bottom-6 left-6 p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full shadow-lg transition-all hover:scale-110 group"
          title="Keyboard shortcuts (?)"
        >
          <svg
            className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </button>
      </div>

      {/* Keyboard Shortcuts Modal */}
      <ShortcutsModal
        isOpen={showShortcuts}
        onClose={() => setShowShortcuts(false)}
      />
    </div>
  );
}

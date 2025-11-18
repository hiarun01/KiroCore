"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

interface ChatHistory {
  id: string;
  title: string;
  timestamp: Date;
}

interface ChatSidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function ChatSidebar({isOpen, setIsOpen}: ChatSidebarProps) {
  const [activeChat, setActiveChat] = useState<string | null>("1");
  const [chatHistory] = useState<ChatHistory[]>([
    {id: "1", title: "Getting started with KiroCore", timestamp: new Date()},
    {
      id: "2",
      title: "How to create new apps",
      timestamp: new Date(Date.now() - 86400000),
    },
    {
      id: "3",
      title: "Configuration options",
      timestamp: new Date(Date.now() - 172800000),
    },
    {
      id: "4",
      title: "API integration guide",
      timestamp: new Date(Date.now() - 259200000),
    },
    {
      id: "5",
      title: "Deployment best practices",
      timestamp: new Date(Date.now() - 345600000),
    },
  ]);

  return (
    <>
      {/* Open Sidebar Button - Shows when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors"
          aria-label="Open sidebar"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-zinc-400"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay for mobile */}
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />

            {/* Sidebar Content - ChatGPT Style */}
            <motion.aside
              initial={{x: -300}}
              animate={{x: 0}}
              exit={{x: -300}}
              transition={{type: "spring", damping: 25, stiffness: 200}}
              className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-900 z-50 flex flex-col"
            >
              {/* Top Section - New Chat & Close */}
              <div className="p-2 flex items-center gap-2">
                <button className="flex-1 flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-700/50">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  <span className="font-medium">New chat</span>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 text-zinc-400 hover:bg-zinc-800 rounded-lg transition-colors"
                  aria-label="Close sidebar"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M9 3v18" />
                  </svg>
                </button>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto px-2 py-2 custom-scrollbar">
                <div className="space-y-0.5">
                  {chatHistory.map((chat) => (
                    <button
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-colors group relative ${
                        activeChat === chat.id
                          ? "bg-zinc-800"
                          : "hover:bg-zinc-800"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-500 shrink-0"
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>
                          <span className="text-sm text-zinc-300 truncate">
                            {chat.title}
                          </span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-zinc-700 rounded transition-all shrink-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-zinc-400"
                          >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                          </svg>
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="border-t border-zinc-800 p-2">
                {/* User Profile */}
                <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
                  <div className="w-7 h-7 rounded-sm bg-linear-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                    U
                  </div>
                  <span className="truncate">User</span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  return date.toLocaleDateString();
}

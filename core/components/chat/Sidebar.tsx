"use client";

import Link from "next/link";
import {useState, useEffect} from "react";
import {
  getConversations,
  deleteConversation,
  getActiveConversationId,
  type Conversation,
} from "@/core/services/conversationHistory";

interface SidebarProps {
  appName: string;
  appIcon: string;
  isOpen: boolean;
  onToggle: () => void;
  onNewChat?: () => void;
  onSelectConversation?: (conversationId: string) => void;
  appType?: string;
}

export function Sidebar({
  appName,
  appIcon,
  isOpen,
  onToggle,
  onNewChat,
  onSelectConversation,
  appType = "study-buddy",
}: SidebarProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<
    string | null
  >(null);

  const loadConversations = () => {
    const convs = getConversations(appType);
    setConversations(convs);
    const activeId = getActiveConversationId(appType);
    setActiveConversationId(activeId);
  };

  useEffect(() => {
    loadConversations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appType]);

  const handleDeleteConversation = (
    conversationId: string,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    deleteConversation(appType, conversationId);
    loadConversations();
  };

  const handleSelectConversation = (conversationId: string) => {
    if (onSelectConversation) {
      onSelectConversation(conversationId);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-zinc-900 border-r border-zinc-800 z-50 transition-transform duration-300 w-64 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <Link
            href="/apps"
            className="flex items-center gap-3 text-zinc-100 hover:text-white transition-colors"
          >
            <span className="text-2xl">{appIcon}</span>
            <span className="font-semibold text-lg">{appName}</span>
          </Link>
        </div>

        {/* New Chat Button */}
        <div className="p-3">
          <button
            onClick={() => {
              if (onNewChat) {
                onNewChat();
              } else {
                window.location.reload();
              }
            }}
            className="w-full flex items-center gap-3 px-4 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors shadow-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="font-medium">New Chat</span>
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto px-3 py-2">
          {conversations.length > 0 ? (
            <>
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">
                Recent Chats
              </div>
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors mb-1 group cursor-pointer ${
                    conv.id === activeConversationId
                      ? "bg-zinc-800 text-zinc-100"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
                  }`}
                  onClick={() => handleSelectConversation(conv.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 truncate">
                      <div className="text-sm font-medium truncate">
                        {conv.title}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {conv.messages.length} messages
                      </div>
                    </div>
                    <button
                      onClick={(e) => handleDeleteConversation(conv.id, e)}
                      className="opacity-0 group-hover:opacity-100 p-1 hover:bg-zinc-700 rounded transition-opacity"
                      aria-label="Delete conversation"
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
                    </button>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <svg
                className="w-12 h-12 text-zinc-700 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <p className="text-sm text-zinc-500">No conversations yet</p>
              <p className="text-xs text-zinc-600 mt-1">
                Start chatting to see history
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

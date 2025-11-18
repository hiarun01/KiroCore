"use client";

import {useState} from "react";
import {Message} from "@/core/types/message";
import {MessageList} from "./MessageList";
import {MessageInput} from "./MessageInput";
import {EmptyState} from "./EmptyState";

interface ChatAreaProps {
  welcomeMessage: string;
  appIcon?: string;
  sidebarOpen?: boolean;
}

export function ChatArea({
  welcomeMessage,
  appIcon,
  sidebarOpen = true,
}: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response (future: connect to Kiro API)
    setIsLoading(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "This is a placeholder response. Connect to Kiro API for real responses!",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main
      className={`flex flex-col h-screen transition-all duration-300 ${
        sidebarOpen ? "lg:ml-64" : "ml-0"
      }`}
    >
      {/* Messages Area - scrollable */}
      <div className="flex-1 overflow-y-auto flex justify-center">
        <div className="w-full max-w-4xl px-2 sm:px-4 py-6 flex flex-col">
          {messages.length === 0 ? (
            <EmptyState welcomeMessage={welcomeMessage} appIcon={appIcon} />
          ) : (
            <MessageList messages={messages} isLoading={isLoading} />
          )}
        </div>
      </div>

      {/* Input Area - fixed at bottom */}
      <div className="shrink-0 border-t border-zinc-800 bg-zinc-950 py-4">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6">
          <MessageInput onSend={handleSendMessage} disabled={isLoading} />
        </div>
      </div>
    </main>
  );
}

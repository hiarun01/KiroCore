"use client";

import {useState} from "react";
import {Message} from "@/core/types/message";
import {MessageList} from "./MessageList";
import {MessageInput} from "./MessageInput";
import {EmptyState} from "./EmptyState";

interface ChatAreaProps {
  welcomeMessage: string;
  appIcon?: string;
}

export function ChatArea({welcomeMessage, appIcon}: ChatAreaProps) {
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
    <main className="flex flex-col h-screen pt-14 sm:pt-16 pb-12 sm:pb-14">
      <div className="flex-1 overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-4xl flex-1 flex flex-col px-2 sm:px-4">
          {messages.length === 0 ? (
            <EmptyState welcomeMessage={welcomeMessage} appIcon={appIcon} />
          ) : (
            <MessageList messages={messages} isLoading={isLoading} />
          )}
        </div>
      </div>

      <div className="flex justify-center px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-4xl">
          <MessageInput onSend={handleSendMessage} disabled={isLoading} />
        </div>
      </div>
    </main>
  );
}

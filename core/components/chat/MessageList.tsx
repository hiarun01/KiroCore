"use client";

import {useEffect, useRef} from "react";
import {Message} from "@/core/types/message";
import {UserMessage} from "./UserMessage";
import {AIMessage} from "./AIMessage";

interface MessageListProps {
  messages: Message[];
  isLoading?: boolean;
}

export function MessageList({messages, isLoading}: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {messages.map((message) =>
        message.role === "user" ? (
          <UserMessage
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
          />
        ) : (
          <AIMessage
            key={message.id}
            content={message.content}
            timestamp={message.timestamp}
          />
        )
      )}

      {isLoading && (
        <div className="flex items-start gap-3">
          <span className="text-2xl">👻</span>
          <div className="flex gap-1 items-center bg-zinc-900 rounded-2xl px-4 py-3">
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{animationDelay: "0ms"}}
            />
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{animationDelay: "150ms"}}
            />
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{animationDelay: "300ms"}}
            />
          </div>
        </div>
      )}
    </div>
  );
}

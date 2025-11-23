// core/hooks/useKiroAgent.tsx
"use client";
import {useState, useRef} from "react";

export type Message = {
  id: string;
  role: "user" | "ai" | "system";
  text: string;
  meta?: any;
};

export type AgentConfig = Record<string, any>;

export function useKiroAgent({
  agentId = null,
  agentConfig = null,
  apiPath = "/api/kiro",
}: {
  agentId?: string | null;
  agentConfig?: AgentConfig | null;
  apiPath?: string;
} = {}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reqCounter = useRef(0);

  function pushMessage(msg: Omit<Message, "id">) {
    setMessages((m) => [...m, {id: `${Date.now()}-${Math.random()}`, ...msg}]);
  }

  async function sendMessage(input: string) {
    const trimmed = (input || "").toString().trim();
    if (!trimmed) return;

    pushMessage({role: "user", text: trimmed});

    setLoading(true);
    setError(null);
    reqCounter.current += 1;
    const reqId = reqCounter.current;

    try {
      const body: any = {input: trimmed};
      if (agentId) body.agentId = agentId;
      if (agentConfig) body.agentConfig = agentConfig;

      const res = await fetch(apiPath, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `API error ${res.status}`);
      }

      const data = (await res.json()) as any;

      if (reqId !== reqCounter.current) return;

      const replyText = (data?.reply ?? String(data)) as string;
      pushMessage({role: "ai", text: replyText, meta: data?.meta ?? null});
      setLoading(false);
      return replyText;
    } catch (err: any) {
      console.error("sendMessage error:", err);
      const message = err?.message ?? "Unknown error";
      setError(message);
      pushMessage({role: "system", text: `Error: ${message}`});
      setLoading(false);
    }
  }

  function clear() {
    setMessages([]);
    setError(null);
  }

  return {messages, sendMessage, loading, error, clear, pushMessage};
}

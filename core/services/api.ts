const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

export interface ChatRequest {
  message: string;
  appType: string;
  conversationHistory?: ChatMessage[];
}

export interface ChatResponse {
  success: boolean;
  response: string;
  appType: string;
  timestamp: string;
  source?: "kiro-cli" | "fallback";
}

export interface AppConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  systemPrompt: string;
  welcomeMessage: string;
  features: string[];
  theme: Record<string, string | number>;
}

export async function sendChatMessage(
  request: ChatRequest
): Promise<ChatResponse> {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(request),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export async function getAllApps(): Promise<AppConfig[]> {
  try {
    const response = await fetch(`${API_URL}/api/apps`);
    if (!response.ok) return [];
    const data = await response.json();
    return data.apps || [];
  } catch {
    return [];
  }
}

export async function getAppConfig(appType: string): Promise<AppConfig | null> {
  try {
    const response = await fetch(`${API_URL}/api/apps/${appType}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.config || null;
  } catch {
    return null;
  }
}

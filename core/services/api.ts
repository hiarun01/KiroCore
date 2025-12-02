// API URL with fallback for local development
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

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
  theme: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
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

// Cache for apps data
let appsCache: AppConfig[] = [];
let appsCacheTime: number = 0;
const CACHE_DURATION = 60000; // 1 minute

export async function getAllApps(forceRefresh = false): Promise<AppConfig[]> {
  // Return cached data if available and not expired
  if (
    !forceRefresh &&
    appsCache.length > 0 &&
    Date.now() - appsCacheTime < CACHE_DURATION
  ) {
    return appsCache;
  }

  try {
    const response = await fetch(`${API_URL}/api/apps`, {
      cache: "force-cache",
      next: {revalidate: 60},
    });
    if (!response.ok) return appsCache;
    const data = await response.json();
    appsCache = data.apps || [];
    appsCacheTime = Date.now();
    return appsCache;
  } catch (error) {
    console.error("Error fetching apps:", error);
    return appsCache;
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

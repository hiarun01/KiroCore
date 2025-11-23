const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

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
  error?: string;
}

export interface AppConfig {
  id: string;
  name: string;
  description: string;
  icon: string;
  systemPrompt: string;
  welcomeMessage: string;
  features: string[];
  theme: Record<string, any>; 
}

/**
 * Send a chat message to the backend
 */
export async function sendChatMessage(
  request: ChatRequest
): Promise<ChatResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Chat API error:", error);
    throw error;
  }
}

/**
 * Get all available apps
 */
export async function getAllApps(): Promise<AppConfig[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/apps`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.apps || [];
  } catch (error) {
    console.error("Apps API error:", error);
    return [];
  }
}

/**
 * Get specific app configuration
 */
export async function getAppConfig(appType: string): Promise<AppConfig | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/apps/${appType}`);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.config || null;
  } catch (error) {
    console.error("App config API error:", error);
    return null;
  }
}

/**
 * Check backend health
 */
export async function checkBackendHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch (error) {
    console.error("Backend health check failed:", error);
    return false;
  }
}

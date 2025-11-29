import {GoogleGenerativeAI} from "@google/generative-ai";
import {getAppConfig} from "./app-service.js";

// Lazy initialization - will be created when first needed
let genAI = null;

/**
 * Get or initialize Gemini AI instance
 * @returns {GoogleGenerativeAI|null}
 */
function getGeminiInstance() {
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log("[Gemini] Initialized with API key");
  }
  return genAI;
}

/**
 * Generate AI response using Google Gemini
 * @param {Object} params - Parameters
 * @param {string} params.appType - App type
 * @param {string} params.message - User message
 * @param {Array} params.conversationHistory - Previous messages
 * @returns {Promise<Object>} - AI response
 */
export async function generateGeminiResponse({
  appType,
  message,
  conversationHistory = [],
}) {
  try {
    // Get Gemini instance
    const gemini = getGeminiInstance();
    if (!gemini) {
      console.warn("[Gemini] API not initialized - API key missing");
      return getFallbackResponse(appType, message);
    }

    console.log(`[Gemini] Generating response for ${appType}`);

    // Get app configuration for system prompt
    const appConfig = await getAppConfig(appType);
    const systemPrompt =
      appConfig.systemPrompt || "You are a helpful AI assistant.";

    // Initialize model (using gemini-1.5-flash as per official docs)
    const model = gemini.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    // Build conversation history
    const history = conversationHistory.map((msg) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{text: msg.content}],
    }));

    // Start chat with history
    const chat = model.startChat({
      history,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    // Send message with system prompt context
    const prompt =
      conversationHistory.length === 0
        ? `${systemPrompt}\n\nUser: ${message}`
        : message;

    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    console.log("[Gemini] Response generated successfully");

    return {
      content: text,
      appType,
      timestamp: new Date().toISOString(),
      source: "gemini-ai",
    };
  } catch (error) {
    console.error("[Gemini] Error:", error.message);

    // Fallback to mock response if Gemini fails
    return getFallbackResponse(appType, message);
  }
}

/**
 * Get fallback response when Gemini is unavailable
 * @param {string} appType - App type
 * @param {string} _message - User message
 * @returns {Object} - Fallback response
 */
function getFallbackResponse(appType, _message) {
  const responses = {
    "study-buddy": [
      `Great question! Let me help you understand that concept. As your study companion, I'll break this down step by step for you.`,
      `I can explain that! Let's start with the fundamentals and build up from there.`,
      `That's an interesting topic to explore. Here's how I'd approach learning this...`,
    ],
    "idea-forge": [
      `Interesting idea! Let me help you develop that further. Here are some angles to consider...`,
      `I love where you're going with this! Let's brainstorm how to make it even stronger.`,
      `That's a solid foundation. Let's explore the possibilities together.`,
    ],
  };

  const appResponses = responses[appType] || [
    `Thanks for your message! I'm here to help you with ${appType}.`,
  ];

  const response =
    appResponses[Math.floor(Math.random() * appResponses.length)];

  return {
    content:
      response +
      "\n\n*Note: Please configure GEMINI_API_KEY in server/.env to enable AI responses.*",
    appType,
    timestamp: new Date().toISOString(),
    source: "fallback",
  };
}

/**
 * Test Gemini API availability
 * @returns {Promise<boolean>}
 */
export async function testGeminiAPI() {
  try {
    const gemini = getGeminiInstance();
    if (!gemini) {
      console.warn("[Gemini] API not initialized");
      return false;
    }

    const model = gemini.getGenerativeModel({model: "gemini-2.5-flash"});
    const result = await model.generateContent("Hello");
    const response = await result.response;

    console.log("[Gemini] API test successful");
    return !!response.text();
  } catch (error) {
    console.error("[Gemini] API test failed:", error.message);
    return false;
  }
}

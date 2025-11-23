import {exec} from "child_process";
import {promisify} from "util";
import path from "path";
import fs from "fs/promises";
import {fileURLToPath} from "url";

const execAsync = promisify(exec); // 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Execute Kiro CLI agent for a specific app
 * @param {Object} params - Parameters for Kiro execution
 * @param {string} params.appType - The app type (study-buddy, idea-forge)
 * @param {string} params.message - User message
 * @param {Array} params.conversationHistory - Previous messages
 * @returns {Promise<Object>} - AI response
 */
export async function executeKiroAgent({
  appType,
  message,
  conversationHistory = [],
}) {
  try {
    console.log(`[Kiro] Executing agent for app: ${appType}`);

    // Path to app's .kiro directory
    const appKiroPath = path.join(process.cwd(), "apps", appType, ".kiro");

    // Check if app has Kiro config
    const hasKiroConfig = await checkKiroConfig(appKiroPath);

    if (!hasKiroConfig) {
      console.warn(
        `[Kiro] No .kiro config found for ${appType}, using fallback`
      );
      return await getFallbackResponse(appType, message);
    }

    // Build conversation context
    const context = buildConversationContext(conversationHistory);

    // Execute Kiro CLI
    const response = await executeKiroCLI(appKiroPath, message, context);

    return {
      content: response,
      appType,
      timestamp: new Date().toISOString(),
      source: "kiro-cli",
    };
  } catch (error) {
    console.error("[Kiro] Execution error:", error);

    // Fallback to mock response if Kiro fails
    console.log("[Kiro] Falling back to mock response");
    return await getFallbackResponse(appType, message);
  }
}

/**
 * Execute Kiro CLI command
 * @param {string} kiroPath - Path to .kiro directory
 * @param {string} message - User message
 * @param {string} context - Conversation context
 * @returns {Promise<string>} - AI response
 */
async function executeKiroCLI(kiroPath, message, context) {
  try {
    // Escape message for shell
    const escapedMessage = message.replace(/"/g, '\\"');

    // Build Kiro CLI command
    // Adjust this command based on actual Kiro CLI syntax
    const command = `kiro chat "${escapedMessage}" --config "${kiroPath}"`;

    console.log(`[Kiro] Executing: ${command}`);

    // Execute with timeout
    const {stdout, stderr} = await execAsync(command, {
      timeout: 30000, // 30 second timeout
      maxBuffer: 1024 * 1024, // 1MB buffer
    });

    if (stderr) {
      console.warn("[Kiro] CLI stderr:", stderr);
    }

    const response = stdout.trim();

    if (!response) {
      throw new Error("Empty response from Kiro CLI");
    }

    console.log(
      "[Kiro] Response received:",
      response.substring(0, 100) + "..."
    );

    return response;
  } catch (error) {
    console.error("[Kiro] CLI execution failed:", error.message);
    throw error;
  }
}

/**
 * Check if Kiro configuration exists
 * @param {string} kiroPath - Path to .kiro directory
 * @returns {Promise<boolean>}
 */
async function checkKiroConfig(kiroPath) {
  try {
    await fs.access(kiroPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Build conversation context from history
 * @param {Array} history - Conversation history
 * @returns {string} - Formatted context
 */
function buildConversationContext(history) {
  if (!history || history.length === 0) {
    return "";
  }

  return history
    .map(
      (msg) => `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
    )
    .join("\n");
}

/**
 * Get fallback response when Kiro is unavailable
 * @param {string} appType - App type
 * @param {string} message - User message
 * @returns {Promise<Object>} - Fallback response
 */
async function getFallbackResponse(appType, message) {
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const responses = {
    "study-buddy": [
      `Great question! Let me help you understand that concept. As your study companion, I'll break this down step by step for you.`,
      `I can explain that! Let's start with the fundamentals and build up from there.`,
      `That's an interesting topic to explore. Here's how I'd approach learning this...`,
      `Let me help clarify that for you. Think of it this way...`,
    ],
    "idea-forge": [
      `Interesting idea! Let me help you develop that further. Here are some angles to consider...`,
      `I love where you're going with this! Let's brainstorm how to make it even stronger.`,
      `That's a solid foundation. Let's explore the possibilities together.`,
      `Great thinking! Here's how we could expand on that concept...`,
    ],
  };

  const appResponses = responses[appType] || [
    `Thanks for your message! I'm here to help you with ${appType}.`,
  ];

  // Return random response
  const response =
    appResponses[Math.floor(Math.random() * appResponses.length)];

  return {
    content: response,
    appType,
    timestamp: new Date().toISOString(),
    source: "fallback",
  };
}

/**
 * Test Kiro CLI availability
 * @returns {Promise<boolean>}
 */
export async function testKiroCLI() {
  try {
    const {stdout} = await execAsync("kiro --version", {timeout: 5000});
    console.log("[Kiro] CLI version:", stdout.trim());
    return true;
  } catch (error) {
    console.warn("[Kiro] CLI not available:", error.message);
    return false;
  }
}

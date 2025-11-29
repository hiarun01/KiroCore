import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APPS_DIR = path.join(process.cwd(), "apps");

/**
 * Get all available apps
 * @returns {Promise<Array>} - List of app configurations
 */
export async function getAllApps() {
  try {
    const appDirs = await fs.readdir(APPS_DIR);
    const apps = [];

    for (const appDir of appDirs) {
      const appPath = path.join(APPS_DIR, appDir);
      const stats = await fs.stat(appPath);

      if (stats.isDirectory()) {
        const config = await getAppConfig(appDir);
        if (config) {
          apps.push({
            id: appDir,
            ...config,
          });
        }
      }
    }

    return apps;
  } catch (error) {
    console.error("Error reading apps directory:", error);
    return [];
  }
}

/**
 * Get configuration for a specific app
 * @param {string} appType - The app type (e.g., 'study-buddy')
 * @returns {Promise<Object|null>} - App configuration or null
 */
export async function getAppConfig(appType) {
  try {
    // Try .js first, then .ts
    const configExtensions = [".js", ".ts"];
    let configPath = null;

    for (const ext of configExtensions) {
      const testPath = path.join(APPS_DIR, appType, `agent.config${ext}`);
      try {
        await fs.access(testPath);
        configPath = testPath;
        break;
      } catch {
        continue;
      }
    }

    if (!configPath) {
      console.warn(`Config file not found for app: ${appType}`);
      return getDefaultConfig(appType);
    }

    // Dynamically import the config
    const configModule = await import(`file://${configPath}`);
    const config = configModule.default || configModule;

    return {
      name: config.name || appType,
      description: config.description || "",
      icon: config.icon || "BsRobot",
      systemPrompt: config.systemPrompt || "",
      welcomeMessage: config.welcomeMessage || `Welcome to ${appType}!`,
      features: config.features || [],
      theme: config.theme || {},
    };
  } catch (error) {
    console.error(`Error loading config for ${appType}:`, error);
    return getDefaultConfig(appType);
  }
}

/**
 * Get default configuration for an app
 * @param {string} appType - The app type
 * @returns {Object} - Default configuration
 */
function getDefaultConfig(appType) {
  const defaults = {
    "study-buddy": {
      name: "StudyBuddy",
      description: "Your AI study companion",
      icon: "FiBookOpen",
      systemPrompt: "You are a helpful study assistant.",
      welcomeMessage: "Welcome to StudyBuddy! How can I help you learn today?",
      features: ["Explanations", "Examples", "Practice"],
      theme: {primary: "#3b82f6"},
    },
    "idea-forge": {
      name: "IdeaForge",
      description: "Your creative brainstorming partner",
      icon: "HiLightBulb",
      systemPrompt: "You are a creative brainstorming assistant.",
      welcomeMessage: "Welcome to IdeaForge! Let's create something amazing!",
      features: ["Brainstorming", "Refinement", "Innovation"],
      theme: {primary: "#8b5cf6"},
    },
  };

  return (
    defaults[appType] || {
      name: appType,
      description: `AI assistant for ${appType}`,
      icon: "BsRobot",
      systemPrompt: "You are a helpful AI assistant.",
      welcomeMessage: `Welcome to ${appType}!`,
      features: [],
      theme: {},
    }
  );
}

/**
 * Check if app has Kiro configuration
 * @param {string} appType - The app type
 * @returns {Promise<boolean>} - True if .kiro directory exists
 */
export async function hasKiroConfig(appType) {
  try {
    const kiroPath = path.join(APPS_DIR, appType, ".kiro");
    await fs.access(kiroPath);
    return true;
  } catch {
    return false;
  }
}

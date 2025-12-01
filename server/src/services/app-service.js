import fs from "fs/promises";
import path from "path";

const APPS_DIR = path.join(process.cwd(), "apps");

/**
 * Get all available apps
 * @returns {Promise<Array>} - List of app configurations
 */
export async function getAllApps() {
  try {
    console.log(`[App Service] Scanning apps directory: ${APPS_DIR}`);
    const appDirs = await fs.readdir(APPS_DIR);
    console.log(`[App Service] Found directories: ${appDirs.join(", ")}`);
    const apps = [];

    for (const appDir of appDirs) {
      const appPath = path.join(APPS_DIR, appDir);
      const stats = await fs.stat(appPath);

      if (stats.isDirectory()) {
        console.log(`[App Service] Loading app: ${appDir}`);
        const config = await getAppConfig(appDir);
        if (config) {
          apps.push({
            id: appDir,
            ...config,
          });
          console.log(`[App Service] ✓ Loaded: ${appDir}`);
        }
      }
    }

    console.log(`[App Service] Total apps loaded: ${apps.length}`);
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
      description: "Your AI study companion that breaks down complex topics",
      icon: "FiBookOpen",
      systemPrompt: "You are StudyBuddy, an expert educational AI tutor.",
      welcomeMessage:
        "Hi! I'm StudyBuddy, your AI study companion. What would you like to learn?",
      features: ["Concept Explanations", "Problem Solving", "Study Strategies"],
      theme: {primary: "#3b82f6", secondary: "#60a5fa", accent: "#93c5fd"},
    },
    "idea-forge": {
      name: "IdeaForge",
      description: "Your creative brainstorming partner for ideas",
      icon: "HiLightBulb",
      systemPrompt:
        "You are IdeaForge, an innovative creative brainstorming AI.",
      welcomeMessage:
        "Welcome to IdeaForge! Let's spark some creative ideas together.",
      features: ["Creative Brainstorming", "Idea Refinement", "Innovation"],
      theme: {primary: "#8b5cf6", secondary: "#a78bfa", accent: "#7c3aed"},
    },
    "code-mentor": {
      name: "CodeMentor",
      description: "Your programming tutor for learning to code",
      icon: "FiCode",
      systemPrompt: "You are CodeMentor, an expert programming tutor.",
      welcomeMessage:
        "Hi! I'm CodeMentor. Whether you're learning your first language or debugging complex code, I'm here to help.",
      features: ["Code Explanations", "Debugging Help", "Best Practices"],
      theme: {primary: "#10b981", secondary: "#34d399", accent: "#6ee7b7"},
    },
    "story-weaver": {
      name: "StoryWeaver",
      description: "Creative writing partner for authors and storytellers",
      icon: "FiFeather",
      systemPrompt:
        "You are StoryWeaver, an imaginative creative writing companion.",
      welcomeMessage:
        "Greetings, storyteller! I'm StoryWeaver. What tale shall we weave together?",
      features: ["Character Development", "Plot Structuring", "Worldbuilding"],
      theme: {primary: "#a855f7", secondary: "#c084fc", accent: "#e879f9"},
    },
    "wellness-coach": {
      name: "WellnessCoach",
      description: "Your personal wellness companion for health and balance",
      icon: "FiHeart",
      systemPrompt:
        "You are WellnessCoach, a compassionate wellness companion.",
      welcomeMessage:
        "Hi there! I'm WellnessCoach. Whether you're looking to manage stress or improve fitness, I'm here to support you.",
      features: [
        "Mental Health Support",
        "Fitness Guidance",
        "Stress Management",
      ],
      theme: {primary: "#ec4899", secondary: "#f472b6", accent: "#fbbf24"},
    },
    "career-navigator": {
      name: "CareerNavigator",
      description:
        "Professional career guidance for job seekers and professionals",
      icon: "FiBriefcase",
      systemPrompt: "You are CareerNavigator, a knowledgeable career advisor.",
      welcomeMessage:
        "Welcome! I'm CareerNavigator. Whether you're starting out or advancing your career, I'm here to help.",
      features: [
        "Career Path Exploration",
        "Resume Optimization",
        "Interview Prep",
      ],
      theme: {primary: "#f59e0b", secondary: "#fbbf24", accent: "#fb923c"},
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
      theme: {primary: "#8b5cf6"},
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

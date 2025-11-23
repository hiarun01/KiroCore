/**
 * Test script for KiroCore Backend API
 * Run with: node server/test-api.js
 */

const API_URL = "http://localhost:3001";

// Colors for terminal output
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testHealthCheck() {
  log("cyan", "\n🏥 Testing Health Check...");
  try {
    const response = await fetch(`${API_URL}/health`);
    const data = await response.json();

    if (response.ok) {
      log("green", "✅ Health check passed");
      console.log("   Response:", data);
      return true;
    } else {
      log("red", "❌ Health check failed");
      return false;
    }
  } catch (error) {
    log("red", "❌ Cannot connect to backend");
    console.log("   Error:", error.message);
    console.log("   Make sure backend is running: npm run dev:backend");
    return false;
  }
}

async function testGetAllApps() {
  log("cyan", "\n📱 Testing Get All Apps...");
  try {
    const response = await fetch(`${API_URL}/api/apps`);
    const data = await response.json();

    if (response.ok && data.success) {
      log("green", "✅ Get all apps passed");
      console.log(
        "   Found apps:",
        data.apps.map((app) => app.name).join(", ")
      );
      return data.apps;
    } else {
      log("red", "❌ Get all apps failed");
      return [];
    }
  } catch (error) {
    log("red", "❌ Error fetching apps");
    console.log("   Error:", error.message);
    return [];
  }
}

async function testGetAppConfig(appType) {
  log("cyan", `\n⚙️  Testing Get App Config: ${appType}...`);
  try {
    const response = await fetch(`${API_URL}/api/apps/${appType}`);
    const data = await response.json();

    if (response.ok && data.success) {
      log("green", `✅ Get ${appType} config passed`);
      console.log("   Config:", {
        name: data.config.name,
        icon: data.config.icon,
        description: data.config.description,
      });
      return data.config;
    } else {
      log("red", `❌ Get ${appType} config failed`);
      return null;
    }
  } catch (error) {
    log("red", `❌ Error fetching ${appType} config`);
    console.log("   Error:", error.message);
    return null;
  }
}

async function testChatMessage(appType, message) {
  log("cyan", `\n💬 Testing Chat: ${appType}...`);
  console.log(`   Message: "${message}"`);

  try {
    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appType,
        message,
        conversationHistory: [],
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      log("green", `✅ Chat with ${appType} passed`);
      console.log("   Response:", data.response.substring(0, 100) + "...");
      console.log("   Source:", data.source);
      return data;
    } else {
      log("red", `❌ Chat with ${appType} failed`);
      console.log("   Error:", data.error);
      return null;
    }
  } catch (error) {
    log("red", `❌ Error sending chat message`);
    console.log("   Error:", error.message);
    return null;
  }
}

async function testChatWithHistory(appType) {
  log("cyan", `\n🔄 Testing Chat with History: ${appType}...`);

  const conversationHistory = [
    {role: "user", content: "Hello!"},
    {role: "assistant", content: "Hi! How can I help you?"},
  ];

  try {
    const response = await fetch(`${API_URL}/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appType,
        message: "Can you remember what we talked about?",
        conversationHistory,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      log("green", `✅ Chat with history passed`);
      console.log("   Response:", data.response.substring(0, 100) + "...");
      return data;
    } else {
      log("red", `❌ Chat with history failed`);
      return null;
    }
  } catch (error) {
    log("red", `❌ Error sending chat with history`);
    console.log("   Error:", error.message);
    return null;
  }
}

async function runAllTests() {
  log("blue", "\n╔════════════════════════════════════════╗");
  log("blue", "║   KiroCore Backend API Test Suite     ║");
  log("blue", "╚════════════════════════════════════════╝");

  // Test 1: Health Check
  const healthOk = await testHealthCheck();
  if (!healthOk) {
    log("red", "\n❌ Backend is not running. Stopping tests.");
    process.exit(1);
  }

  // Test 2: Get All Apps
  const apps = await testGetAllApps();

  // Test 3: Get App Configs
  await testGetAppConfig("study-buddy");
  await testGetAppConfig("idea-forge");

  // Test 4: Chat Messages
  await testChatMessage("study-buddy", "How do I learn JavaScript?");
  await testChatMessage("idea-forge", "I have an idea for a mobile app");

  // Test 5: Chat with History
  await testChatWithHistory("study-buddy");

  // Summary
  log("blue", "\n╔════════════════════════════════════════╗");
  log("blue", "║          Test Suite Complete           ║");
  log("blue", "╚════════════════════════════════════════╝");
  log("green", "\n✅ All tests completed!");
  log("yellow", '\nNote: If you see "source: fallback", it means Kiro CLI');
  log("yellow", "is not being used. This is normal for development.");
}

// Run tests
runAllTests().catch((error) => {
  log("red", "\n❌ Test suite failed");
  console.error(error);
  process.exit(1);
});

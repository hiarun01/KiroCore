import dotenv from "dotenv";
import {fileURLToPath} from "url";
import {dirname, join} from "path";
import express from "express";
import cors from "cors";
import {chatRouter} from "./routes/chat.js";
import {appsRouter} from "./routes/apps.js";
import {kiroRouter} from "./routes/kiro.js";
import {testGeminiAPI} from "./services/gemini-service.js";

// Load environment variables from server/.env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path: join(__dirname, ".env")});

// Debug: Check if API key is loaded
console.log(
  "[Debug] GEMINI_API_KEY loaded:",
  process.env.GEMINI_API_KEY ? "Yes" : "No"
);
console.log("[Debug] API key length:", process.env.GEMINI_API_KEY?.length || 0);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRouter);
app.use("/api/apps", appsRouter);
app.use("/api/kiro", kiroRouter);

// Startup checks
async function startServer() {
  console.log("🔧 KiroCore Backend Starting...\n");

  // Test Google Gemini AI availability
  const geminiAvailable = await testGeminiAPI();

  if (geminiAvailable) {
    console.log("✅ Google Gemini AI is connected");
  } else {
    console.log("⚠️  Gemini API not configured - using fallback responses");
    console.log("   To enable AI: Add GEMINI_API_KEY to server/.env");
    console.log(
      "   Get your key at: https://makersuite.google.com/app/apikey\n"
    );
  }

  app.listen(PORT, () => {
    console.log(`\n🚀 KiroCore backend running on http://localhost:${PORT}`);
    console.log(`📡 Chat API: http://localhost:${PORT}/api/chat\n`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

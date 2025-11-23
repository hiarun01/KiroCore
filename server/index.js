import express from "express";
import cors from "cors";
import {chatRouter} from "./routes/chat.js";
import {appsRouter} from "./routes/apps.js";
import {testKiroCLI} from "./services/kiro-service.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRouter);
app.use("/api/apps", appsRouter);

// Startup checks
async function startServer() {
  console.log("🔧 KiroCore Backend Starting...\n");

  // Test Kiro CLI availability
  const kiroAvailable = await testKiroCLI();

  if (kiroAvailable) {
    console.log("✅ Kiro CLI is available");
  } else {
    console.log("⚠️  Kiro CLI not found - using fallback responses");
    console.log(
      "   To enable Kiro: Install Kiro CLI and ensure it's in PATH\n"
    );
  }

  app.listen(PORT, () => {
    console.log(`\n🚀 KiroCore backend running on http://localhost:${PORT}`);
    console.log(`📚 API Docs: http://localhost:${PORT}/health\n`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});

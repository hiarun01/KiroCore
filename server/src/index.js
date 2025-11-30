import dotenv from "dotenv";
import {fileURLToPath} from "url";
import {dirname, join} from "path";
import express from "express";
import cors from "cors";
import {chatRouter} from "./routes/chat.js";
import {appsRouter} from "./routes/apps.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path: join(__dirname, "../.env")});

const app = express();
const PORT = process.env.PORT || 3001;
const mode = process.env.NODE_ENV || "development";

// CORS configuration
if (mode === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL || "http://localhost:3000",
      credentials: true,
    })
  );
} else if (mode === "production") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );
}

app.use(express.json());
app.use("/api/chat", chatRouter);
app.use("/api/apps", appsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

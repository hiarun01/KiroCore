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

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/chat", chatRouter);
app.use("/api/apps", appsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});

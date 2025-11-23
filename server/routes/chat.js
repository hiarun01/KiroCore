import express from "express";
import {executeKiroAgent} from "../services/kiro-service.js";

const router = express.Router();

// POST /api/chat - Send message to AI agent
router.post("/", async (req, res) => {
  try {
    const {message, appType, conversationHistory = []} = req.body;

    // Validate request
    if (!message || !appType) {
      return res.status(400).json({
        error: "Missing required fields: message and appType",
      });
    }

    console.log(
      `[Chat] Received message for ${appType}:`,
      message.substring(0, 50) + "..."
    );

    // Execute Kiro agent for the specific app
    const response = await executeKiroAgent({
      appType,
      message,
      conversationHistory,
    });

    res.json({
      success: true,
      response: response.content,
      appType,
      source: response.source,
      timestamp: response.timestamp,
    });
  } catch (error) {
    console.error("[Chat] Error:", error);
    res.status(500).json({
      error: "Failed to process message",
      details: error.message,
    });
  }
});

export {router as chatRouter};

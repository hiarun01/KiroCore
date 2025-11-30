import express from "express";
import {getAppConfig, getAllApps} from "../services/app-service.js";

const router = express.Router();

// GET /api/apps - Get all available apps
router.get("/", async (req, res) => {
  try {
    console.log(req.path);
    const apps = await getAllApps();
    res.json({success: true, apps});
  } catch (error) {
    console.error("[Apps] Error fetching apps:", error);
    res.status(500).json({
      error: "Failed to fetch apps",
      details: error.message,
    });
  }
});

// GET /api/apps/:appType - Get specific app config
router.get("/:appType", async (req, res) => {
  try {
    const {appType} = req.params;
    const config = await getAppConfig(appType);

    if (!config) {
      return res.status(404).json({
        error: `App '${appType}' not found`,
      });
    }

    res.json({success: true, config});
  } catch (error) {
    console.error("[Apps] Error fetching app config:", error);
    res.status(500).json({
      error: "Failed to fetch app config",
      details: error.message,
    });
  }
});

export {router as appsRouter};

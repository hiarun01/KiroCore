# KiroCore Backend

Express backend for KiroCore - handles AI agent execution and app configuration management.

## Features

- **Multi-Agent Support**: Different AI agents for each app (StudyBuddy, IdeaForge)
- **Kiro CLI Integration**: Executes Kiro agents with app-specific configurations
- **Dynamic App Loading**: Reads app configs from `/apps` directory
- **RESTful API**: Clean API endpoints for chat and app management

## API Endpoints

### Chat

- `POST /api/chat` - Send message to AI agent
  ```json
  {
    "message": "Hello!",
    "appType": "study-buddy",
    "conversationHistory": []
  }
  ```

### Apps

- `GET /api/apps` - Get all available apps
- `GET /api/apps/:appType` - Get specific app configuration

### Health

- `GET /health` - Health check endpoint

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` file:

   ```bash
   cp .env.example .env
   ```

3. Run backend:
   ```bash
   npm run dev:backend
   ```

Backend runs on `http://localhost:3001`

## Project Structure

```
server/
├── index.js              # Express app entry point
├── routes/
│   ├── chat.js          # Chat endpoints
│   └── apps.js          # App management endpoints
└── services/
    ├── kiro-service.js  # Kiro CLI integration
    └── app-service.js   # App config management
```

## Kiro Integration

The backend integrates with Kiro CLI to execute agents:

1. Reads app-specific `.kiro` configuration
2. Executes Kiro agent with proper context
3. Returns AI response to frontend

Currently using mock responses for MVP. Uncomment `executeKiroCLI()` function in `kiro-service.js` for real Kiro integration.

## Development

- Backend runs on port 3001
- Frontend runs on port 3000
- CORS enabled for local development


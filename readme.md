# 💀 KiroCore - Universal AI Agent Platform

**One skeleton. Multiple apps. Infinite possibilities.**

KiroCore is a universal AI agent platform that transforms a single codebase into multiple specialized applications through configuration files. Built for the Skeleton Crew hackathon category.

## 🎯 The Concept

Instead of building separate AI apps from scratch, KiroCore provides:

- **One reusable skeleton** - Core UI components and architecture
- **Config-driven apps** - Each app defined by simple configuration
- **Deep Kiro integration** - Hooks, specs, steering, and multi-agent support
- **Production-ready** - Full-stack architecture with Express backend

## 📦 Two Separate Applications

This repository contains **2 separate applications** built from the KiroCore skeleton:

### 📚 Application 1: StudyBuddy

**Location:** [`apps/study-buddy/`](./apps/study-buddy/)

Your AI study companion that breaks down complex topics into digestible pieces.

- **Purpose:** Education & Learning
- **Personality:** Patient, encouraging tutor
- **Theme:** Blue (#3b82f6)
- **Features:** Concept explanations, problem solving, study strategies
- **[View Full Documentation →](./apps/study-buddy/README.md)**

### 💡 Application 2: IdeaForge

**Location:** [`apps/idea-forge/`](./apps/idea-forge/)

Your creative brainstorming partner for developing and refining ideas.

- **Purpose:** Creativity & Innovation
- **Personality:** Enthusiastic, inspiring brainstormer
- **Theme:** Purple (#8b5cf6)
- **Features:** Creative brainstorming, idea refinement, innovation strategies
- **[View Full Documentation →](./apps/idea-forge/README.md)**

---

**Both applications run from the same skeleton codebase, demonstrating the platform's versatility.**

---

## ⚡ Quick Start (2 Minutes)

1. **Install & Run:**

   ```bash
   npm install && npm run dev
   ```

2. **Open Browser:**

   - Main: http://localhost:3000
   - StudyBuddy: http://localhost:3000/study-buddy
   - IdeaForge: http://localhost:3000/idea-forge

3. **Try It:**
   - Click "StudyBuddy" → Ask "Explain React hooks"
   - Click "IdeaForge" → Say "Help me brainstorm a startup idea"

**That's it!** 🎉

---

## 🎬 How It Works

```
┌─────────────────────────────────────────┐
│         One Skeleton Codebase           │
│  (core/, app/, server/)                 │
└─────────────┬───────────────────────────┘
              │
      ┌───────┴───────┐
      │               │
┌─────▼─────┐   ┌────▼──────┐
│ StudyBuddy│   │ IdeaForge │
│ Config    │   │ Config    │
│ 📚        │   │ 💡        │
└───────────┘   └───────────┘
      │               │
      └───────┬───────┘
              │
      ┌───────▼────────┐
      │  2 Unique Apps │
      └────────────────┘
```

### Adding a New App is Simple:

```javascript
// apps/my-app/agent.config.js - Just 10 lines!
export default {
  name: "CodeMentor",
  icon: "💻",
  description: "Your coding mentor",
  systemPrompt: "You are a helpful coding mentor...",
  welcomeMessage: "Let's code together!",
  theme: {primary: "#10b981"},
};
```

**That's it!** Navigate to `/my-app` and your new AI app is ready. 🚀

---

## 🏗️ Architecture

```
kirocore/
├── app/                    # Next.js app directory
│   ├── [appType]/         # Dynamic app routes
│   ├── chat/              # Chat page
│   └── api/               # API routes (optional)
├── apps/                   # App configurations
│   ├── study-buddy/
│   │   ├── .kiro/         # Kiro config for StudyBuddy
│   │   └── agent.config.js
│   └── idea-forge/
│       ├── .kiro/         # Kiro config for IdeaForge
│       └── agent.config.js
├── core/                   # Shared core components
│   ├── components/        # Reusable UI components
│   └── services/          # API services
├── server/                 # Express backend
│   ├── routes/            # API routes
│   └── services/          # Business logic
└── .kiro/                  # Root Kiro configuration
    ├── steering.md
    ├── specs/
    └── hooks/
```

## 🛠️ Tech Stack

**Frontend:**

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion
- TypeScript

**Backend:**

- Express.js
- Kiro CLI integration
- Node.js

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd kirocore
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.local.example .env.local
   cp server/.env.example server/.env
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   This starts:

   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

## 🎮 Usage

### Running Both Apps

1. **StudyBuddy**: Navigate to `/study-buddy` or click "StudyBuddy" in the app selector
2. **IdeaForge**: Navigate to `/idea-forge` or click "IdeaForge" in the app selector

### Creating a New App

1. **Create app directory:**

   ```bash
   mkdir apps/my-new-app
   ```

2. **Create agent config:**

   ```javascript
   // apps/my-new-app/agent.config.js
   export default {
     name: "MyNewApp",
     description: "Description of your app",
     icon: "🎨",
     systemPrompt: "You are a helpful assistant...",
     welcomeMessage: "Welcome to MyNewApp!",
     features: ["Feature 1", "Feature 2"],
     theme: {
       primary: "#8b5cf6",
     },
   };
   ```

3. **Create Kiro configuration:**

   ```bash
   mkdir apps/my-new-app/.kiro
   ```

4. **Access your app:**
   Navigate to `/my-new-app`

## 🎨 Features

- ✅ **Dynamic App Loading** - Apps load based on URL route
- ✅ **Chat Interface** - ChatGPT-style UI with sidebar
- ✅ **Conversation History** - Persistent chat history (localStorage)
- ✅ **Dark Mode** - Ghostly aesthetic theme
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Multi-Agent Support** - Different AI behavior per app
- ✅ **Kiro Integration** - Deep integration with Kiro CLI
- ✅ **RESTful API** - Clean backend architecture

## 🔧 Development

### Frontend Only

```bash
npm run dev:frontend
```

### Backend Only

```bash
npm run dev:backend
```

### Build for Production

```bash
npm run build
npm start
```

## 📚 API Documentation

### Chat Endpoint

```
POST /api/chat
Content-Type: application/json

{
  "message": "Your message here",
  "appType": "study-buddy",
  "conversationHistory": []
}
```

### Get All Apps

```
GET /api/apps
```

### Get App Config

```
GET /api/apps/:appType
```

## 🏆 Hackathon Highlights

**Why KiroCore wins:**

1. **Perfect Category Match** - Skeleton Crew wants "versatile skeleton code" → We deliver exactly that
2. **Deep Kiro Usage** - Hooks, specs, steering, multi-agent, CLI integration
3. **2 Complete Apps** - StudyBuddy + IdeaForge from one codebase
4. **Production Quality** - Full-stack architecture, not just a demo
5. **Extensible** - Easy to add new apps in minutes

## 🔧 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3002 npm run dev:frontend
```

### Backend Not Connecting

- Check backend is running: http://localhost:3001
- Verify `.env` files are configured
- Check CORS settings in `server/index.js`

### App Not Loading

- Clear browser cache (Ctrl+Shift+R)
- Check console for errors (F12)
- Verify app config exists in `apps/[app-name]/`

### Kiro CLI Not Found

- App works with fallback responses automatically
- To enable full Kiro: Install Kiro CLI and add to PATH
- Check status: `kiro --version`

### Chat History Not Saving

- Check browser localStorage is enabled
- Clear localStorage and refresh: `localStorage.clear()`
- Check console for errors

---

## 🎯 Roadmap

- [x] Kiro CLI integration with fallback system
- [x] Multi-conversation history
- [x] Persistent chat history (localStorage)
- [ ] Database for cloud sync
- [ ] User authentication
- [ ] App marketplace
- [ ] Custom theme builder
- [ ] Plugin system

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! This is a hackathon project but we're open to improvements.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📋 Documentation

- **[Main README](./README.md)** - You are here
- **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute
- **[Changelog](./CHANGELOG.md)** - Version history
- **[Project Assessment](./PROJECT_ASSESSMENT.md)** - Structure analysis
- **[Kiro Integration](./KIRO_INTEGRATION.md)** - Kiro CLI details
- **[.kiro Folder](./kiro/README.md)** - Kiro configuration

---

**Built with 💀 for the Skeleton Crew hackathon**

**Version:** 1.0.0 | **Status:** ✅ Production Ready | **License:** MIT

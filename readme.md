# 💀 KiroCore - Universal AI Agent Platform

**One skeleton. Multiple apps. Infinite possibilities.**

KiroCore is a universal AI agent platform that transforms a single codebase into multiple specialized applications through configuration files. Powered by Google Gemini AI.

## 🎯 The Concept

Instead of building separate AI apps from scratch, KiroCore provides:

- **One reusable skeleton** - Core UI components and architecture
- **Config-driven apps** - Each app defined by simple configuration
- **Real AI responses** - Powered by Google Gemini AI
- **Production-ready** - Full-stack architecture with Express backend

## 📦 Two Demo Applications (+ 4 More!)

**For Hackathon Demo:** This repository showcases **2 primary applications** as required, but demonstrates the platform's scalability by including **4 additional apps** built from the same skeleton codebase.

### 🎯 Primary Demo Apps

### 📚 StudyBuddy

**Location:** [`apps/study-buddy/`](./apps/study-buddy/)

Your AI study companion that breaks down complex topics into digestible pieces.

- **Purpose:** Education & Learning
- **Personality:** Patient, encouraging tutor
- **Theme:** Blue (#3b82f6)
- **Features:** Concept explanations, problem solving, study strategies

### 💡 IdeaForge

**Location:** [`apps/idea-forge/`](./apps/idea-forge/)

Your creative brainstorming partner for developing and refining ideas.

- **Purpose:** Creativity & Innovation
- **Personality:** Enthusiastic, inspiring brainstormer
- **Theme:** Purple (#8b5cf6)
- **Features:** Creative brainstorming, idea refinement, innovation strategies

---

### 🚀 Additional Apps (Demonstrating Scalability)

The following 4 apps prove how easily the skeleton scales to support diverse use cases:

### 💻 CodeMentor

**Location:** [`apps/code-mentor/`](./apps/code-mentor/)

Your programming tutor for learning to code and debugging.

- **Purpose:** Programming Education
- **Personality:** Patient, knowledgeable coding mentor
- **Theme:** Green (#10b981)
- **Features:** Code explanations, debugging help, best practices

### ✍️ StoryWeaver

**Location:** [`apps/story-weaver/`](./apps/story-weaver/)

Your creative writing companion for crafting compelling stories.

- **Purpose:** Creative Writing
- **Personality:** Imaginative, supportive storyteller
- **Theme:** Purple (#a855f7)
- **Features:** Character development, plot structuring, worldbuilding

### 💖 WellnessCoach

**Location:** [`apps/wellness-coach/`](./apps/wellness-coach/)

Your personal wellness companion for mental health and balanced living.

- **Purpose:** Health & Wellness
- **Personality:** Warm, empathetic supporter
- **Theme:** Pink (#ec4899)
- **Features:** Mental health support, fitness guidance, stress management

### 💼 CareerNavigator

**Location:** [`apps/career-navigator/`](./apps/career-navigator/)

Your professional career advisor for job seeking and career growth.

- **Purpose:** Career Development
- **Personality:** Strategic, professional advisor
- **Theme:** Amber (#f59e0b)
- **Features:** Career path exploration, resume optimization, interview prep

---

**Key Point:** While the hackathon requires 2 demo apps (StudyBuddy & IdeaForge), we've built 6 total applications from the same skeleton to prove the platform's versatility and scalability. All apps share the same core codebase with only configuration differences.

---

## ⚡ Quick Start (3 Minutes)

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Set Up Google Gemini AI:**

   - Get free API key: https://makersuite.google.com/app/apikey
   - Add to `server/.env`:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

3. **Run the App:**

   ```bash
   npm run dev
   ```

4. **Open Browser:**

   - Main: http://localhost:3000
   - StudyBuddy: http://localhost:3000/study-buddy
   - IdeaForge: http://localhost:3000/idea-forge
   - CodeMentor: http://localhost:3000/code-mentor
   - StoryWeaver: http://localhost:3000/story-weaver
   - WellnessCoach: http://localhost:3000/wellness-coach
   - CareerNavigator: http://localhost:3000/career-navigator

5. **Try It:**
   - StudyBuddy → "Explain React hooks"
   - IdeaForge → "Help me brainstorm a startup idea"
   - CodeMentor → "How do I fix this bug?"
   - StoryWeaver → "Help me develop a fantasy character"
   - WellnessCoach → "Tips for managing work stress"
   - CareerNavigator → "Review my resume"

**That's it!** 🎉

---

## 🎬 How It Works

```
┌──────────────────────────────────────────────────┐
│           One Skeleton Codebase                  │
│        (core/, app/, server/)                    │
└────────────────┬─────────────────────────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
┌───▼───────┐         ┌───────▼───┐
│ StudyBuddy│         │ IdeaForge │
│    📚     │         │    💡     │
│  (Demo 1) │         │  (Demo 2) │
└───────────┘         └───────────┘

    + 4 Additional Apps (Scalability Proof)

┌───────┐   ┌───────┐   ┌───────┐   ┌───────┐
│ Code  │   │Story  │   │ Well  │   │Career │
│Mentor │   │Weaver │   │Coach  │   │  Nav  │
│  💻   │   │  ✍️    │   │  💖   │   │  💼   │
└───────┘   └───────┘   └───────┘   └───────┘

         ┌───────────────────────┐
         │  2 Demo + 4 Bonus     │
         │  = 6 Total Apps       │
         └───────────────────────┘
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
- Google Gemini AI
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

4. **Add your Gemini API key to `server/.env`:**

   ```
   GEMINI_API_KEY=your_api_key_here
   ```

   Get your free API key at: https://makersuite.google.com/app/apikey

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   This starts:

   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

## 🎮 Usage

### Running the Apps

Navigate to any app by URL or click from the app browser:

1. **StudyBuddy**: `/study-buddy` - Education & learning
2. **IdeaForge**: `/idea-forge` - Creative brainstorming
3. **CodeMentor**: `/code-mentor` - Programming help
4. **StoryWeaver**: `/story-weaver` - Creative writing
5. **WellnessCoach**: `/wellness-coach` - Health & wellness
6. **CareerNavigator**: `/career-navigator` - Career guidance

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

### Core Platform

- ✅ **Dynamic App Loading** - Apps load based on URL route
- ✅ **Config-Driven Architecture** - Add new apps with simple config files
- ✅ **6 Specialized Apps** - Education, creativity, coding, writing, wellness, career
- ✅ **Real AI Responses** - Powered by Google Gemini 2.5 Flash
- ✅ **Unique Personalities** - Each app has distinct AI behavior and tone

### User Experience

- ✅ **ChatGPT-Style Interface** - Familiar, intuitive chat UI
- ✅ **Conversation History** - Persistent chat history with localStorage
- ✅ **Markdown Rendering** - Rich text with code syntax highlighting
- ✅ **Copy Code Blocks** - One-click code copying
- ✅ **Toast Notifications** - User feedback for actions
- ✅ **Keyboard Shortcuts** - Power user features (Ctrl+N, Ctrl+B, etc.)
- ✅ **Typing Indicator** - Visual feedback during AI responses
- ✅ **PDF Export** - Save conversations as PDF

### Design & Performance

- ✅ **Dark Mode** - Ghostly aesthetic theme
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Smooth Animations** - Framer Motion transitions
- ✅ **Performance Optimized** - React hooks, memoization
- ✅ **Professional Icons** - React Icons library

### Technical

- ✅ **RESTful API** - Clean Express backend
- ✅ **TypeScript** - Type-safe codebase
- ✅ **Full-Stack** - Next.js frontend + Express backend
- ✅ **Extensible** - Easy to add features and apps

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

## 🏆 Project Highlights

**Why KiroCore stands out:**

1. **Versatile Skeleton** - One codebase powers multiple specialized apps
2. **Real AI Integration** - Google Gemini AI provides intelligent responses
3. **6 Complete Apps** - Education, creativity, coding, writing, wellness, career
4. **Production Quality** - Full-stack architecture, not just a demo
5. **Extensible** - Easy to add new apps in minutes
6. **Modern Stack** - Next.js 16, React 19, TypeScript, Tailwind CSS 4
7. **Config-Driven** - Each app is just a simple configuration file
8. **Scalable Architecture** - Proven to scale from 2 to 6 apps effortlessly

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

### Gemini AI Not Working

- Check API key is set in `server/.env`
- Verify API key is valid at https://makersuite.google.com/app/apikey
- Check backend console for error messages
- App will show fallback responses if API key is missing

### Chat History Not Saving

- Check browser localStorage is enabled
- Clear localStorage and refresh: `localStorage.clear()`
- Check console for errors

---

## 🎯 Roadmap

- [x] Google Gemini AI integration
- [x] Multi-conversation history
- [x] Persistent chat history (localStorage)
- [x] React Icons system
- [ ] Streaming AI responses
- [ ] Image upload & analysis
- [ ] Voice input/output
- [ ] Database for cloud sync
- [ ] User authentication
- [ ] Export conversations
- [ ] Code syntax highlighting
- [ ] Custom theme builder

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! This is a hackathon project but we're open to improvements.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📋 Documentation

- **[Main README](./README.md)** - You are here
- **[Gemini Setup Guide](./server/GEMINI_SETUP.md)** - AI configuration
- **[StudyBuddy Docs](./apps/study-buddy/README.md)** - Education app
- **[IdeaForge Docs](./apps/idea-forge/README.md)** - Creative app
- **[Changelog](./CHANGELOG.md)** - Version history

---

**Built with 💀 using Google Gemini AI**

**Version:** 1.0.0 | **Status:** ✅ Production Ready | **License:** MIT

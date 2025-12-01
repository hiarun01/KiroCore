# KiroCore - Skeleton Crew Hackathon Submission

## 🎯 Hackathon Challenge

**Challenge:** Build applications using a "skeleton" codebase that can be reused and adapted.

**Our Solution:** KiroCore - A universal AI agent platform where one skeleton codebase powers multiple specialized AI applications through simple configuration files.

## 📋 Submission Overview

### What We Built

**KiroCore** is a config-driven platform that demonstrates how a single, well-architected codebase can spawn multiple specialized applications without code duplication.

### The Two Required Demo Apps

As per hackathon requirements, we present **2 primary applications**:

#### 1. 📚 StudyBuddy

- **Purpose:** AI-powered education and learning companion
- **Route:** `/study-buddy`
- **Unique Features:**
  - Patient, encouraging teaching personality
  - Breaks down complex topics into digestible explanations
  - Provides study strategies and problem-solving guidance
- **Theme:** Blue (#3b82f6)

#### 2. 💡 IdeaForge

- **Purpose:** Creative brainstorming and innovation partner
- **Route:** `/idea-forge`
- **Unique Features:**
  - Enthusiastic, inspiring personality
  - Helps develop and refine creative ideas
  - Provides innovation strategies and creative prompts
- **Theme:** Purple (#8b5cf6)

### Bonus: Scalability Demonstration

To prove the skeleton's versatility, we built **4 additional apps** from the same codebase:

- 💻 **CodeMentor** - Programming education
- ✍️ **StoryWeaver** - Creative writing
- 💖 **WellnessCoach** - Health and wellness
- 💼 **CareerNavigator** - Career guidance

**All 6 apps share the same core code** - only configuration differs!

## 🏆 Why This Matters

### The Problem

Building multiple AI applications typically means:

- Duplicating code across projects
- Maintaining separate codebases
- Rebuilding common features repeatedly
- Inconsistent user experiences

### Our Solution

KiroCore solves this with:

- **One skeleton codebase** that powers all apps
- **Config-driven architecture** - new apps in minutes
- **Consistent UX** across all applications
- **Easy maintenance** - fix once, fix everywhere

### The Impact

- **6 apps from 1 codebase** - 600% efficiency gain
- **Add new app in <5 minutes** - just create a config file
- **Production-ready** - full-stack with real AI integration
- **Scalable** - proven from 2 to 6 apps effortlessly

## 🚀 Quick Start for Judges

### Prerequisites

- Node.js 18+ installed
- Google Gemini API key (free at https://makersuite.google.com/app/apikey)

### Setup (3 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp server/.env.example server/.env

# 3. Add your Gemini API key to server/.env
# GEMINI_API_KEY=your_key_here

# 4. Run the app
npm run dev
```

### Testing the Apps

1. **Open browser:** http://localhost:3000
2. **Try StudyBuddy:** Click "StudyBuddy" or go to `/study-buddy`
   - Ask: "Explain quantum computing in simple terms"
3. **Try IdeaForge:** Click "IdeaForge" or go to `/idea-forge`
   - Ask: "Help me brainstorm a sustainable fashion startup"
4. **Browse all apps:** Click "Browse Apps" or go to `/apps`

### Key Features to Test

✅ **Different AI Personalities** - Each app has unique behavior  
✅ **Markdown Rendering** - Ask for code examples  
✅ **Copy Code Blocks** - Hover over code to copy  
✅ **Conversation History** - Refresh page, history persists  
✅ **Toast Notifications** - Clear chat, copy code  
✅ **Keyboard Shortcuts** - Press `Ctrl+/` for shortcuts  
✅ **PDF Export** - Export conversations as PDF  
✅ **Responsive Design** - Try on mobile

## 🎨 Technical Highlights

### Architecture Excellence

```
One Skeleton → Config Files → Multiple Apps
```

**Core Innovation:** Apps are defined by configuration, not code.

```typescript
// Adding a new app is THIS simple:
export default {
  name: "MyApp",
  icon: "FiIcon",
  systemPrompt: "You are a helpful assistant...",
  theme: {primary: "#color"},
};
```

### Tech Stack

**Frontend:**

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

**Backend:**

- Express.js 5
- Google Gemini 2.5 Flash
- Node.js (ES Modules)

**Features:**

- Real AI responses (not mocked)
- Markdown rendering with syntax highlighting
- Persistent conversation history
- Toast notifications
- Keyboard shortcuts
- PDF export
- Dark mode

### Code Quality

- ✅ **TypeScript** - Full type safety
- ✅ **ESLint** - Code quality enforcement
- ✅ **Component Architecture** - Reusable, composable
- ✅ **Custom Hooks** - Clean separation of concerns
- ✅ **Service Layer** - API abstraction
- ✅ **Performance Optimized** - useCallback, memoization

## 📊 Metrics

| Metric              | Value  | Impact                   |
| ------------------- | ------ | ------------------------ |
| **Apps Built**      | 6      | Demonstrates scalability |
| **Shared Code**     | ~95%   | Minimal duplication      |
| **Time to Add App** | <5 min | Config-only approach     |
| **Lines of Config** | ~40    | Simple app definition    |
| **Core Components** | 20+    | Highly reusable          |
| **API Endpoints**   | 3      | Clean backend            |

## 🎯 Hackathon Criteria Alignment

### ✅ Skeleton Reusability

- **One codebase powers 6 apps** - ultimate reusability
- **Config-driven** - no code changes needed for new apps
- **Proven scalability** - grew from 2 to 6 apps seamlessly

### ✅ Innovation

- **Config-driven AI apps** - novel approach to multi-app platforms
- **Dynamic app discovery** - apps auto-register from file system
- **Personality system** - each app has unique AI behavior

### ✅ Technical Excellence

- **Production-ready** - full-stack architecture
- **Real AI integration** - Google Gemini 2.5 Flash
- **Modern stack** - Next.js 16, React 19, TypeScript
- **Advanced features** - markdown, shortcuts, PDF export

### ✅ User Experience

- **Intuitive interface** - ChatGPT-style familiar UX
- **Smooth animations** - Framer Motion throughout
- **Responsive design** - works on all devices
- **Accessibility** - keyboard shortcuts, semantic HTML

### ✅ Documentation

- **Comprehensive README** - clear setup instructions
- **Architecture docs** - detailed technical documentation
- **Code comments** - well-documented codebase
- **This file** - hackathon-specific guide

## 🎥 Demo Flow (Recommended)

### 1. Show the Concept (30 seconds)

- Open landing page
- Explain: "One skeleton, multiple apps"
- Show app browser with 6 apps

### 2. Demo App 1: StudyBuddy (2 minutes)

- Navigate to `/study-buddy`
- Ask: "Explain React hooks with examples"
- Show markdown rendering
- Copy code block
- Show conversation history persists

### 3. Demo App 2: IdeaForge (2 minutes)

- Navigate to `/idea-forge`
- Ask: "Help me brainstorm a mobile app idea"
- Show different AI personality
- Demonstrate keyboard shortcuts (Ctrl+N for new chat)
- Export conversation as PDF

### 4. Show Scalability (1 minute)

- Browse to `/apps` page
- Show all 6 apps
- Explain: "All from the same codebase"
- Open one bonus app (CodeMentor or StoryWeaver)

### 5. Show the Magic (1 minute)

- Open `apps/study-buddy/agent.config.ts`
- Show how simple the config is
- Explain: "This is all it takes to create an app"

## 🔍 What Makes This Special

### For Judges to Notice

1. **True Skeleton Architecture**

   - Not just shared components
   - Entire app logic is reusable
   - Only config changes between apps

2. **Real AI Integration**

   - Not mocked responses
   - Actual Google Gemini API calls
   - Unique personalities per app

3. **Production Quality**

   - Full-stack implementation
   - Error handling
   - Performance optimization
   - Professional UI/UX

4. **Scalability Proof**

   - Started with 2 apps (requirement)
   - Scaled to 6 apps (demonstration)
   - Could easily add 10 more

5. **Developer Experience**
   - Simple config format
   - Clear documentation
   - Easy to understand and extend

## 📁 Key Files to Review

### Configuration Examples

- `apps/study-buddy/agent.config.ts` - Demo app 1 config
- `apps/idea-forge/agent.config.ts` - Demo app 2 config
- `apps/code-mentor/agent.config.ts` - Bonus app config

### Core Architecture

- `core/hooks/useKiroAgent.tsx` - Main AI interaction hook
- `core/components/chat/ChatArea.tsx` - Chat interface
- `server/src/services/gemini-service.js` - AI integration
- `server/src/services/app-service.js` - App discovery

### Documentation

- `README.md` - Main documentation
- `ARCHITECTURE.md` - Technical deep dive
- `.kiro/README.md` - Kiro integration details

## 🐛 Troubleshooting

### If apps don't load:

```bash
# Check backend is running
curl http://localhost:3001/api/apps

# Restart if needed
npm run dev
```

### If AI doesn't respond:

- Check `server/.env` has valid `GEMINI_API_KEY`
- Check backend console for errors
- App will show fallback message if API key missing

### If build fails:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🙏 Acknowledgments

- **Google Gemini AI** - Powering the intelligence
- **Skeleton Crew Hackathon** - For the inspiring challenge
- **Kiro IDE** - Deep integration and tooling

---

## ⚡ TL;DR for Busy Judges

**What:** One skeleton codebase → 6 AI apps (2 required + 4 bonus)  
**How:** Config-driven architecture with Google Gemini AI  
**Why:** Proves extreme reusability and scalability  
**Setup:** 3 minutes (`npm install` → add API key → `npm run dev`)  
**Demo:** Try StudyBuddy & IdeaForge at http://localhost:3000

**The Magic:** Adding a new app takes <5 minutes and ~40 lines of config. No core code changes needed. That's the power of a true skeleton architecture.

---

**Built with 💀 for Skeleton Crew Hackathon**

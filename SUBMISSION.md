# KiroCore - Skeleton Crew Hackathon Submission

## Inspiration

We noticed a pattern in AI development: teams keep rebuilding the same chat interfaces, conversation management, and UI components for every new AI application. It's like building a new skeleton for every project. We thought, "What if we could create one solid skeleton that adapts to any AI personality?"

The idea came from watching developers spend weeks building infrastructure instead of focusing on what makes their AI unique. KiroCore was born from the belief that you shouldn't need to reinvent the wheel every time you want to create a specialized AI assistant.

## What it does

KiroCore is a universal AI agent platform that transforms one codebase into multiple specialized applications through simple configuration files. Think of it as a skeleton that can wear different costumes.

**Current Applications:**

- **StudyBuddy** - Patient AI tutor for learning and education
- **IdeaForge** - Creative brainstorming partner for innovation
- **CodeMentor** - Programming tutor for developers
- **StoryWeaver** - Creative writing companion
- **WellnessCoach** - Personal wellness and mental health supporter
- **CareerNavigator** - Professional career advisor

Each app has its own personality, theme, and behavior, but they all share the same robust core. Users get a ChatGPT-style interface with conversation history, markdown rendering, code syntax highlighting, PDF export, and dark mode.

**Key Features:**

- Dynamic app loading based on URL routes
- Conversation management with persistent history
- Real-time typing indicators
- Keyboard shortcuts for power users
- Toast notifications for feedback
- Mobile-responsive design
- Smooth animations and polished UI

## How we built it

**Tech Stack:**

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Backend:** Express.js 5, Node.js with ES modules
- **AI:** Google Gemini 2.5 Flash with streaming support
- **Animations:** Framer Motion for smooth transitions
- **Styling:** Tailwind CSS with custom dark theme

**Architecture:**
We built KiroCore with a config-driven architecture that separates concerns into three distinct layers:

**Project Structure:**

```
kirocore/
├── app/                      # Next.js App Router
│   ├── [appType]/           # Dynamic routes for each app
│   │   └── page.tsx         # App-specific page
│   ├── apps/                # App browser page
│   ├── chat/                # Chat page
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Landing page
│
├── apps/                     # App configurations (6 apps)
│   ├── study-buddy/
│   │   ├── agent.config.ts  # App configuration
│   │   └── README.md
│   ├── idea-forge/
│   ├── code-mentor/
│   ├── story-weaver/
│   ├── wellness-coach/
│   └── career-navigator/
│
├── core/                     # Shared core components
│   ├── components/
│   │   ├── chat/            # Chat UI components
│   │   │   ├── ChatArea.tsx
│   │   │   ├── MessageList.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── EmptyState.tsx
│   │   ├── layout/          # Layout components
│   │   │   └── Header.tsx
│   │   ├── sections/        # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   └── About.tsx
│   │   └── ui/              # UI primitives
│   │       ├── Toaster.tsx
│   │       └── TypingIndicator.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useKiroAgent.tsx
│   │   └── useKeyboardShortcuts.tsx
│   ├── services/            # API services
│   │   ├── api.ts
│   │   ├── chatHistory.ts
│   │   └── conversationHistory.ts
│   ├── lib/                 # Utility functions
│   │   ├── animations.ts
│   │   └── icons/
│   └── types/               # TypeScript types
│
├── server/                   # Express backend
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   │   ├── chat.js
│   │   │   └── apps.js
│   │   ├── services/        # Business logic
│   │   │   ├── gemini-service.js
│   │   │   └── app-service.js
│   │   └── index.js         # Server entry point
│   └── .env.example
│
└── public/                   # Static assets
```

**1. Core Layer (The Skeleton)**
This is the reusable foundation that powers all apps:

- **Components:** Shared UI components in `core/components/` including ChatArea, MessageList, Sidebar, and EmptyState
- **Hooks:** Custom React hooks like `useKiroAgent` (handles AI communication) and `useKeyboardShortcuts` (manages keyboard interactions)
- **Services:** API communication (`api.ts`), conversation persistence (`chatHistory.ts`), and history management (`conversationHistory.ts`)
- **Types:** TypeScript definitions ensuring type safety across the entire platform

**2. App Layer (The Personalities)**
Each app lives in `apps/[app-name]/` with its own configuration:

```javascript
// apps/study-buddy/agent.config.ts
{
  name: "StudyBuddy",
  description: "Your AI tutor for learning",
  icon: "BookOpen",
  systemPrompt: "You are a patient AI tutor...",
  welcomeMessage: "Hi! I'm StudyBuddy...",
  theme: {
    primary: "#3b82f6",
    secondary: "#1e40af",
    accent: "#60a5fa"
  },
  features: ["explanations", "problem-solving", "study-strategies"]
}
```

Each app is completely self-contained with just a config file and optional documentation.

**3. Backend Layer (The Brain)**
Express.js server in `server/` handles:

- **Gemini Service:** Manages AI communication with Google Gemini 2.5 Flash, including streaming responses and conversation context
- **App Service:** Dynamically loads and validates app configurations
- **Routes:** RESTful API endpoints for chat (`/api/chat`) and app management (`/api/apps`)
- **CORS Configuration:** Enables local development with frontend on port 3000 and backend on 3001

**How It All Works Together:**

1. **User visits `/study-buddy`** → Next.js dynamic route `[appType]` catches it
2. **Frontend requests config** → Calls `/api/apps/study-buddy`
3. **Backend loads config** → Reads `apps/study-buddy/agent.config.ts`
4. **Theme applied** → CSS variables injected dynamically based on config
5. **User sends message** → `useKiroAgent` hook sends to `/api/chat`
6. **AI responds** → Gemini service processes with app's system prompt
7. **Conversation saved** → localStorage persists history with conversation ID

**Key Design Decisions:**

- **Path Aliases:** `@/` maps to root, making imports clean (`@/core/components/chat/ChatArea`)
- **ES Modules:** Backend uses modern ES modules with `.js` extensions
- **Type Safety:** Strict TypeScript mode catches errors at compile time
- **State Management:** React hooks with localStorage for persistence, no external state library needed
- **Component Composition:** Small, focused components that compose into larger features
- **API Design:** RESTful endpoints with clear separation between chat and app management

**Development Process:**

1. Built the core chat infrastructure with React hooks
2. Created reusable UI components (ChatArea, MessageList, Sidebar)
3. Implemented Express backend with Gemini AI integration
4. Designed the config system for app definitions
5. Added conversation persistence with localStorage
6. Polished UX with animations, shortcuts, and notifications

## Challenges we ran into

**1. Dynamic App Loading**
Making Next.js dynamically load app configurations without hardcoding routes was tricky. We solved it using dynamic routes `[appType]` and a centralized app registry that validates and loads configs on demand.

**2. Conversation History Management**
Balancing between localStorage limits and conversation persistence required careful state management. We implemented a hybrid approach: recent conversations in memory, older ones in localStorage with compression.

**3. AI Response Streaming**
Getting smooth, real-time streaming from Gemini while maintaining conversation context was complex. We built a custom service layer that handles chunked responses and maintains conversation history.

**4. Theme Switching**
Applying different themes dynamically without page reloads required careful CSS variable management. We use Tailwind's CSS variables with JavaScript to inject theme colors on route changes.

**5. Type Safety Across Apps**
Maintaining TypeScript type safety while allowing flexible app configurations required creating robust type definitions that balance strictness with extensibility.

## Accomplishments that we're proud of

**1. True Reusability**
We can add a new AI application in under 5 minutes by creating a single config file. No code changes needed. That's the power of good architecture.

**2. Six Working Applications**
We didn't just build a proof of concept. We created six fully functional, production-ready AI applications, each with unique personalities and use cases.

**3. Performance Optimization**
The app is fast. We used React.memo, useCallback, and proper state management to ensure smooth interactions even with long conversations.

**4. Developer Experience**
The codebase is clean, well-documented, and easy to extend. Adding a new app takes just minutes with our config-driven approach.

**5. User Experience**
From typing indicators to keyboard shortcuts to PDF export, we sweated the details. The interface feels polished and professional.

**6. Full-Stack Implementation**
We built both frontend and backend from scratch, with proper separation of concerns, error handling, and API design.

## What we learned

**Technical Lessons:**

- Config-driven architecture is powerful but requires careful planning
- React 19's new features (useCallback improvements) make optimization easier
- Next.js App Router is great for dynamic routing but has a learning curve
- Streaming AI responses requires thoughtful state management
- TypeScript strict mode catches bugs early but requires discipline

**Design Lessons:**

- Consistency across apps is crucial for user trust
- Dark mode isn't just aesthetics—it's expected
- Keyboard shortcuts make power users happy
- Loading states and feedback are as important as the main features

**Product Lessons:**

- One good skeleton is better than many mediocre implementations
- Reusability requires upfront investment but pays off quickly
- Documentation and examples are critical for adoption
- The best architecture is invisible to end users

## What's next for KiroCore

**Short Term:**

- **More Apps:** Add 10+ specialized agents (FinanceAdvisor, LanguageTutor, DebatePartner)
- **Voice Integration:** Add speech-to-text and text-to-speech for accessibility
- **Multi-modal Support:** Enable image uploads and analysis with Gemini Vision
- **Collaboration:** Allow users to share conversations and collaborate in real-time

**Medium Term:**

- **Plugin System:** Let developers create and share custom apps through a marketplace
- **Advanced Memory:** Implement long-term memory across conversations
- **Custom Models:** Support for multiple AI providers (OpenAI, Anthropic, local models)
- **Analytics Dashboard:** Track usage patterns and conversation insights

**Long Term:**

- **White Label Solution:** Let companies deploy their own branded AI assistants
- **Enterprise Features:** Team workspaces, admin controls, usage analytics
- **Mobile Apps:** Native iOS and Android applications
- **API Platform:** Let developers integrate KiroCore into their own applications

**Vision:**
We want KiroCore to become the go-to platform for building specialized AI applications. Instead of every team building their own chat interface, they can use KiroCore and focus on what makes their AI unique. Think WordPress for AI agents.

---

**Built with ❤️ for the Skeleton Crew Hackathon**

_One skeleton, infinite possibilities._

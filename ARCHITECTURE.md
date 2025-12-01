# KiroCore Architecture

Comprehensive technical architecture documentation for the KiroCore universal AI agent platform.

## Table of Contents

1. [Overview](#overview)
2. [System Architecture](#system-architecture)
3. [Frontend Architecture](#frontend-architecture)
4. [Backend Architecture](#backend-architecture)
5. [App Configuration System](#app-configuration-system)
6. [Data Flow](#data-flow)
7. [Key Design Patterns](#key-design-patterns)
8. [Technology Stack](#technology-stack)

---

## Overview

KiroCore is a config-driven platform that enables multiple specialized AI applications to run from a single codebase. The architecture is designed for:

- **Scalability**: Easy to add new apps without modifying core code
- **Maintainability**: Clear separation of concerns
- **Performance**: Optimized React rendering and API calls
- **Extensibility**: Plugin-like app system

### Core Principle

```
One Skeleton Codebase → Multiple App Configs → Infinite Applications
```

---

## System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Browser                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │         Next.js Frontend (Port 3000)             │  │
│  │  ┌────────────┐  ┌────────────┐  ┌───────────┐  │  │
│  │  │  App Router│  │   Core     │  │   Pages   │  │  │
│  │  │  [appType] │  │ Components │  │  /apps    │  │  │
│  │  └────────────┘  └────────────┘  └───────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST API
                     │
┌────────────────────▼────────────────────────────────────┐
│            Express Backend (Port 3001)                   │
│  ┌──────────────────────────────────────────────────┐  │
│  │  ┌─────────┐  ┌──────────┐  ┌────────────────┐  │  │
│  │  │  Routes │  │ Services │  │  App Discovery │  │  │
│  │  │  /chat  │  │  Gemini  │  │  File System   │  │  │
│  │  │  /apps  │  │  Config  │  │  Dynamic Load  │  │  │
│  │  └─────────┘  └──────────┘  └────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ API Calls
                     │
┌────────────────────▼────────────────────────────────────┐
│              Google Gemini AI API                        │
│              (Gemini 2.5 Flash Model)                    │
└──────────────────────────────────────────────────────────┘
```

### Component Layers

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│  (React Components, UI, Animations)     │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Application Layer               │
│  (Hooks, State Management, Routing)     │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Service Layer                   │
│  (API Calls, Data Transformation)       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         Backend Layer                   │
│  (Express Routes, Business Logic)       │
└──────────────┬──────────────────────────┘
               │
┌──────────────▼──────────────────────────┐
│         External Services               │
│  (Gemini AI, File System)               │
└─────────────────────────────────────────┘
```

---

## Frontend Architecture

### Directory Structure

```
app/
├── [appType]/          # Dynamic route for all apps
│   └── page.tsx       # Main app page component
├── apps/              # App browser page
│   └── page.tsx
├── layout.tsx         # Root layout with providers
└── page.tsx           # Landing page

core/
├── components/
│   ├── chat/          # Chat-related components
│   │   ├── ChatArea.tsx
│   │   ├── MessageList.tsx
│   │   ├── AIMessage.tsx
│   │   ├── UserMessage.tsx
│   │   ├── Sidebar.tsx
│   │   └── EmptyState.tsx
│   ├── layout/        # Layout components
│   │   └── Header.tsx
│   ├── sections/      # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── AppShowcase.tsx
│   ├── ui/            # UI primitives
│   │   ├── Toaster.tsx
│   │   ├── ShortcutsModal.tsx
│   │   └── TypingIndicator.tsx
│   └── AppBrowser.tsx
├── hooks/
│   ├── useKiroAgent.tsx          # Main AI interaction hook
│   └── useKeyboardShortcuts.tsx  # Keyboard shortcuts
├── services/
│   ├── api.ts                    # API client
│   ├── chatHistory.ts            # Chat persistence
│   └── conversationHistory.ts    # Conversation management
├── lib/
│   ├── animations.ts             # Framer Motion variants
│   └── icons/
│       ├── iconResolver.ts       # Icon mapping
│       └── DynamicIcon.tsx       # Icon component
└── types/
    └── index.ts                  # TypeScript types
```

### Key Components

#### 1. Dynamic App Router (`app/[appType]/page.tsx`)

```typescript
// Handles all app routes dynamically
// URL: /study-buddy, /idea-forge, etc.

export default function AppPage({params}: {params: {appType: string}}) {
  const [config, setConfig] = useState<AppConfig | null>(null);

  // Load app config from backend
  useEffect(() => {
    getAppConfig(params.appType).then(setConfig);
  }, [params.appType]);

  // Render chat interface with app-specific config
  return <ChatArea config={config} />;
}
```

#### 2. Chat Area Component

```typescript
// Main chat interface
// Manages messages, input, and AI interaction

export function ChatArea({config}: {config: AppConfig}) {
  const {messages, sendMessage, loading} = useKiroAgent(config);

  return (
    <div className="chat-container">
      <MessageList messages={messages} />
      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
}
```

#### 3. useKiroAgent Hook

```typescript
// Custom hook for AI interaction
// Handles message sending, history, and state

export function useKiroAgent(config: AppConfig) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(
    async (content: string) => {
      setLoading(true);
      const response = await sendChatMessage({
        message: content,
        appType: config.id,
        conversationHistory: messages,
      });
      setMessages((prev) => [...prev, userMsg, aiMsg]);
      setLoading(false);
    },
    [messages, config]
  );

  return {messages, sendMessage, loading};
}
```

### State Management

- **Local State**: React useState for component-specific state
- **Persistent State**: localStorage for chat history
- **Shared State**: Props and context for app configuration
- **No Redux**: Kept simple with hooks and local state

### Routing Strategy

```
/                    → Landing page (Hero + App Browser)
/apps                → Full app browser page
/[appType]           → Dynamic app route (study-buddy, idea-forge, etc.)
/[appType]/chat      → (Future) Specific chat route
```

---

## Backend Architecture

### Directory Structure

```
server/
├── src/
│   ├── index.js           # Express app entry point
│   ├── routes/
│   │   ├── chat.js        # Chat endpoints
│   │   └── apps.js        # App management endpoints
│   └── services/
│       ├── gemini-service.js  # Gemini AI integration
│       └── app-service.js     # App discovery & loading
├── .env                   # Environment variables
└── package.json
```

### API Endpoints

#### 1. Chat Endpoint

```javascript
POST /api/chat

Request:
{
  "message": "User message",
  "appType": "study-buddy",
  "conversationHistory": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}

Response:
{
  "success": true,
  "response": "AI response",
  "appType": "study-buddy",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### 2. Get All Apps

```javascript
GET /api/apps

Response:
{
  "apps": [
    {
      "id": "study-buddy",
      "name": "StudyBuddy",
      "description": "...",
      "icon": "FiBookOpen",
      "theme": { "primary": "#3b82f6" },
      "features": ["..."]
    },
    // ... more apps
  ]
}
```

#### 3. Get App Config

```javascript
GET /api/apps/:appType

Response:
{
  "config": {
    "id": "study-buddy",
    "name": "StudyBuddy",
    "systemPrompt": "...",
    "welcomeMessage": "...",
    // ... full config
  }
}
```

### Services

#### Gemini Service

```javascript
// Handles all Gemini AI interactions
export async function generateResponse(prompt, systemPrompt, history) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
    systemInstruction: systemPrompt,
  });

  const chat = model.startChat({history});
  const result = await chat.sendMessage(prompt);
  return result.response.text();
}
```

#### App Service

```javascript
// Discovers and loads app configurations
export async function getAllApps() {
  const appDirs = await fs.readdir(APPS_DIR);
  const apps = [];

  for (const appDir of appDirs) {
    const config = await getAppConfig(appDir);
    if (config) apps.push({id: appDir, ...config});
  }

  return apps;
}
```

---

## App Configuration System

### Configuration File Structure

```typescript
// apps/[app-name]/agent.config.ts

export default {
  // Display Information
  name: string;              // App display name
  description: string;       // Short description
  icon: string;             // Icon identifier (e.g., "FiBook")

  // AI Behavior
  systemPrompt: string;     // AI personality and instructions
  welcomeMessage: string;   // Initial greeting

  // Features & Theme
  features: string[];       // List of key features
  theme: {
    primary: string;        // Primary color (hex)
    secondary?: string;     // Secondary color (optional)
    accent?: string;        // Accent color (optional)
  };
};
```

### App Discovery Process

```
1. Backend starts
   ↓
2. Scan apps/ directory
   ↓
3. For each subdirectory:
   - Look for agent.config.ts or agent.config.js
   - Dynamically import the config
   - Validate required fields
   - Add to app registry
   ↓
4. Expose via /api/apps endpoint
   ↓
5. Frontend fetches and displays apps
```

### Dynamic Loading

```javascript
// Backend dynamically imports configs
const configPath = path.join(APPS_DIR, appType, "agent.config.ts");
const configModule = await import(`file://${configPath}`);
const config = configModule.default;
```

---

## Data Flow

### Chat Message Flow

```
1. User types message
   ↓
2. ChatInput component captures input
   ↓
3. useKiroAgent hook processes message
   ↓
4. API call to POST /api/chat
   ↓
5. Backend receives request
   ↓
6. Load app config for system prompt
   ↓
7. Call Gemini AI with:
   - User message
   - System prompt
   - Conversation history
   ↓
8. Gemini generates response
   ↓
9. Backend returns response
   ↓
10. Frontend updates message list
    ↓
11. Save to localStorage
    ↓
12. Render AI message with markdown
```

### App Loading Flow

```
1. User navigates to /[appType]
   ↓
2. Next.js dynamic route captures appType
   ↓
3. Frontend calls GET /api/apps/:appType
   ↓
4. Backend loads config from file system
   ↓
5. Returns config to frontend
   ↓
6. Frontend applies theme colors
   ↓
7. Displays welcome message
   ↓
8. Initializes chat with app personality
```

---

## Key Design Patterns

### 1. Config-Driven Architecture

Apps are defined by configuration, not code:

```typescript
// Adding a new app requires only config
// No code changes to core platform
export default {
  name: "NewApp",
  systemPrompt: "You are...",
  // ... rest of config
};
```

### 2. Separation of Concerns

- **Core**: Reusable components and logic
- **Apps**: App-specific configurations
- **Server**: Backend logic and AI integration

### 3. Composition Over Inheritance

Components are composed, not extended:

```typescript
<ChatArea>
  <MessageList>
    <AIMessage />
    <UserMessage />
  </MessageList>
  <ChatInput />
</ChatArea>
```

### 4. Custom Hooks Pattern

Business logic extracted into reusable hooks:

```typescript
const {messages, sendMessage} = useKiroAgent(config);
const shortcuts = useKeyboardShortcuts();
```

### 5. Service Layer Pattern

API calls abstracted into service functions:

```typescript
// Instead of fetch() everywhere
const response = await sendChatMessage(request);
const apps = await getAllApps();
```

---

## Technology Stack

### Frontend

| Technology      | Version  | Purpose                         |
| --------------- | -------- | ------------------------------- |
| Next.js         | 16.0.2   | React framework with App Router |
| React           | 19.2.0   | UI library                      |
| TypeScript      | 5.x      | Type safety                     |
| Tailwind CSS    | 4.x      | Utility-first styling           |
| Framer Motion   | 12.23.24 | Animations                      |
| react-markdown  | Latest   | Markdown rendering              |
| react-hot-toast | Latest   | Toast notifications             |
| react-icons     | Latest   | Icon library                    |
| jspdf           | Latest   | PDF export                      |

### Backend

| Technology            | Version | Purpose               |
| --------------------- | ------- | --------------------- |
| Express.js            | 5.1.0   | Web server            |
| Node.js               | Latest  | Runtime               |
| @google/generative-ai | Latest  | Gemini AI SDK         |
| cors                  | Latest  | Cross-origin support  |
| dotenv                | Latest  | Environment variables |

### Development Tools

| Tool                | Purpose                |
| ------------------- | ---------------------- |
| ESLint              | Code linting           |
| Concurrently        | Run multiple processes |
| TypeScript Compiler | Type checking          |

---

## Performance Optimizations

### Frontend

1. **React Optimization**

   - useCallback for stable function references
   - useMemo for expensive computations
   - Lazy loading for heavy components

2. **Rendering Optimization**

   - Virtualized message lists (future)
   - Debounced input handlers
   - Optimistic UI updates

3. **Bundle Optimization**
   - Code splitting by route
   - Dynamic imports for icons
   - Tree shaking unused code

### Backend

1. **Caching**

   - App configs cached in memory
   - Reuse Gemini chat sessions

2. **Async Operations**
   - Non-blocking file system operations
   - Parallel app discovery

---

## Security Considerations

1. **API Key Protection**

   - Gemini API key in server-side .env only
   - Never exposed to client

2. **Input Validation**

   - Sanitize user messages
   - Validate app types

3. **CORS Configuration**

   - Restricted to localhost in development
   - Configurable for production

4. **Rate Limiting** (Future)
   - Prevent API abuse
   - Per-user limits

---

## Scalability

### Current Capacity

- **Apps**: 6 currently, unlimited potential
- **Concurrent Users**: Limited by Express/Gemini quotas
- **Messages**: No database limit (localStorage)

### Scaling Strategies

1. **Horizontal Scaling**

   - Deploy multiple backend instances
   - Load balancer distribution

2. **Database Integration**

   - Replace localStorage with database
   - User authentication and cloud sync

3. **Caching Layer**

   - Redis for app configs
   - Response caching for common queries

4. **CDN Integration**
   - Static asset delivery
   - Edge caching

---

## Future Enhancements

1. **Streaming Responses**

   - Real-time AI response streaming
   - Better UX for long responses

2. **Multi-modal Support**

   - Image upload and analysis
   - Voice input/output

3. **Advanced Features**

   - Code syntax highlighting
   - Export conversations
   - Share conversations

4. **Infrastructure**
   - Database integration
   - User authentication
   - Cloud deployment

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Built for:** Skeleton Crew Hackathon

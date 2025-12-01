# Project Structure

## Directory Organization

```
kirocore/
├── app/                    # Next.js App Router
│   ├── [appType]/         # Dynamic routes for each app
│   ├── chat/              # Chat page
│   ├── api/               # API routes (optional)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│
├── apps/                   # App configurations (6 apps)
│   ├── study-buddy/
│   │   ├── agent.config.ts
│   │   └── README.md
│   ├── idea-forge/
│   │   ├── agent.config.ts
│   │   └── README.md
│   ├── code-mentor/
│   │   ├── agent.config.ts
│   │   └── README.md
│   ├── story-weaver/
│   │   ├── agent.config.ts
│   │   └── README.md
│   ├── wellness-coach/
│   │   ├── agent.config.ts
│   │   └── README.md
│   └── career-navigator/
│       ├── agent.config.ts
│       └── README.md
│
├── core/                   # Shared core components
│   ├── components/        # Reusable UI components
│   │   ├── chat/         # Chat-related components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI primitives
│   ├── hooks/             # Custom React hooks
│   │   ├── useKeyboardShortcuts.tsx
│   │   └── useKiroAgent.tsx
│   ├── lib/               # Utility functions
│   │   ├── animations.ts
│   │   └── icons/
│   ├── services/          # API services
│   │   ├── api.ts
│   │   ├── chatHistory.ts
│   │   └── conversationHistory.ts
│   └── types/             # TypeScript types
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/        # API route handlers
│   │   │   ├── chat.js
│   │   │   └── apps.js
│   │   ├── services/      # Business logic
│   │   │   ├── gemini-service.js
│   │   │   └── app-service.js
│   │   └── index.js       # Server entry point
│   └── .env.example       # Backend env template
│
├── .kiro/                  # Project documentation
│   ├── steering/          # Project guidelines
│   └── specs/             # Feature specifications
│
└── public/                 # Static assets
```

## Key Patterns

### App Configuration

Each app in `apps/` must have:

- `agent.config.js` or `agent.config.ts` - App configuration
- `README.md` - App documentation (optional)

App config structure:

```javascript
{
  name: string,
  description: string,
  icon: string,
  systemPrompt: string,
  welcomeMessage: string,
  features: string[],
  theme: { primary, secondary, accent }
}
```

### Core Components

Located in `core/components/`:

- Shared UI components used across all apps
- Should be app-agnostic and reusable
- Use TypeScript for type safety

### Custom Hooks

Located in `core/hooks/`:

- `useKiroAgent.tsx` - Main hook for AI agent interaction
- `useKeyboardShortcuts.tsx` - Keyboard shortcut management
- Returns: `{messages, sendMessage, loading, error, clear, pushMessage}`

### UI Components

Located in `core/components/ui/`:

- `Toaster.tsx` - Toast notification system
- `ShortcutsModal.tsx` - Keyboard shortcuts help modal
- `TypingIndicator.tsx` - AI typing animation

### API Routes

Backend routes in `server/src/routes/`:

- `chat.js` - Chat endpoints with Gemini integration
- `apps.js` - App management endpoints

### Backend Services

Backend services in `server/src/services/`:

- `gemini-service.js` - Google Gemini AI integration
- `app-service.js` - App configuration loader

### Naming Conventions

- React components: PascalCase (e.g., `ChatArea.tsx`)
- Hooks: camelCase with "use" prefix (e.g., `useKiroAgent.tsx`)
- Config files: kebab-case or camelCase (e.g., `agent.config.js`)
- Folders: kebab-case (e.g., `study-buddy`)

### Import Paths

- Use `@/` alias for root imports
- Example: `import {ChatArea} from "@/core/components/chat/ChatArea"`
- Server uses ES modules with `.js` extensions in imports

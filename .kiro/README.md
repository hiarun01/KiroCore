# KiroCore - Universal AI Agent Platform

This is the root `.kiro` directory for the KiroCore project.

## What is KiroCore?

KiroCore is a universal AI agent platform that transforms a single codebase into multiple specialized applications through configuration files. Built for the Skeleton Crew hackathon, it demonstrates how one skeleton codebase can power diverse AI applications using Google Gemini AI.

## Core Philosophy

**One Skeleton. Multiple Apps. Infinite Possibilities.**

Instead of building separate AI apps from scratch, KiroCore provides:

- **Reusable Core** - Shared UI components, services, and architecture
- **Config-Driven Apps** - Each app defined by simple configuration
- **Google Gemini AI** - Direct integration with Gemini 2.5 Flash
- **Production Quality** - Full-stack Next.js + Express architecture

## Project Architecture

```
kirocore/
├── apps/                   # Individual app configurations
│   ├── study-buddy/       # Education app
│   ├── idea-forge/        # Creativity app
│   ├── code-mentor/       # Programming app
│   ├── story-weaver/      # Writing app
│   ├── wellness-coach/    # Health app
│   └── career-navigator/  # Career app
├── core/                   # Shared skeleton components
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API services
│   └── types/             # TypeScript types
├── app/                    # Next.js App Router
│   └── [appType]/         # Dynamic app routes
└── server/                 # Express backend
    ├── routes/            # API endpoints
    └── services/          # Gemini AI integration
```

## Current Applications (6 Total)

### 1. 📚 StudyBuddy

- **Purpose:** Education & Learning
- **Route:** `/study-buddy`
- **Theme:** Blue (#3b82f6)
- **Personality:** Patient, encouraging tutor
- **Features:** Concept explanations, problem solving, study strategies

### 2. 💡 IdeaForge

- **Purpose:** Creativity & Innovation
- **Route:** `/idea-forge`
- **Theme:** Purple (#8b5cf6)
- **Personality:** Enthusiastic, inspiring brainstormer
- **Features:** Creative brainstorming, idea refinement, innovation

### 3. 💻 CodeMentor

- **Purpose:** Programming Education
- **Route:** `/code-mentor`
- **Theme:** Green (#10b981)
- **Personality:** Patient, knowledgeable coding mentor
- **Features:** Code explanations, debugging help, best practices

### 4. ✍️ StoryWeaver

- **Purpose:** Creative Writing
- **Route:** `/story-weaver`
- **Theme:** Purple (#a855f7)
- **Personality:** Imaginative, supportive storyteller
- **Features:** Character development, plot structuring, worldbuilding

### 5. 💖 WellnessCoach

- **Purpose:** Health & Wellness
- **Route:** `/wellness-coach`
- **Theme:** Pink (#ec4899)
- **Personality:** Warm, empathetic supporter
- **Features:** Mental health support, fitness guidance, stress management

### 6. 💼 CareerNavigator

- **Purpose:** Career Development
- **Route:** `/career-navigator`
- **Theme:** Amber (#f59e0b)
- **Personality:** Strategic, professional advisor
- **Features:** Career exploration, resume optimization, interview prep

## How Apps Work

Each app is defined by a simple configuration file:

```typescript
// apps/[app-name]/agent.config.ts
export default {
  name: "AppName",
  description: "What the app does",
  icon: "FiIcon",
  systemPrompt: "AI personality and behavior instructions",
  welcomeMessage: "Greeting message",
  features: ["Feature 1", "Feature 2"],
  theme: {
    primary: "#color",
    secondary: "#color",
    accent: "#color",
  },
};
```

The platform automatically:

1. Discovers the app configuration
2. Loads the appropriate AI personality
3. Applies the custom theme
4. Routes to `/[app-name]`

## Key Features

### Platform Features

- Dynamic app loading based on URL routes
- Config-driven architecture (add apps in minutes)
- Real AI responses via Google Gemini 2.5 Flash
- Unique AI personalities per app
- Conversation history with localStorage

### User Experience

- ChatGPT-style interface
- Markdown rendering with syntax highlighting
- Code block copy functionality
- Toast notifications
- Keyboard shortcuts (Ctrl+N, Ctrl+B, etc.)
- Typing indicator
- PDF export
- Dark mode with ghostly aesthetic

### Technical Stack

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Backend:** Express.js 5, Node.js
- **AI:** Google Gemini 2.5 Flash
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather, Hero, Material)

## 📁 Documentation

This `.kiro/` folder contains project documentation:

- `README.md` - This file (project overview)
- `steering/` - Project guidelines (tech stack, structure, product vision)
- `specs/` - Feature specifications and design docs

## Adding a New App

1. Create directory: `apps/my-app/`
2. Add config: `apps/my-app/agent.config.ts`
3. Navigate to: `/my-app`

That's it! The platform handles the rest.

## Development Commands

```bash
npm run dev          # Run both frontend and backend
npm run dev:frontend # Frontend only (port 3000)
npm run dev:backend  # Backend only (port 3001)
npm run build        # Production build
npm start            # Production server
npm run lint         # Code linting
```

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Copy `server/.env.example` to `server/.env`
3. Add Gemini API key to `server/.env`
4. Run `npm install`
5. Run `npm run dev`

## Documentation

- **Tech Stack:** [steering/tech.md](steering/tech.md)
- **Project Structure:** [steering/structure.md](steering/structure.md)
- **Product Overview:** [steering/product.md](steering/product.md)
- **Platform Design:** [specs/kirocore-platform/design.md](specs/kirocore-platform/design.md)

## Hackathon Context

Built for the **Skeleton Crew Hackathon** to demonstrate:

- How one skeleton codebase can power multiple specialized apps
- Config-driven architecture for rapid app development
- Direct AI integration with Google Gemini 2.5 Flash
- Production-quality full-stack implementation
- Scalability from 1 to 6+ apps in minutes

## Version

**v1.0.0** - Production Ready

---

**Built with 💀 for the Skeleton Crew Hackathon**

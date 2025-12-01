# Product Overview

KiroCore is a universal AI agent platform that transforms a single codebase into multiple specialized applications through configuration files. Built for the Skeleton Crew hackathon.

## Core Concept

One reusable skeleton codebase that powers multiple AI applications through config-driven architecture. Each app has its own personality, theme, and behavior while sharing the same core components.

## Current Applications

1. **StudyBuddy** (`/study-buddy`) - AI tutor for education and learning

   - Theme: Blue (#3b82f6)
   - Personality: Patient, encouraging educator
   - Features: Concept explanations, problem solving, study strategies

2. **IdeaForge** (`/idea-forge`) - Creative brainstorming partner

   - Theme: Purple (#8b5cf6)
   - Personality: Enthusiastic, inspiring innovator
   - Features: Creative brainstorming, idea refinement, innovation

3. **CodeMentor** (`/code-mentor`) - Programming tutor for developers

   - Theme: Green (#10b981)
   - Personality: Patient, knowledgeable coding mentor
   - Features: Code explanations, debugging help, best practices

4. **StoryWeaver** (`/story-weaver`) - Creative writing companion

   - Theme: Purple (#a855f7)
   - Personality: Imaginative, supportive storyteller
   - Features: Character development, plot structuring, worldbuilding

5. **WellnessCoach** (`/wellness-coach`) - Personal wellness companion

   - Theme: Pink (#ec4899)
   - Personality: Warm, empathetic supporter
   - Features: Mental health support, fitness guidance, stress management

6. **CareerNavigator** (`/career-navigator`) - Professional career advisor
   - Theme: Amber (#f59e0b)
   - Personality: Strategic, professional advisor
   - Features: Career exploration, resume optimization, interview prep

## Key Features

### Core Functionality

- Dynamic app loading based on URL routes
- ChatGPT-style interface with conversation history
- Markdown rendering with syntax highlighting
- Code block copy functionality
- Typing indicator for AI responses
- Dark mode with ghostly aesthetic

### User Experience

- Toast notifications for feedback
- Keyboard shortcuts for power users
- PDF export for conversations
- Conversation management with sidebar
- Mobile-responsive design
- Smooth animations throughout

### Technical

- Deep Kiro CLI integration (hooks, specs, steering)
- Full-stack architecture with Express backend
- Google Gemini 2.5 AI integration
- Performance optimized with React hooks
- Extensible: new apps can be added in minutes

## Architecture Philosophy

- Config over code: Apps defined by simple configuration files
- Separation of concerns: Core components vs app-specific configs
- Reusability: Shared UI components and services
- Scalability: Easy to add new apps without touching core code

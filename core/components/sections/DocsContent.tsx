"use client";

import {motion} from "framer-motion";

export function DocsContent() {
  return (
    <div className="pt-20 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-4">
            Documentation
          </h1>
          <p className="text-lg text-zinc-400">
            Everything you need to build and deploy AI apps with KiroCore
          </p>
        </motion.div>

        <div className="space-y-16">
          <AboutSection />
          <ProblemSolution />
          <GettingStarted />
          <Installation />
          <HowToUse />
          <CreatingApps />
          <Features />
          <APIReference />
          <Troubleshooting />
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">📖 About KiroCore</h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-zinc-300 text-lg leading-relaxed">
          KiroCore is a <strong>universal AI agent platform</strong> that
          transforms a single codebase into multiple specialized applications
          through simple configuration files.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-zinc-100 mb-2">One Codebase</h3>
            <p className="text-sm text-zinc-400">
              Build once, deploy unlimited AI applications
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-zinc-100 mb-2">Config-Driven</h3>
            <p className="text-sm text-zinc-400">
              New apps in 5 minutes with simple config files
            </p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-zinc-100 mb-2">Real AI</h3>
            <p className="text-sm text-zinc-400">
              Powered by Google Gemini 2.5 Flash
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">
        💡 Problem & Solution
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="text-xl">❌</span>
            <span className="text-sm font-medium text-red-400">
              The Problem
            </span>
          </div>
          <h3 className="text-2xl font-bold text-zinc-100">
            Building AI apps is repetitive
          </h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Rebuild frontend for every new AI app</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Duplicate backend API routes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Recreate chat interfaces repeatedly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span>Waste weeks on boilerplate code</span>
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-xl">✅</span>
            <span className="text-sm font-medium text-green-400">
              Our Solution
            </span>
          </div>
          <h3 className="text-2xl font-bold text-zinc-100">
            KiroCore changes everything
          </h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>One reusable codebase for all apps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>Just change config to create new apps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>UI and backend stay the same</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>Launch apps in minutes, not weeks</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🚀 Getting Started</h2>
      <p className="text-zinc-300 text-lg">
        Get KiroCore running in 3 minutes with these simple steps.
      </p>

      <div className="space-y-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-zinc-100">
              Install Dependencies
            </h3>
          </div>
          <div className="bg-zinc-950 rounded-lg p-4">
            <code className="text-sm text-green-400">npm install</code>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-zinc-100">
              Set Up Gemini API
            </h3>
          </div>
          <p className="text-zinc-300 mb-3">
            Get your free API key from{" "}
            <a
              href="https://makersuite.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google AI Studio
            </a>
          </p>
          <p className="text-zinc-300 mb-3">
            Add to{" "}
            <code className="bg-zinc-800 px-2 py-1 rounded">server/.env</code>:
          </p>
          <div className="bg-zinc-950 rounded-lg p-4">
            <code className="text-sm text-zinc-300">
              GEMINI_API_KEY=your_api_key_here
            </code>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-zinc-100">Run the App</h3>
          </div>
          <div className="bg-zinc-950 rounded-lg p-4 mb-3">
            <code className="text-sm text-green-400">npm run dev</code>
          </div>
          <p className="text-zinc-300">
            Open{" "}
            <a
              href="http://localhost:3000"
              className="text-primary hover:underline"
            >
              http://localhost:3000
            </a>
          </p>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
        <p className="text-green-400 font-semibold mb-2">
          ✅ That&apos;s it! You&apos;re ready to go.
        </p>
        <p className="text-zinc-300">
          Try StudyBuddy at{" "}
          <code className="bg-zinc-800 px-2 py-1 rounded">/study-buddy</code> or
          IdeaForge at{" "}
          <code className="bg-zinc-800 px-2 py-1 rounded">/idea-forge</code>
        </p>
      </div>
    </section>
  );
}

function Installation() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">📦 Installation</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Prerequisites
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Node.js 18+ installed
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              npm package manager
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Google Gemini API key (free)
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Environment Setup
          </h3>
          <div className="space-y-3">
            <p className="text-zinc-300">Copy example files:</p>
            <div className="bg-zinc-950 rounded-lg p-4 space-y-2">
              <code className="text-sm text-zinc-300 block">
                cp .env.example .env.local
              </code>
              <code className="text-sm text-zinc-300 block">
                cp server/.env.example server/.env
              </code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-3">
            Development Commands
          </h3>
          <div className="space-y-3">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <code className="text-sm text-green-400">npm run dev</code>
              <p className="text-zinc-400 text-sm mt-2">
                Run both frontend and backend
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <code className="text-sm text-green-400">
                npm run dev:frontend
              </code>
              <p className="text-zinc-400 text-sm mt-2">
                Frontend only (port 3000)
              </p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <code className="text-sm text-green-400">
                npm run dev:backend
              </code>
              <p className="text-zinc-400 text-sm mt-2">
                Backend only (port 3001)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToUse() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🎮 How to Use</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            Using Existing Apps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h4 className="font-semibold text-zinc-100 mb-2">
                📚 StudyBuddy
              </h4>
              <p className="text-zinc-400 text-sm mb-3">
                AI tutor for education and learning
              </p>
              <code className="text-xs text-primary">/study-buddy</code>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h4 className="font-semibold text-zinc-100 mb-2">💡 IdeaForge</h4>
              <p className="text-zinc-400 text-sm mb-3">
                Creative brainstorming partner
              </p>
              <code className="text-xs text-primary">/idea-forge</code>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h4 className="font-semibold text-zinc-100 mb-2">
                💻 CodeMentor
              </h4>
              <p className="text-zinc-400 text-sm mb-3">Programming tutor</p>
              <code className="text-xs text-primary">/code-mentor</code>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
              <h4 className="font-semibold text-zinc-100 mb-2">
                ✍️ StoryWeaver
              </h4>
              <p className="text-zinc-400 text-sm mb-3">
                Creative writing companion
              </p>
              <code className="text-xs text-primary">/story-weaver</code>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            Keyboard Shortcuts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <span className="text-zinc-300">New chat</span>
              <kbd className="px-3 py-1 bg-zinc-800 rounded text-sm">
                Ctrl+N
              </kbd>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <span className="text-zinc-300">Browse apps</span>
              <kbd className="px-3 py-1 bg-zinc-800 rounded text-sm">
                Ctrl+B
              </kbd>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <span className="text-zinc-300">Export PDF</span>
              <kbd className="px-3 py-1 bg-zinc-800 rounded text-sm">
                Ctrl+E
              </kbd>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <span className="text-zinc-300">Show shortcuts</span>
              <kbd className="px-3 py-1 bg-zinc-800 rounded text-sm">
                Ctrl+/
              </kbd>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreatingApps() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">✨ Creating New Apps</h2>
      <p className="text-zinc-300 text-lg">
        Add a new AI app in under 5 minutes with just a config file.
      </p>

      <div className="space-y-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">
            Step 1: Create App Directory
          </h3>
          <div className="bg-zinc-950 rounded-lg p-4">
            <code className="text-sm text-green-400">mkdir apps/my-app</code>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">
            Step 2: Create Config File
          </h3>
          <p className="text-zinc-300 mb-3">
            Create{" "}
            <code className="bg-zinc-800 px-2 py-1 rounded">
              apps/my-app/agent.config.ts
            </code>
            :
          </p>
          <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`const config = {
  name: "MyApp",
  description: "My AI assistant",
  icon: "FiStar",
  systemPrompt: \`You are a helpful AI assistant...\`,
  welcomeMessage: "Hello! How can I help?",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3"
  ],
  theme: {
    primary: "#8b5cf6",
    secondary: "#a78bfa",
    accent: "#7c3aed"
  }
};

export default config;`}
            </pre>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-4">
            Step 3: Access Your App
          </h3>
          <p className="text-zinc-300 mb-3">Navigate to:</p>
          <div className="bg-zinc-950 rounded-lg p-4">
            <code className="text-sm text-primary">
              http://localhost:3000/my-app
            </code>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-primary mb-3">💡 Pro Tip</h3>
        <p className="text-zinc-300">
          The platform automatically discovers new apps. No need to restart the
          server or modify core code!
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🎨 Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">💬</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            ChatGPT-Style Interface
          </h3>
          <p className="text-zinc-400 text-sm">
            Familiar, intuitive chat UI with conversation history and sidebar
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">📝</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            Markdown Rendering
          </h3>
          <p className="text-zinc-400 text-sm">
            Rich text with syntax highlighting and code block copy
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">⌨️</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            Keyboard Shortcuts
          </h3>
          <p className="text-zinc-400 text-sm">
            Power user features with Ctrl+N, Ctrl+B, Ctrl+E shortcuts
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">📄</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            PDF Export
          </h3>
          <p className="text-zinc-400 text-sm">
            Save conversations as PDF for offline reference
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">🎭</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            Unique Personalities
          </h3>
          <p className="text-zinc-400 text-sm">
            Each app has distinct AI behavior and tone
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="text-3xl mb-3">💾</div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">
            Persistent History
          </h3>
          <p className="text-zinc-400 text-sm">
            Conversations saved in localStorage, survive page refresh
          </p>
        </div>
      </div>
    </section>
  );
}

function APIReference() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">📚 API Reference</h2>

      <div className="space-y-6">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-mono rounded">
              POST
            </span>
            <code className="text-zinc-100 text-lg">/api/chat</code>
          </div>
          <p className="text-zinc-400 mb-4">Send a message to the AI agent</p>

          <h4 className="font-semibold text-zinc-100 mb-2">Request Body:</h4>
          <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-xs text-zinc-300">
              {`{
  "message": "Explain React hooks",
  "appType": "study-buddy",
  "conversationHistory": [
    {
      "role": "user",
      "content": "Previous message",
      "timestamp": "2024-01-01T00:00:00Z"
    }
  ]
}`}
            </pre>
          </div>

          <h4 className="font-semibold text-zinc-100 mb-2">Response:</h4>
          <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`{
  "success": true,
  "response": "React hooks are functions...",
  "appType": "study-buddy",
  "timestamp": "2024-01-01T00:00:00Z",
  "source": "gemini-ai"
}`}
            </pre>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-mono rounded">
              GET
            </span>
            <code className="text-zinc-100 text-lg">/api/apps</code>
          </div>
          <p className="text-zinc-400 mb-4">Get all available apps</p>

          <h4 className="font-semibold text-zinc-100 mb-2">Response:</h4>
          <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`{
  "apps": [
    {
      "id": "study-buddy",
      "name": "StudyBuddy",
      "description": "Your AI study companion",
      "icon": "FiBookOpen",
      "theme": {
        "primary": "#3b82f6",
        "secondary": "#60a5fa",
        "accent": "#93c5fd"
      },
      "features": ["Concept Explanations", "Problem Solving"]
    }
  ]
}`}
            </pre>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-mono rounded">
              GET
            </span>
            <code className="text-zinc-100 text-lg">/api/apps/:appType</code>
          </div>
          <p className="text-zinc-400 mb-4">Get specific app configuration</p>

          <h4 className="font-semibold text-zinc-100 mb-2">Response:</h4>
          <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`{
  "config": {
    "id": "study-buddy",
    "name": "StudyBuddy",
    "systemPrompt": "You are an expert tutor...",
    "welcomeMessage": "Hi! I'm StudyBuddy...",
    "theme": { "primary": "#3b82f6" }
  }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Troubleshooting() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🔧 Troubleshooting</h2>

      <div className="space-y-4">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-3">
            Port Already in Use
          </h3>
          <p className="text-zinc-400 mb-3">
            If port 3000 or 3001 is already in use:
          </p>
          <div className="bg-zinc-950 rounded-lg p-4">
            <code className="text-sm text-green-400">npx kill-port 3000</code>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-3">
            AI Not Responding
          </h3>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>
                Check{" "}
                <code className="bg-zinc-800 px-2 py-1 rounded">
                  server/.env
                </code>{" "}
                has valid GEMINI_API_KEY
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Verify API key at Google AI Studio</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Check backend console for errors</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-3">
            App Not Loading
          </h3>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Clear browser cache (Ctrl+Shift+R)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Check console for errors (F12)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">•</span>
              <span>Verify app config exists in apps/ directory</span>
            </li>
          </ul>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-zinc-100 mb-3">
            Build Fails
          </h3>
          <p className="text-zinc-400 mb-3">Clean install and rebuild:</p>
          <div className="bg-zinc-950 rounded-lg p-4 space-y-2">
            <code className="text-sm text-zinc-300 block">
              rm -rf node_modules package-lock.json
            </code>
            <code className="text-sm text-zinc-300 block">npm install</code>
            <code className="text-sm text-zinc-300 block">npm run build</code>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-400 mb-3">
          💡 Need More Help?
        </h3>
        <p className="text-zinc-300">
          Check the{" "}
          <a
            href="https://github.com/hiarun01/KiroCore"
            className="text-primary hover:underline"
          >
            GitHub repository
          </a>{" "}
          for more documentation and examples.
        </p>
      </div>
    </section>
  );
}

"use client";

import {motion} from "framer-motion";
import {useState} from "react";
import {DynamicIcon} from "@/core/lib/icons";

export function DocsContent() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    {id: "getting-started", title: "Getting Started", icon: "HiRocketLaunch"},
    {id: "installation", title: "Installation", icon: "FiCpu"},
    {id: "configuration", title: "Configuration", icon: "MdSettings"},
    {id: "creating-apps", title: "Creating Apps", icon: "HiSparkles"},
    {id: "api-reference", title: "API Reference", icon: "FiBookOpen"},
    {id: "deployment", title: "Deployment", icon: "MdRocket"},
  ];

  return (
    <div className="pt-14 sm:pt-16 pb-12 sm:pb-14 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <motion.div
          className="mb-12"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-100 mb-4">
            Documentation
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl">
            Everything you need to build AI apps with KiroCore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.aside
            className="lg:col-span-1"
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <div className="sticky top-20 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                  }`}
                >
                  <DynamicIcon
                    icon={section.icon}
                    size={20}
                    className="text-xl"
                  />
                  <span className="font-medium">{section.title}</span>
                </button>
              ))}
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            className="lg:col-span-3"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <div className="prose prose-invert max-w-none">
              {activeSection === "getting-started" && <GettingStarted />}
              {activeSection === "installation" && <Installation />}
              {activeSection === "configuration" && <Configuration />}
              {activeSection === "creating-apps" && <CreatingApps />}
              {activeSection === "api-reference" && <APIReference />}
              {activeSection === "deployment" && <Deployment />}
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

function GettingStarted() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🚀 Getting Started</h2>

      <p className="text-zinc-300 leading-relaxed">
        KiroCore is a universal AI agent app foundation that lets you build
        multiple AI applications from a single codebase. Instead of rebuilding
        everything for each new AI app, you simply create a configuration file.
      </p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-zinc-100 mb-3">
          What You'll Learn
        </h3>
        <ul className="space-y-2 text-zinc-300">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>How to install and set up KiroCore</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Creating your first AI app configuration</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Customizing AI personalities and behaviors</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>Deploying your apps to production</span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-400 mb-3">
          💡 Key Concept
        </h3>
        <p className="text-zinc-300">
          <strong>One Skeleton, Endless AI Apps:</strong> KiroCore provides the
          UI, backend, and infrastructure. You provide the AI personality
          through simple config files.
        </p>
      </div>
    </div>
  );
}

function Installation() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">📦 Installation</h2>

      <h3 className="text-2xl font-semibold text-zinc-100">Prerequisites</h3>
      <ul className="space-y-2 text-zinc-300">
        <li className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>Node.js 18+ installed</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>npm or yarn package manager</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary mt-1">•</span>
          <span>OpenAI API key (for production)</span>
        </li>
      </ul>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Clone the Repository
      </h3>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-zinc-300">
          git clone https://github.com/yourusername/kirocore.git
          <br />
          cd kirocore
        </code>
      </div>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Install Dependencies
      </h3>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-zinc-300">npm install</code>
      </div>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Set Up Environment Variables
      </h3>
      <p className="text-zinc-300">
        Create a{" "}
        <code className="bg-zinc-800 px-2 py-1 rounded">.env.local</code> file:
      </p>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-zinc-300">
          OPENAI_API_KEY=your_api_key_here
          <br />
          NEXT_PUBLIC_APP_URL=http://localhost:3000
        </code>
      </div>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Run Development Server
      </h3>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <code className="text-sm text-zinc-300">npm run dev</code>
      </div>
      <p className="text-zinc-300">
        Open{" "}
        <a
          href="http://localhost:3000"
          className="text-primary hover:underline"
        >
          http://localhost:3000
        </a>{" "}
        in your browser.
      </p>
    </div>
  );
}

function Configuration() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">⚙️ Configuration</h2>

      <p className="text-zinc-300 leading-relaxed">
        KiroCore uses configuration files to define AI app personalities. Each
        app has its own config file in the{" "}
        <code className="bg-zinc-800 px-2 py-1 rounded">apps/</code> directory.
      </p>

      <h3 className="text-2xl font-semibold text-zinc-100">
        Config File Structure
      </h3>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
        <pre className="text-sm text-zinc-300">
          {`export const agentConfig = {
  // App Identity
  name: "StudyBuddy",
  icon: "📚",
  description: "Your AI tutor",
  welcomeMessage: "Hi! I'm here to help you learn!",
  
  // AI Personality
  systemPrompt: \`You are a patient and encouraging tutor.
    Help students understand concepts clearly.
    Use examples and break down complex topics.\`,
  
  tone: "friendly, educational, supportive",
  
  // UI Customization
  theme: {
    primaryColor: "#8b5cf6",
    accentColor: "#a78bfa"
  },
  
  // Footer
  footer: {
    attribution: "Built with KiroCore",
    links: [
      { label: "About", href: "/about" }
    ]
  }
};`}
        </pre>
      </div>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Configuration Options
      </h3>
      <div className="space-y-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-100 mb-2">
            name{" "}
            <span className="text-zinc-500 text-sm">(string, required)</span>
          </h4>
          <p className="text-zinc-400 text-sm">
            The display name of your AI app
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-100 mb-2">
            icon{" "}
            <span className="text-zinc-500 text-sm">(string, required)</span>
          </h4>
          <p className="text-zinc-400 text-sm">
            Emoji or icon to represent your app
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-100 mb-2">
            systemPrompt{" "}
            <span className="text-zinc-500 text-sm">(string, required)</span>
          </h4>
          <p className="text-zinc-400 text-sm">
            The AI's personality and behavior instructions
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <h4 className="font-semibold text-zinc-100 mb-2">
            theme{" "}
            <span className="text-zinc-500 text-sm">(object, optional)</span>
          </h4>
          <p className="text-zinc-400 text-sm">
            Custom colors for your app's UI
          </p>
        </div>
      </div>
    </div>
  );
}

function CreatingApps() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">✨ Creating Apps</h2>

      <p className="text-zinc-300 leading-relaxed">
        Creating a new AI app with KiroCore is as simple as adding a
        configuration file. No code changes needed!
      </p>

      <h3 className="text-2xl font-semibold text-zinc-100">
        Step-by-Step Guide
      </h3>

      <div className="space-y-6">
        <div className="bg-zinc-900 border-l-4 border-primary rounded-lg p-6">
          <h4 className="text-xl font-semibold text-zinc-100 mb-3">
            Step 1: Create App Folder
          </h4>
          <div className="bg-zinc-950 rounded p-3 mb-3">
            <code className="text-sm text-zinc-300">mkdir apps/my-app</code>
          </div>
          <p className="text-zinc-400 text-sm">
            Create a new folder in the apps directory with your app name
          </p>
        </div>

        <div className="bg-zinc-900 border-l-4 border-primary rounded-lg p-6">
          <h4 className="text-xl font-semibold text-zinc-100 mb-3">
            Step 2: Add Config File
          </h4>
          <div className="bg-zinc-950 rounded p-3 mb-3">
            <code className="text-sm text-zinc-300">
              touch apps/my-app/agent.config.ts
            </code>
          </div>
          <p className="text-zinc-400 text-sm">
            Create the agent configuration file
          </p>
        </div>

        <div className="bg-zinc-900 border-l-4 border-primary rounded-lg p-6">
          <h4 className="text-xl font-semibold text-zinc-100 mb-3">
            Step 3: Define Personality
          </h4>
          <p className="text-zinc-400 text-sm mb-3">
            Add your AI agent's configuration:
          </p>
          <div className="bg-zinc-950 rounded p-3 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`export const agentConfig = {
  name: "MyApp",
  icon: "🤖",
  systemPrompt: "You are a helpful assistant...",
  // ... more config
};`}
            </pre>
          </div>
        </div>

        <div className="bg-zinc-900 border-l-4 border-primary rounded-lg p-6">
          <h4 className="text-xl font-semibold text-zinc-100 mb-3">
            Step 4: Access Your App
          </h4>
          <p className="text-zinc-400 text-sm">
            Visit <code className="bg-zinc-800 px-2 py-1 rounded">/my-app</code>{" "}
            in your browser
          </p>
        </div>
      </div>

      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold text-green-400 mb-3">
          ✅ That's It!
        </h3>
        <p className="text-zinc-300">
          Your new AI app is now live with its own personality, without touching
          any core code!
        </p>
      </div>
    </div>
  );
}

function APIReference() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">📚 API Reference</h2>

      <h3 className="text-2xl font-semibold text-zinc-100">
        Backend Endpoints
      </h3>

      <div className="space-y-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-mono rounded">
              POST
            </span>
            <code className="text-zinc-300">/api/chat</code>
          </div>
          <p className="text-zinc-400 mb-4">Send a message to the AI agent</p>

          <h4 className="font-semibold text-zinc-100 mb-2">Request Body:</h4>
          <div className="bg-zinc-950 rounded p-3 overflow-x-auto mb-4">
            <pre className="text-xs text-zinc-300">
              {`{
  "message": "Hello, how are you?",
  "appType": "study-buddy"
}`}
            </pre>
          </div>

          <h4 className="font-semibold text-zinc-100 mb-2">Response:</h4>
          <div className="bg-zinc-950 rounded p-3 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`{
  "response": "Hi! I'm doing great...",
  "timestamp": "2024-01-01T00:00:00Z"
}`}
            </pre>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-mono rounded">
              GET
            </span>
            <code className="text-zinc-300">/api/config/:appType</code>
          </div>
          <p className="text-zinc-400 mb-4">
            Get configuration for a specific app
          </p>

          <h4 className="font-semibold text-zinc-100 mb-2">Response:</h4>
          <div className="bg-zinc-950 rounded p-3 overflow-x-auto">
            <pre className="text-xs text-zinc-300">
              {`{
  "name": "StudyBuddy",
  "icon": "📚",
  "welcomeMessage": "Hi! I'm here to help..."
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

function Deployment() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-zinc-100">🌐 Deployment</h2>

      <p className="text-zinc-300 leading-relaxed">
        Deploy your KiroCore apps to production with these recommended
        platforms.
      </p>

      <h3 className="text-2xl font-semibold text-zinc-100">
        Vercel (Recommended)
      </h3>
      <div className="space-y-4">
        <p className="text-zinc-300">Best for Next.js frontend deployment</p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <ol className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Push your code to GitHub</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Connect your repo to Vercel</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>Add environment variables (OPENAI_API_KEY)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <span>Deploy! 🚀</span>
            </li>
          </ol>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-zinc-100 mt-8">
        Railway (Backend)
      </h3>
      <div className="space-y-4">
        <p className="text-zinc-300">Best for Express backend deployment</p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <ol className="space-y-3 text-zinc-300">
            <li className="flex gap-3">
              <span className="font-bold text-primary">1.</span>
              <span>Create a Railway account</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">2.</span>
              <span>Deploy from GitHub</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">3.</span>
              <span>Set environment variables</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-primary">4.</span>
              <span>Get your backend URL</span>
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold text-yellow-400 mb-3">
          ⚠️ Important
        </h3>
        <p className="text-zinc-300">
          Make sure to set all environment variables in your deployment platform
          before going live!
        </p>
      </div>
    </div>
  );
}

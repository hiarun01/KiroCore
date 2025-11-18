"use client";

import {motion} from "framer-motion";

export function About() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            What is{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
              KiroCore
            </span>
            ?
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
            One skeleton, endless AI apps
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Problem */}
          <motion.div
            className="space-y-6"
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="text-2xl">❌</span>
              <span className="text-sm font-medium text-red-400">
                The Problem
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              Building AI apps is repetitive
            </h3>

            <div className="space-y-4 text-zinc-400">
              <p className="leading-relaxed">
                Every time you want to create a new AI-powered application, you
                have to:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Rebuild the entire frontend from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Set up backend API routes again</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Recreate chat interfaces and UI components</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Waste days on boilerplate code</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Solution */}
          <motion.div
            className="space-y-6"
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-2xl">✅</span>
              <span className="text-sm font-medium text-green-400">
                The Solution
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100">
              KiroCore changes everything
            </h3>

            <div className="space-y-4 text-zinc-400">
              <p className="leading-relaxed">
                With KiroCore, you build once and deploy infinite AI apps:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>One reusable codebase for all your AI apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Just change a config file to create new apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>UI and backend stay the same</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Launch new AI apps in minutes, not days</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.6}}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-12">
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="relative p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                Step 1
              </div>
              <div className="text-4xl mb-4 mt-2">📝</div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-3">
                Create Config
              </h4>
              <p className="text-sm text-zinc-400">
                Define your AI agent's personality, name, and behavior in a
                simple config file
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                Step 2
              </div>
              <div className="text-4xl mb-4 mt-2">🚀</div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-3">
                Deploy Instantly
              </h4>
              <p className="text-sm text-zinc-400">
                KiroCore automatically loads your config and transforms the app
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 sm:p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="absolute -top-4 left-6 px-4 py-1 bg-primary text-white text-sm font-bold rounded-full">
                Step 3
              </div>
              <div className="text-4xl mb-4 mt-2">✨</div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-3">
                New App Ready
              </h4>
              <p className="text-sm text-zinc-400">
                Your new AI app is live with a unique personality and purpose
              </p>
            </div>
          </div>
        </motion.div>

        {/* Example Apps */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.8}}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 text-center mb-4">
            Example Apps Built with KiroCore
          </h3>
          <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
            Same codebase, different personalities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* StudyBuddy */}
            <div className="p-6 sm:p-8 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="text-5xl mb-4">📚</div>
              <h4 className="text-2xl font-bold text-zinc-100 mb-2">
                StudyBuddy
              </h4>
              <p className="text-zinc-400 mb-4">
                An AI tutor that helps students learn any subject with patience
                and encouragement
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-blue-400">
                <span>AI Tutor</span>
                <span>•</span>
                <span>Educational</span>
              </div>
            </div>

            {/* IdeaForge */}
            <div className="p-6 sm:p-8 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <div className="text-5xl mb-4">💡</div>
              <h4 className="text-2xl font-bold text-zinc-100 mb-2">
                IdeaForge
              </h4>
              <p className="text-zinc-400 mb-4">
                A startup idea generator that helps entrepreneurs brainstorm and
                validate business concepts
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-purple-400">
                <span>Startup Advisor</span>
                <span>•</span>
                <span>Business</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

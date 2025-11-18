"use client";

import {motion} from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-20">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mt-5">
        {/* Floating ghost icon */}
        <motion.div
          className="text-9xl mb-8 inline-block"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          👻
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-100 mb-6 tracking-tight"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-400">
            kiroCore
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
        >
          Your universal AI-powered foundation. One codebase that shape-shifts
          into different apps using configs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
        >
          <Link
            href="/chat"
            className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
          >
            Start Chatting
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-800 text-zinc-100 rounded-xl font-semibold text-lg hover:bg-zinc-700 transition-colors border border-zinc-700"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

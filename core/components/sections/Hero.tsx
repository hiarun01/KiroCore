"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {getAllApps} from "@/core/services/api";

export function Hero() {
  const [appCount, setAppCount] = useState(3);

  useEffect(() => {
    getAllApps().then((apps) => {
      setAppCount(apps.length);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full mb-8 backdrop-blur-sm"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <span className="text-2xl">👻</span>
          <span className="text-sm text-zinc-300 font-medium">
            Built for Skeleton Crew Hackathon
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-100 mb-6 tracking-tight"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.1}}
        >
          One Skeleton.
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400">
            Multiple Apps.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          Transform a single codebase into specialized AI applications.
          Config-driven architecture with deep Kiro integration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.3}}
        >
          <Link
            href="/apps"
            className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Browse Apps
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>

          <a
            href="https://github.com/hiarun01/KiroCore"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-zinc-800/50 backdrop-blur-sm text-zinc-100 rounded-xl font-semibold text-lg hover:bg-zinc-700/50 transition-all border border-zinc-700 hover:border-zinc-600"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
        >
          <div className="text-center">
            <motion.div
              className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1"
              key={appCount}
              initial={{scale: 1.2, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 0.3}}
            >
              {appCount}
            </motion.div>
            <div className="text-sm text-zinc-500">AI Applications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1">
              1
            </div>
            <div className="text-sm text-zinc-500">Codebase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-zinc-100 mb-1">
              ∞
            </div>
            <div className="text-sm text-zinc-500">Possibilities</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

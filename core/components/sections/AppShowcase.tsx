"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {DynamicIcon} from "@/core/lib/icons";
import {getAllApps} from "@/core/services/api";

type App = {
  id: string;
  name: string;
  description: string;
  icon: string;
  theme: {
    primary: string;
  };
  features: string[];
  welcomeMessage?: string;
};

export function AppShowcase() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllApps()
      .then((data) => {
        // Show first 3 apps as featured
        setApps(data.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load apps:", err);
        setLoading(false);
      });
  }, []);
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900/50 to-zinc-950" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Featured Apps
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Each app has its own personality, powered by the same codebase
          </p>
        </motion.div>

        {/* App Cards */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-zinc-400">Loading featured apps...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: index * 0.1}}
              >
                <Link href={`/${app.id}`}>
                  <div className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 overflow-hidden h-full">
                    {/* Accent glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-3xl"
                      style={{backgroundColor: app.theme.primary}}
                    />

                    {/* Top bar with accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{backgroundColor: app.theme.primary}}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-3 rounded-xl"
                            style={{backgroundColor: `${app.theme.primary}20`}}
                          >
                            <DynamicIcon
                              icon={app.icon}
                              size={28}
                              className="text-3xl"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                              {app.name}
                            </h3>
                            <p className="text-sm text-zinc-500">
                              AI Assistant
                            </p>
                          </div>
                        </div>
                        <svg
                          className="w-5 h-5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all"
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
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 mb-4 leading-relaxed">
                        {app.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {app.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Preview Message */}
                      {app.welcomeMessage && (
                        <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg p-4 mt-4">
                          <div className="flex items-start gap-2">
                            <span className="text-xl">👻</span>
                            <p className="text-sm text-zinc-300 italic">
                              &ldquo;
                              {app.welcomeMessage.split(".")[0] + "."}&rdquo;
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Try Now Button */}
                      <div className="mt-4">
                        <div
                          className="w-full py-3 px-4 rounded-lg font-medium text-center transition-all group-hover:translate-x-1"
                          style={{
                            backgroundColor: `${app.theme.primary}15`,
                            color: app.theme.primary,
                          }}
                        >
                          Try {app.name} →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All Apps CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.4}}
        >
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700 hover:border-zinc-600 text-zinc-100 rounded-xl font-medium transition-all"
          >
            View All Apps
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

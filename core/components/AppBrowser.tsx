"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {DynamicIcon} from "@/core/lib/icons";

type App = {
  id: string;
  name: string;
  description: string;
  icon: string;
  theme: {
    primary: string;
    secondary?: string;
    accent?: string;
  };
  features: string[];
};

export function AppBrowser() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/apps")
      .then((res) => res.json())
      .then((data) => {
        setApps(data.apps || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load apps:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-400">Loading apps...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Browse Apps
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Choose your AI companion. Each app has its own personality and
            expertise.
          </p>
        </motion.div>

        {/* App Grid - Modern Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: index * 0.1}}
            >
              <Link href={`/${app.id}`}>
                <div className="group relative from-zinc-900 to-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300 hover:shadow-lg cursor-pointer overflow-hidden h-full">
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{backgroundColor: app.theme.primary}}
                  />

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl"
                    style={{backgroundColor: app.theme.primary}}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-3">
                      <DynamicIcon
                        icon={app.icon}
                        size={40}
                        className="text-4xl"
                      />
                    </div>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
                      {app.name}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors mb-4 line-clamp-2 flex-grow">
                      {app.description}
                    </p>
                    {/* Launch button */}
                    <div
                      className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all group-hover:translate-x-1"
                      style={{
                        backgroundColor: `${app.theme.primary}15`,
                        color: app.theme.primary,
                      }}
                    >
                      <span>Launch</span>
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {apps.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-lg">No apps available yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

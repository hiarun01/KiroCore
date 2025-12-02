"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import {DynamicIcon} from "@/core/lib/icons";
import {getAllApps, AppConfig} from "../services/api";

export function AppBrowser() {
  const [apps, setApps] = useState<AppConfig[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllApps()
      .then((apps) => {
        setApps(apps);
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

        {/* App Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.3, delay: index * 0.05}}
            >
              <Link href={`/${app.id}`}>
                <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 cursor-pointer overflow-hidden h-full">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{backgroundColor: app.theme.primary}}
                  />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <DynamicIcon
                        icon={app.icon}
                        size={32}
                        className="text-3xl shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                          {app.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors mb-4 line-clamp-2 grow">
                      {app.description}
                    </p>

                    <div
                      className="flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                      style={{color: app.theme.primary}}
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

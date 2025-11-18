"use client";

import {motion} from "framer-motion";
import {HeaderProps} from "@/core/types/components";
import {headerVariants} from "@/core/lib/animations";
import Link from "next/link";

export function Header({appName, appIcon = "👻"}: HeaderProps) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 backdrop-blur-md bg-zinc-950/90 border-b border-zinc-800 shadow-[0_1px_0_0_rgba(139,92,246,0.2)]"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span
            className="text-2xl sm:text-3xl"
            role="img"
            aria-label="App icon"
          >
            {appIcon}
          </span>
          <h1 className="text-lg sm:text-xl font-semibold text-zinc-100 truncate">
            {appName}
          </h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/docs"
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-primary transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/chat"
            className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Now
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

"use client";

import {HeaderProps} from "@/core/types/components";
import Link from "next/link";
import {useEffect, useState} from "react";
import {KiroStatus} from "@/core/components/status/KiroStatus";
import {DynamicIcon} from "@/core/lib/icons";

export function Header({appName, appIcon = "👻"}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-out">
      <header
        className={`backdrop-blur-xl bg-zinc-950/70 shadow-lg transition-all duration-700 ease-out ${
          scrolled
            ? "h-14 max-w-7xl w-full mx-4 rounded-b-2xl border border-zinc-800/50"
            : "h-16 w-full border-b border-zinc-800/50"
        }`}
        style={{
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="h-full px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <DynamicIcon
              icon={appIcon}
              size={28}
              className="text-2xl sm:text-3xl"
              aria-label="App icon"
            />
            <h1 className="text-lg sm:text-xl font-semibold text-zinc-100 truncate">
              {appName}
            </h1>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2 sm:gap-4">
            <KiroStatus />

            <Link
              href="/docs"
              className="hidden md:block px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-zinc-300 hover:text-primary transition-colors"
            >
              Docs
            </Link>

            <Link
              href="/apps"
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Browse
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

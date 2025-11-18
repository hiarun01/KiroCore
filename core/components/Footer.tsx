"use client";

import {motion} from "framer-motion";
import {FooterProps} from "@/core/types/components";
import {footerVariants} from "@/core/lib/animations";

export function Footer({
  attribution = "Built with Kiro",
  links = [],
}: FooterProps) {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 z-40 h-12 sm:h-14 backdrop-blur-md bg-zinc-950/90 border-t border-zinc-800"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-xs sm:text-sm text-zinc-400">{attribution}</p>

        {links.length > 0 && (
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline text-zinc-700">|</span>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-zinc-400 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.footer>
  );
}

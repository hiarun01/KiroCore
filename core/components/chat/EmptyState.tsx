"use client";

import {motion} from "framer-motion";
import {EmptyStateProps} from "@/core/types/components";
import {emptyStateVariants, floatingVariants} from "@/core/lib/animations";
import {DynamicIcon} from "@/core/lib/icons";

export function EmptyState({welcomeMessage, appIcon = "👻"}: EmptyStateProps) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center px-4 py-12"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={emptyStateVariants}
    >
      <motion.div
        className="mb-6"
        variants={floatingVariants}
        animate="animate"
      >
        <DynamicIcon icon={appIcon} size={96} className="text-8xl" />
      </motion.div>

      <h2 className="text-2xl font-semibold text-zinc-100 mb-3 text-center">
        {welcomeMessage}
      </h2>

      <p className="text-zinc-400 text-center max-w-md mx-auto">
        Start a conversation by typing a message below. I'm here to help! 💀
      </p>
    </motion.div>
  );
}

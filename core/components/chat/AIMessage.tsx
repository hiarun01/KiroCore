"use client";

import {motion} from "framer-motion";
import {MessageProps} from "@/core/types/components";
import {messageVariants} from "@/core/lib/animations";

export function AIMessage({content, timestamp}: MessageProps) {
  return (
    <motion.div
      className="flex items-start gap-3"
      initial="hidden"
      animate="visible"
      variants={messageVariants}
    >
      <span className="text-2xl" role="img" aria-label="AI assistant">
        👻
      </span>
      <div className="flex-1 max-w-[80%]">
        <div className="bg-zinc-800/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-zinc-700/50">
          <p className="text-sm text-zinc-100 whitespace-pre-wrap leading-relaxed">
            {content}
          </p>
          <time className="text-xs text-zinc-500 mt-2 block">
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </time>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import {motion} from "framer-motion";
import {MessageProps} from "@/core/types/components";
import {messageVariants} from "@/core/lib/animations";

export function UserMessage({content, timestamp}: MessageProps) {
  return (
    <motion.div
      className="flex justify-end"
      initial="hidden"
      animate="visible"
      variants={messageVariants}
    >
      <div className="max-w-[80%] bg-purple-700 text-white rounded-2xl px-4 py-3">
        <p className="text-sm whitespace-pre-wrap break-words">{content}</p>
        <time className="text-xs opacity-70 mt-1 block">
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </time>
      </div>
    </motion.div>
  );
}

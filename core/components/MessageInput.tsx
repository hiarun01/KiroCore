"use client";

import {useState, useRef, KeyboardEvent} from "react";
import {motion} from "framer-motion";
import {MessageInputProps} from "@/core/types/components";

export function MessageInput({
  onSend,
  disabled = false,
  placeholder = "Type your message...",
}: MessageInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value.trim());
      setValue("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = "auto";
    const newHeight = Math.min(textarea.scrollHeight, 120); // Max 5 lines (~120px)
    textarea.style.height = `${newHeight}px`;
  };

  return (
    <motion.div className="relative" animate={isFocused ? "active" : "idle"}>
      <div className="flex items-end gap-2 p-2 sm:p-3 bg-zinc-900 rounded-xl sm:rounded-2xl border-2 border-zinc-800 transition-all duration-300 focus-within:border-primary focus-within:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          placeholder={placeholder}
          rows={1}
          className="flex-1 bg-transparent text-sm sm:text-base text-zinc-100 placeholder:text-zinc-400 resize-none outline-none min-h-[24px] max-h-[120px] py-1"
          aria-label="Message input"
        />

        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg sm:rounded-xl bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform shadow-lg"
          aria-label="Send message"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-5 sm:h-5"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      {/* Mobile hint */}
      <p className="text-xs text-zinc-500 mt-2 text-center sm:hidden">
        Press Enter to send • Shift+Enter for new line
      </p>
    </motion.div>
  );
}

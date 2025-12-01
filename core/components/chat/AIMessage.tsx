"use client";

import {motion} from "framer-motion";
import {MessageProps} from "@/core/types/components";
import {messageVariants} from "@/core/lib/animations";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useState} from "react";

export function AIMessage({content, timestamp, error}: MessageProps) {
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
        <div
          className={`backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border ${
            error
              ? "bg-red-900/20 border-red-800/50"
              : "bg-zinc-800/80 border-zinc-700/50"
          }`}
        >
          <div className="text-sm text-zinc-100 leading-relaxed prose prose-invert prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code: ({inline, className, children, ...props}: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeString = String(children).replace(/\n$/, "");

                  if (!inline && match) {
                    return <CodeBlock code={codeString} language={match[1]} />;
                  }

                  return (
                    <code
                      className="bg-zinc-900 px-1.5 py-0.5 rounded text-xs font-mono text-primary"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({children}: any) => (
                  <div className="my-2">{children}</div>
                ),
                p: ({children}: any) => <p className="mb-2">{children}</p>,
                ul: ({children}: any) => (
                  <ul className="list-disc list-inside mb-2 space-y-1">
                    {children}
                  </ul>
                ),
                ol: ({children}: any) => (
                  <ol className="list-decimal list-inside mb-2 space-y-1">
                    {children}
                  </ol>
                ),
                li: ({children}: any) => (
                  <li className="text-zinc-200">{children}</li>
                ),
                strong: ({children}: any) => (
                  <strong className="font-semibold text-zinc-50">
                    {children}
                  </strong>
                ),
                em: ({children}: any) => (
                  <em className="italic text-zinc-200">{children}</em>
                ),
                a: ({href, children}: any) => (
                  <a
                    href={href}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({children}: any) => (
                  <blockquote className="border-l-4 border-zinc-700 pl-4 italic text-zinc-300 my-2">
                    {children}
                  </blockquote>
                ),
                h1: ({children}: any) => (
                  <h1 className="text-xl font-bold text-zinc-50 mb-2 mt-3">
                    {children}
                  </h1>
                ),
                h2: ({children}: any) => (
                  <h2 className="text-lg font-bold text-zinc-50 mb-2 mt-3">
                    {children}
                  </h2>
                ),
                h3: ({children}: any) => (
                  <h3 className="text-base font-semibold text-zinc-50 mb-2 mt-2">
                    {children}
                  </h3>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
          <div className="flex items-center justify-between mt-2 gap-2">
            <time className="text-xs text-zinc-500">
              {timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </time>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CodeBlock({code, language}: {code: string; language: string}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700 rounded-t-lg px-3 py-1.5">
        <span className="text-xs text-zinc-400 font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="bg-zinc-900 border border-t-0 border-zinc-700 rounded-b-lg p-3 overflow-x-auto">
        <code className="text-xs text-zinc-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}

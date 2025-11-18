"use client";

import {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.8}}
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 p-3 sm:p-4 bg-primary text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

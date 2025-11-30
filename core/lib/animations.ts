// Framer Motion animation variants
import type {Variants} from "framer-motion";

export const messageVariants: Variants = {
  hidden: {opacity: 0, y: 20, scale: 0.95},
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const headerVariants = {
  hidden: {y: -100},
  visible: {
    y: 0,
    transition: {type: "spring" as const, stiffness: 100},
  },
};

export const footerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {duration: 0.5, delay: 0.2},
  },
};

export const toggleVariants = {
  haunt: {rotate: 0},
  human: {
    rotate: 180,
    transition: {duration: 0.5},
  },
};

export const glowVariants = {
  idle: {boxShadow: "0 0 0px rgba(139, 92, 246, 0)"},
  active: {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
    transition: {duration: 0.3},
  },
};

export const emptyStateVariants = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {duration: 0.5},
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {duration: 0.3},
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as any,
  },
};

export const pageTransition = {
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -20},
  transition: {duration: 0.3, ease: "easeInOut"},
};

export const staggerContainer = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const scaleIn = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

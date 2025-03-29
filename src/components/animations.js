// Common fade in animation with customizable delay
export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay },
  }),
};

// Page transition animation
export const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Video transition animation
export const videoAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
  transition: { duration: 1 },
};

// Stagger container animation
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Hero section animation
export const heroAnimation = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

// Hero text animation
export const heroTextAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.2 },
};

// Card hover animation
export const cardHoverAnimation = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

// Image hover animation
export const imageHoverAnimation = {
  hover: {
    scale: 1.1,
    rotate: 2,
    transition: { duration: 0.3 },
  },
};

// Form field stagger animation
export const formStaggerAnimation = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Stats card animation
export const statsCardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Market trends card animation
export const trendsCardAnimation = {
  hidden: { opacity: 0, x: -20 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

// Team card animation
export const teamCardAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1]
    }
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const iconRotationAnimation = {
  hover: {
    scale: 1.1,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Section fade in animation
export const sectionFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.2
    }
  }
}; 
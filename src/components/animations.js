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
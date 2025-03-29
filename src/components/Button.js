import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  icon,
  ...props
}) => {
  // Base styles
  const baseStyles = "font-medium rounded-md transition-all duration-200 flex items-center justify-center";
  
  // Variant styles
  const variants = {
    primary: "bg-gradient-to-r from-green-400 to-blue-500 text-white hover:opacity-80",
    secondary: "bg-white text-gray-800 border-2 border-gray-300 hover:border-green-400 hover:text-green-600",
    outline: "bg-transparent border-2 border-green-400 text-green-600 hover:bg-green-400 hover:text-white",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent text-gray-600 hover:text-green-600 hover:bg-gray-100",
  };

  // Size styles
  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Disabled styles
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  // Icon styles
  const iconStyles = icon ? "gap-2" : "";

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${disabledStyles} ${iconStyles} ${className}`}
      variants={fadeIn}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button; 
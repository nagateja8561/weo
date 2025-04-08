import React, { useState, useEffect } from "react";
import { Leaf, ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <div className="fixed bottom-6 right-6 group">
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-[#00aaff] to-[#00ff77] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Scroll to Top"
        >
          {/* Animated Leaf */}
          <Leaf className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180" />
        </button>

        {/* Alternative Icon Tooltip */}
        <div className="absolute bottom-16 right-1/2 translate-x-1/2 bg-white p-2 rounded-lg shadow-md border border-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
          <ChevronUp className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    )
  );
};

export default ScrollToTopButton;
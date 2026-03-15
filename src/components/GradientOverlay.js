import React, { useRef, useEffect, useState } from "react";

const GradientOverlay = ({
  children,
  className = "",
  title,
  subtitle,
  backgroundImage
}) => {
  const titleRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screens
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Dynamically scale title if it overflows
  useEffect(() => {
    const adjustScale = () => {
      if (titleRef.current) {
        const element = titleRef.current;

        setTimeout(() => {
          const scrollWidth = element.scrollWidth;
          const offsetWidth = element.offsetWidth;

          if (scrollWidth > offsetWidth) {
            const newScale = Math.max(0.6, offsetWidth / scrollWidth);
            setScale(newScale);
          } else {
            setScale(1);
          }
        }, 50);
      }
    };

    adjustScale();
    window.addEventListener("resize", adjustScale);
    return () => window.removeEventListener("resize", adjustScale);
  }, [title]);

  return (
    <div
  className={`relative overflow-hidden h-[300px] sm:h-[360px] md:h-[500px] lg:h-[650px] ${className}`}
  style={{
    paddingTop: "var(--header-height, 80px)",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
    backgroundSize: isMobile ? "contain" : "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Floating animation */}
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(-0.5deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
          75% { transform: translateY(-6px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .floaty {
          animation: floaty 5s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 flex items-start justify-center pt-16 md:pt-28 text-center">

        <div className="max-w-4xl px-6">

          {/* Title */}
          <h1
            ref={titleRef}
            className="floaty font-black tracking-tight text-white"
            style={{
              fontSize: "clamp(26px,5vw,64px)",
              transform: `scaleX(${scale})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease"
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 md:mt-6 text-base md:text-2xl text-white/90 font-light">
              {subtitle}
            </p>
          )}

          {/* Buttons / Children */}
          {children && (
            <div className="mt-6 md:mt-8 flex justify-center gap-4 flex-wrap">
              {children}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default GradientOverlay;
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

  // Dynamically scale title to fit one line if it overflows
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
      className={`relative overflow-hidden ${className}`}
      style={{
        paddingTop: "var(--header-height, 80px)",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: backgroundImage ? "cover" : undefined,
        backgroundPosition: backgroundImage ? "top center" : undefined,
        minHeight: "calc(55vh + var(--header-height, 80px))",
      }}
    >
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

        .gradient-text {
          background: linear-gradient(90deg, #00aaff 0%, #00ff77 50%, #00e0ff 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 6px 18px rgba(0,0,0,0.45);
        }
      `}</style>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/10" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 lg:py-36">

          {/* Mobile */}
          <div className="block md:hidden text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-sm sm:text-base font-light max-w-3xl mx-auto leading-relaxed text-white/90">
                {subtitle}
              </p>
            )}

            <div className="mt-6">{children}</div>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <div className="relative" style={{ minHeight: "40vh" }}>

              {/* FULL WIDTH BOTTOM OVERLAY */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/1 via-black/10 to-transparent py-900">
              {/* <div className="absolute bottom-12 left-8"> */}
                <div className="max-w-7xl mx-auto px-8">

                  <div className="inline-block bg-black/6 backdrop-blur-sm px-6 py-5 rounded-lg">

                    <h1
                      ref={titleRef}
                      className="floaty font-black tracking-tight leading-tight text-white whitespace-nowrap"
                      style={{
                        fontSize: "clamp(20px, 5vw, 60px)",
                        lineHeight: 1,
                        maxWidth: "100%",
                        transform: `scaleX(${scale})`,
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      {title}
                    </h1>

                    {subtitle && (
                      <p className="mt-3 text-lg md:text-xl lg:text-2xl font-light text-white/90">
                        {subtitle}
                      </p>
                    )}

                    <div className="mt-4">{children}</div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GradientOverlay;
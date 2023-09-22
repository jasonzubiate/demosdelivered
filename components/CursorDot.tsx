"use client";

import { useEffect, useState } from "react";

function CursorDot() {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");

    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setTimeout(() => {
        setDotPosition({ x: mouseX, y: mouseY });
        setIsVisible(true);
      }, 75);
    });
  }, []);

  const dotStyle: React.CSSProperties = {
    transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
    opacity: isVisible ? 1 : 0,
    transition: "transform 0.1s, opacity 0.2s",
  };

  return <div className="cursor-dot" style={dotStyle}></div>;
}

export default CursorDot;

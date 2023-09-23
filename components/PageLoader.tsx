"use client";

import { gsap } from "gsap";
import { useEffect, useState } from "react";

function PageLoader({ children }: { children: React.ReactNode }) {
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScrollable(true);
    }, 3000);

    const tl = gsap.timeline();
    tl.from(".loader-wrapper", {
      duration: 2,
      scale: 0.9,
      ease: "power1.inOut",
    })
      .to(
        ".loader",
        {
          duration: 2.5,
          top: 0,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        ".clipper-left",
        {
          duration: 2,
          clipPath: "inset(0 100% 0 0)",
          ease: "power4.inOut",
        },
        ">-0.6"
      )
      .to(
        ".clipper-right",
        {
          duration: 2,
          clipPath: "inset(0 0 0 100%)",
          ease: "power4.inOut",
        },
        "<"
      )
      .to(
        ".loader-wrapper, .pre-loader",
        {
          duration: 0.2,
          opacity: 0,
          display: "none",
          ease: "power3.inOut",
          delay: 0.3,
        },
        "<"
      );
  });

  return (
    <div className={`${scrollable? "" : "overflow-y-hidden h-screen"}`}>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>

      <div className="clipper-left">
        <div className="loader-text">Demos</div>
      </div>

      <div className="clipper-right">
        <div className="loader-text">Delivered</div>
      </div>

      {children}
    </div>
  );
}

export default PageLoader;

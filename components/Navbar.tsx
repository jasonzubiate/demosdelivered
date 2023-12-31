"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  useEffect(() => {
    gsap.from("#nav", {
      duration: 1,
      yPercent: -100,
      ease: "power4.inOut",
      delay: 3,
    });
  });

  return (
    <nav id="nav">
      <p
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="nav-link"
      >
        Demos Delivered
      </p>
      <p>[ EDM, &nbsp;House, &nbsp;Techno ]</p>
    </nav>
  );
}

export default Navbar;

"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

function Navbar() {
  useEffect(() => {
    gsap.from("#nav", {
      duration: 1,
      y: -100,
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
        DemosDelivered
      </p>
      <p>2023</p>
      <p>EDM, &nbsp;House, &nbsp;Techno</p>
      <p className="nav-link">Labels</p>
    </nav>
  );
}

export default Navbar;

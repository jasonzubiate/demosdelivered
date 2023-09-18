"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

function Navbar() {
  useEffect(() => {
    gsap.from("#nav", {
      duration: 1,
      y: -100,
      delay: 3
    })
  })

  return (
    <nav id="nav">
      <p className="nav-link">LabelLinks</p>
      <p>2023</p>
      <p>EDM, &nbsp;House, &nbsp;Tech House, &nbsp;Techno</p>
      <p className="nav-link">Labels</p>
    </nav>
  );
}

export default Navbar;

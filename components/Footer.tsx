"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

function Footer() {
  useEffect(() => {
    gsap.from("#footer", {
      duration: 1,
      yPercent: 100,
      ease: "power4.inOut",
      delay: 3,
    });
  });

  return (
    <footer id="footer">
      <p>©2023</p>
      <p>34.0549, 118.2426</p>
      <p>[ US ]</p>
      <a href="https://www.jasonzubiate.com/" className="nav-link hover-link">
        Creator
      </a>
    </footer>
  );
}

export default Footer;

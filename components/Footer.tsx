"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

function Footer() {
  useEffect(() => {
    gsap.from("#footer", {
      duration: 1,
      y: 100,
      delay: 3
    })
  })

  return (
    <footer id="footer">
      <p>New Labels added weekly</p>
      <a href="https://www.jasonzubiate.com/" className="nav-link">
        Creator
      </a>
    </footer>
  );
}

export default Footer;

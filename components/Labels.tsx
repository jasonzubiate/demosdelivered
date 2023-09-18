"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Labels() {
  useEffect(() => {
    gsap.to("#labels", {
      backgroundColor: "white",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".labels-list",
        start: "-50% center"
      }
    })
  }, [])

  return (
    <section id="labels">
      <h2>20 Active Labels</h2>
      <ul className="labels-list">
        <li>Experts Only</li>
        <li>Catch and Release</li>
        <li>Hellbent</li>
      </ul>
    </section>
  );
}

export default Labels;

"use client";

import { Labels } from "@/components";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { getRandomCharacter } from "@/utils/TextShuffle";

export default function Home() {
  const h1Ref = useRef(null);
  const originalText = "LabelLinks";

  useEffect(() => {
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

    // Function to shuffle text
    const shuffleText = () => {
      let shuffledText = "";
      for (let i = 0; i < originalText.length; i++) {
        shuffledText += getRandomCharacter();
      }
      h1Ref.current.textContent = shuffledText;
    };

    setTimeout(() => {
      clearInterval(shuffleInterval);
      h1Ref.current.textContent = originalText;
    }, 3200);

    // Start shuffling when the component mounts
    const shuffleInterval = setInterval(() => {
      shuffleText();
    }, 40); // Adjust the interval duration as needed

    return () => {
      clearInterval(shuffleInterval);
    };
  }, []);

  return (
    <div className="container">
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>

      <div className="clipper-left">
        <div className="loader-text">Label</div>
      </div>

      <div className="clipper-right">
        <div className="loader-text">Links</div>
      </div>

      <main>
        <section id="hero">
          <h1 ref={h1Ref}>LabelLinks</h1>
        </section>
        <Labels />
      </main>
    </div>
  );
}

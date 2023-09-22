"use client";

import { Labels } from "@/components";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { getRandomCharacter } from "@/utils/TextShuffle";

export default function Home() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const originalText = "DemosDelivered";
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScrollable(true);
    }, 3000);

    gsap.from(h1Ref.current, {
      duration: 1,
      scale: 0.8,
      ease: "power4.inOut",
      delay: 2,
    });

    // Function to shuffle text
    const shuffleText = () => {
      let shuffledText = "";
      for (let i = 0; i < originalText.length; i++) {
        shuffledText += getRandomCharacter();
      }
      if (h1Ref.current) {
        h1Ref.current.textContent = shuffledText;
      }
    };

    setTimeout(() => {
      clearInterval(shuffleInterval);
      if (h1Ref.current) {
        h1Ref.current.textContent = originalText;
      }
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
    <main className={`${scrollable ? "h-auto" : "h-screen"}`}>
      <section id="hero">
        <video loop autoPlay>
          <source src="/assets/video/videoBg.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <h1 ref={h1Ref}>{originalText}</h1>
      </section>
      <Labels />
    </main>
  );
}

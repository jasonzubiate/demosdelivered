"use client";

import { Labels } from "@/components";
import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getRandomCharacter } from "@/utils/TextShuffle";

import mouseIcon from "@/public/assets/mouse-minimal.png";
import sideFrame from "@/public/assets/frame-side.png";
import tlFrame from "@/public/assets/frame-tl.png";
import blFrame from "@/public/assets/frame-bl.png";
import trFrame from "@/public/assets/frame-tr.png";
import brFrame from "@/public/assets/frame-br.png";

export default function Home() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const originalText = "Demos Delivered";
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setScrollable(true);
    }, 3000);

    gsap.from(".frame", {
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.from(".sub-header", {
      duration: 1.5,
      yPercent: 100,
      ease: "power4.inOut",
      delay: 3,
    });
    gsap.from(".hero-info", {
      duration: 1.5,
      opacity: 0,
      ease: "power4.inOut",
      delay: 4,
    });
    gsap.from(h1Ref.current, {
      duration: 2,
      scale: 3,
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
    }, 4000);

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
        <div className="flex flex-col justify-between h-full">
          <Image
            className="frame"
            src={tlFrame}
            alt="frame"
            width={24}
            height={24}
          />
          <Image
            className="frame"
            src={sideFrame}
            alt="frame"
            width={1}
            height={24}
          />
          <Image
            className="frame"
            src={blFrame}
            alt="frame"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col justify-around items-center h-full">
          <p className="text-[16px] secondary-font hero-info">New Labels Added Weekly</p>
          <div className="flex flex-col justify-center items-center gap-2 py-10">
            <div className="mask">
              <p className="text-[16px] secondary-font sub-header">
                Submit your latest tracks
              </p>
            </div>
            <h1 ref={h1Ref}>Demos Delivered</h1>
            <div className="mask">
              <p className="text-[16px] secondary-font sub-header">
                To EDM&apos;S hottest labels
              </p>
            </div>
          </div>
          <div className="hero-info flex gap-2">
            <Image src={mouseIcon} width={24} height={24} alt="mouse" />
            <p className="text-[16px] secondary-font">Scroll</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end h-full">
          <Image
            className="frame"
            src={trFrame}
            alt="frame"
            width={24}
            height={24}
          />
          <Image
            className="frame"
            src={sideFrame}
            alt="frame"
            width={1}
            height={24}
          />
          <Image
            className="frame"
            src={brFrame}
            alt="frame"
            width={24}
            height={24}
          />
        </div>
      </section>
      <Labels />
    </main>
  );
}

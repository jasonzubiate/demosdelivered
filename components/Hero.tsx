"use client";

import Image from "next/image";

import { useEffect } from "react";

import { heroAnimation } from "@/animations";


import mouseIcon from "@/public/assets/mouse-minimal.png";
import sideFrame from "@/public/assets/frame-side.png";
import tlFrame from "@/public/assets/frame-tl.png";
import blFrame from "@/public/assets/frame-bl.png";
import trFrame from "@/public/assets/frame-tr.png";
import brFrame from "@/public/assets/frame-br.png";

function Hero() {
  useEffect(() => {
    heroAnimation();    
  }, []);

  return (
    <section
      id="hero"
      className="flex items-center justify-between px-2 py-16 lg:px-8 lg:py-[6rem] h-screen uppercase"
    >
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
        <p className="text-[16px] secondary-font-regular hero-info">
          New Labels Added Weekly
        </p>
        <div className="flex flex-col justify-center items-center gap-2 py-10">
          <div className="mask">
            <p className="text-[16px] secondary-font-regular sub-header">
              Submit your latest tracks
            </p>
          </div>
          <h1 className="h1">Demos Delivered</h1>
          <div className="mask">
            <p className="text-[16px] secondary-font-regular sub-header">
              To EDM&apos;S hottest labels
            </p>
          </div>
        </div>
        <div className="hero-info flex gap-2">
          <Image src={mouseIcon} width={24} height={24} alt="mouse" />
          <p className="text-[16px] secondary-font-regular">Scroll</p>
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
  );
}

export default Hero;

"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { LabelCardListProps } from "@/types";

import { LabelCard } from "@/components";

function LabelCardList({ labels }: LabelCardListProps) {
  return (
    <ul className="labels-list flex flex-col gap-3 mt-5 lg:mt-20 lg:gap-4">
      {labels.map((label) => (
        <LabelCard key={label.id} label={label} />
      ))}
    </ul>
  );
}

export default function Labels() {
  const [labels, setLabels] = useState([]);

  async function getLabels() {
    const response = await fetch("/api/labels");
    const data = await response.json();
    setLabels(data);
  }

  useEffect(() => {
    getLabels();
    // gsap.to("#labels", {
    //   backgroundColor: "#0F0F0F",
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#labels",
    //     start: "top 80%",
    //   },
    // });
    // gsap.from(".labels-header", {
    //   duration: 1,
    //   yPercent: 100,
    //   ease: "power2.inOut",
    //   scrollTrigger: {
    //     trigger: "#labels",
    //     start: "top 80%",
    //   },
    // });
    // gsap.from(".label-card", {
    //   opacity: 0,
    //   yPercent: 65,
    //   stagger: 0.5,
    //   scrollTrigger: {
    //     trigger: "#labels",
    //     start: "top center",
    //     end: "bottom bottom",
    //     scrub: true,
    //     once: true,
    //   },
    // });
  }, []);

  return (
    <section
      id="labels"
      className="mb-14 lg:mb-20 px-[1rem] lg:px-[3rem] overflow-hidden"
    >
      <div className="overflow-hidden">
        <h2 className="labels-header text-[20px] font-medium uppercase lg:text-5xl ">
          20 Active Labels
        </h2>
        <LabelCardList labels={labels} />
      </div>
    </section>
  );
}

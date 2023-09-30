"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { LabelCardListProps } from "@/types";

import { LabelCard } from "@/components";

function LabelCardList({ labels }: LabelCardListProps) {
  return (
    <ul className="labels-list flex flex-col">
      {labels.map((label) => (
        <LabelCard key={label.id} label={label}/>
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
    gsap.from(".labels-header", {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#labels",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <section id="labels" className="mb-14 lg:mb-20 px-0">
      <div className="labels-header flex items-center gap-2 text-sm px-2 lg:px-6 mb-5 lg:mb-10">
        <div className="status-dot bg-[#a9f039]"></div>
        <h2 className="font-[400] uppercase ">Featured Labels</h2>
      </div>
      <LabelCardList labels={labels} />
    </section>
  );
}

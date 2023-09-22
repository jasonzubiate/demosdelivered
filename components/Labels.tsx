"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import data from "@/json/database.json";
import { LabelCardProps } from "@/types";

import Image from "next/image";
import arrow from "@/public/assets/arrow-up-right.png";

function LabelCard({ label }: LabelCardProps) {
  function redirectToLabel() {
    if (label.accepting && label.url) {
      if (
        label.submissionMethod === "trackstack" ||
        label.submissionMethod === "custom" ||
        label.submissionMethod === "talentpool"
      )
        window.open(label.url, "_blank");
      else if (label.submissionMethod === "email") {
        const subject = "Demo Submission: [Your Name] - [Song Title]";
        const mailToUrl = `mailto:${label.url}?subject=${encodeURIComponent(
          subject
        )}`;
        window.location.href = mailToUrl;
      }
    }
  }

  return (
    <li className="label-card" onClick={redirectToLabel}>
      <div className="label-img">
        <Image
          src={`/../assets/img/${label.img}`}
          alt={label.name}
          fill
          priority
        />
      </div>
      <div className="flex flex-col justify-between  w-full font-medium uppercase">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-0 lg:gap-1">
            <div className="text-lg cursor-pointer text-[16px] lg:text-5xl ">
              {label.name}
            </div>
            <div className="flex flex-col gap-0 lg:gap-2 text-[10px] lg:text-[1rem] lg:flex-row">
              <label htmlFor="label_description ">({label.description})</label>
              <span className="hidden lg:block">|</span>
              <label htmlFor="label_description">
                ({label.genres.join(", ")})
              </label>
              <label htmlFor="artists" className="lg:hidden">
                (Artists: {label.featuredArtists.join(", ")})
              </label>
            </div>
          </div>
          <div>
            <Image
              src={arrow}
              className="link-arrow cursor-pointer"
              alt="arrow"
            />
          </div>
        </div>
        <div className="flex justify-between w-full text-[10px] lg:text-[1rem]">
          <div className="flex justify-between gap-1 lg:gap-4 ">
            {Object.entries(label.contactInfo.socialMedia)
              .filter((href) => href != null)
              .map(([name, href]) => (
                <a href={href} key={name}>
                  {name}
                </a>
              ))}
          </div>
          <label htmlFor="artists" className="text=[1rem] hidden lg:block">
            (Artists {label.featuredArtists.join(", ")})
          </label>
          <div className="flex items-center gap-1 lg:gap-2">
            <div
              className={`status-dot ${
                label.accepting ? "bg-[#7DFFA2]" : "bg-[#FF7D7D]"
              }`}
            ></div>
            <label htmlFor="status">
              {label.accepting ? "Accepting" : "Not Accepting"}
            </label>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Labels() {
  const [labels, setLabels] = useState([]);

  const fetchLabels = async () => {
    const resonse = await fetch("/api/label");
    const data = await resonse.json();
    setLabels(data);
    console.log(labels);
  };

  useEffect(() => {
    fetchLabels();
    gsap.to("#labels", {
      backgroundColor: "#f5f5f5",
      duration: 1,
      scrollTrigger: {
        trigger: "#labels",
        start: "top 80%",
      },
    });
    gsap.from(".labels-header", {
      duration: 1,
      yPercent: 100,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#labels",
        start: "top 80%",
      },
    });
    gsap.from(".label-card", {
      opacity: 0,
      yPercent: 65,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#labels",
        start: "top 40%",
        end: "bottom bottom",
        scrub: true,
        once: true,
      },
    });
  }, []);

  return (
    <section
      id="labels"
      className="pt-20 lg:pt-[128px] pb-20 px-4 lg;px-5 font-bold overflow-hidden w-full"
    >
      <div className="overflow-hidden">
        <h2 className="labels-header text-[20px] font-medium uppercase lg:text-5xl ">
          20 Active Labels
        </h2>
      </div>
      <ul className="labels-list flex flex-col gap-3 mt-5 lg:mt-20 lg:gap-4">
        {data.labels.map((label) => (
          <LabelCard label={label} key={label.id} />
        ))}
      </ul>
    </section>
  );
}

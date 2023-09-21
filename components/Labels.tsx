"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import data from "@/json/database.json";
import { LabelCardProps } from "@/types";

import Image from "next/image";
import arrow from "@/public/assets/arrow-up-right.png";

export default function Labels() {
  useEffect(() => {
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
      className="pt-[128px] pb-20 px-5 font-bold overflow-hidden"
    >
      <div className="overflow-hidden">
        <h2 className="labels-header text-5xl font-medium uppercase">
          20 Active Labels
        </h2>
      </div>
      <ul className="labels-list mt-20 flex flex-col gap-4">
        {data.labels.map((label) => (
          <LabelCard label={label} key={label.id} />
        ))}
      </ul>
    </section>
  );
}

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
    <li className="label-card cursor-pointer" onClick={redirectToLabel}>
      <div className="label-img">
        <Image
          src={`/../assets/img/${label.img}`}
          alt={label.name}
          width={180}
          height={180}
          priority
        />
      </div>
      <div className="flex flex-col justify-between  w-full font-medium uppercase">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1">
            <div className="text-5xl cursor-pointer">{label.name}</div>
            <div className="flex gap-2">
              <label htmlFor="label_description">({label.description})</label>|
              <label htmlFor="label_description">
                ({label.genres.join(", ")})
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
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-4">
            {Object.entries(label.contactInfo.socialMedia)
              .filter(([name, href]) => href != null)
              .map(([name, href]) => (
                <a className="text-[1rem]" href={href} key={name}>
                  {name}
                </a>
              ))}
          </div>
          <label className="text=[1rem]">
            Featured Artists ({label.featuredArtists.join(", ")})
          </label>
          <div className="flex items-center gap-2">
            <div
              className={`status-dot ${
                label.accepting ? "bg-[#7DFFA2]" : "bg-[#FF7D7D]"
              }`}
            ></div>
            <label htmlFor="status">
              {label.accepting ? "Accepting Demos" : "Not Accepting Demos"}
            </label>
          </div>
        </div>
      </div>
    </li>
  );
}

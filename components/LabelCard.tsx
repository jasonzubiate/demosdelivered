"use client";

import { LabelCardProps } from "@/types";
import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

function LabelCard({ label }: LabelCardProps) {
  // useEffect(() => {
  //   gsap.from(".label-card", {
  //     opacity: 0,
  //     stagger: 0.5,
  //     scrollTrigger: {
  //       trigger: "#labels",
  //       start: "top 90%",
  //       scrub: true,
  //       once: true,
  //       markers: true,
  //     },
  //   });
  // }, []);

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
      <label
        htmlFor="label_name"
        className="text-lg lg:text-[48px] uppercase font-semibold lg:tracking-[-1px]"
      >
        {label.name}
      </label>

      <div className="label-img">
        <Image
          src={label.img}
          alt={label.id}
          priority
          quality={100}
          fill
          className="rounded-md"
        />
      </div>

      <div className="flex flex-col items-end text-[10px] lg:text-[14px] leading-none lg:leading-tight">
        <p className="uppercase ">{label.description}</p>
        <p className="text-[#8e8b86] ">
          {label.accepting ? "Accepting" : "Not Accepting"}
        </p>
      </div>
    </li>
  );
}

export default LabelCard;

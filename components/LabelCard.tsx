"use client";

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
        <Image src={label.img} alt={label.name} fill priority />
      </div>
      <div className="flex flex-col justify-between  w-full font-medium uppercase">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-0 lg:gap-1">
            <div className="text-lg cursor-pointer font-normal text-[14px] lg:text-4xl ">
              {label.name}
            </div>
            <div className="secondary-font-light flex flex-col gap-0 lg:gap-2 text-[12px] font-thin lg:text-[1.25rem] lg:flex-row">
              <label htmlFor="label_description">{label.description}</label>
              <span className="hidden lg:block">|</span>
              <label htmlFor="label_description">
                {label.genres.join(", ")}
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
        <div className="secondary-font-light font-thin flex justify-between w-full text-[12px] lg:text-[1.25rem]">
          <div className="flex justify-between gap-1 lg:gap-4 ">
            {Object.entries(label.contactInfo.socialMedia)
              .filter((href) => href != null)
              .map(([name, href]) => (
                <a className="hover-link" href={href} key={name}>
                  {name}
                </a>
              ))}
          </div>
          {/* <label htmlFor="artists" className="text=[1rem] hidden lg:block">
            [ Artists: {label.featuredArtists.join(", ")} ]
          </label> */}
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

export default LabelCard;

import { gsap } from "gsap";
import { getRandomCharacter } from "@/utils/TextShuffle";

export function preLoaderAnimation() {
  document.documentElement.style.height = "100%";
  document.body.style.height = "100%";

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
    )
    .add(() => {
      document.documentElement.style.height = "";
      document.body.style.height = "";
    });
}

export function heroAnimation() {
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
  gsap.from(".h1", {
    duration: 2,
    scale: 3,
    ease: "power4.inOut",
    delay: 2,
  });

  const originalText = "Demos Delivered";

  const shuffleText = () => {
    const shuffledText = Array.from(originalText, getRandomCharacter).join("");
    const h1Elements = document.querySelectorAll(".h1");
    h1Elements.forEach((element) => {
      element.textContent = shuffledText;
    });
  };

  setTimeout(() => {
    clearInterval(shuffleInterval);
    const h1Elements = document.querySelectorAll(".h1");
    h1Elements.forEach((element) => {
      element.textContent = originalText;
    });
  }, 4000);

  const shuffleInterval = setInterval(() => {
    shuffleText();
  }, 40); 

  return () => {
    clearInterval(shuffleInterval);
  };
}



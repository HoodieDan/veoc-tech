import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";

export const useGsapAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    Splitting({ target: ".reveal__text", by: "lines" });
    Splitting({ target: ".fade__text", by: "lines" });
    Splitting({ target: ".fade__up__text", by: "lines" });

    const elements = document.querySelectorAll(
      ".reveal__text, .fade__text, .fade__up__text, .inset__reveal__image"
    );

    elements.forEach((el) => {
      if (el.classList.contains("reveal__text")) {
        gsap.fromTo(
          el,
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            ease: "power3.inOut",
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "bottom bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
        gsap.fromTo(
          el.querySelectorAll(".word"),
          { y: 200 },
          {
            y: 0,
            stagger: 0.05,
            ease: "power3.inOut",
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "bottom bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (el.classList.contains("fade__up__text")) {
        gsap.fromTo(
          el,
          { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
          {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
            ease: "power3.inOut",
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "bottom bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
        gsap.fromTo(
          el.querySelectorAll(".word"),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.01,
            ease: "power3.inOut",
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "bottom bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (el.classList.contains("fade__text")) {
        gsap.fromTo(
          el.querySelectorAll(".word"),
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: "power3.inOut",
            duration: 1.2,
            scrollTrigger: {
              trigger: el,
              start: "bottom bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      if (el.classList.contains("inset__reveal__image")) {
        gsap.fromTo(
          el,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            stagger: 0.03,
            ease: "power3.inOut",
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "center bottom",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    });

    ScrollTrigger.refresh();
    console.log("ScrollTriggers created.");

    return () => ScrollTrigger.killAll(); // Cleanup on unmount
  }, []);
};

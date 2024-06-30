import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
const isMobile = window.matchMedia("(max-width:1024px)").matches;

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("loaded successfully");
// });

// window.addEventListener("load", () => {
//   document.getElementById("loading-box").style.display = "none";
// });

document.getElementById("top").addEventListener("click", () => {
  document.getElementById("parallax-hero").remove();
  document.getElementById("hero").style.display = "flex";
  document.querySelector(".hero-title").style.opacity = "1";
  document.querySelector(".hero-cta").style.opacity = "1";
  document.querySelector("#top span").remove();
});

document.onreadystatechange = function () {
  document.getElementById("loading-box").style.display = "none";
};

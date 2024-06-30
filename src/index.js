import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("loaded successfully");
// });

// window.addEventListener("load", () => {
//   document.getElementById("loading-box").style.display = "none";
// });

document.onreadystatechange = function () {
  document.getElementById("loading-box").style.display = "none";
};

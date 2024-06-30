const parallax_El = document.querySelectorAll(".parallax");
const main = document.querySelector("main");
let xValue = 0,
  yValue = 0;

let rotateDegree = 0;

function update(cursorPosition) {
  parallax_El.forEach((el) => {
    let { speedx } = el.dataset;
    let { speedy } = el.dataset;
    let { speedz } = el.dataset;
    let rotationSpeed = el.dataset.rotation;
    let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
    let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
    el.style.transform = `perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
      rotateDegree * rotationSpeed
    }deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px)) `;
  });
}
update(0);

//GSAP Animation//
let timeline = gsap.timeline();

window.addEventListener("mousemove", (e) => {
  if (timeline.isActive()) return;
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;
  rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
  update(e.clientX);
});

if (window.innerWidth >= 725) {
  main.style.maxHeight = `${window.innerWidth * 0.6}px`;
} else {
  main.style.maxHeight = `${window.innerWidth * 1.6}px`;
}

setTimeout(() => {
  parallax_El.forEach((el) => {
    el.style.transition = "0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)";
  });
}, timeline.endTime() * 1000);
Array.from(parallax_El)
  .filter((el) => !el.classList.contains("text"))
  .forEach((el) => {
    timeline.from(
      el,
      {
        top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
        duration: 3.5,
        ease: "power3.out",
      },
      "1"
    );
  });

timeline
  .from(
    ".text h1",
    {
      y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 200,
      duration: 2,
    },
    "2.5"
  )
  .from(
    ".text h2",
    {
      y: -150,
      opacity: 0,
      duration: 1.5,
    },
    "3"
  )
  .from(
    ".hide",
    {
      opacity: 0,
      duration: 1.5,
    },
    "3"
  );

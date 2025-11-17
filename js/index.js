document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
  });
});

const burger = document.getElementById("burgerBtn");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");

burger.onclick = () => {
  menu.classList.add("active");
};

closeBtn.onclick = () => {
  menu.classList.remove("active");
};

document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains("active");

    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("active"));

    if (!isActive) {
      item.classList.add("active");
    }
  });
});

const slider = document.querySelector(".deals-slider");

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active-drag");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active-drag");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active-drag");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

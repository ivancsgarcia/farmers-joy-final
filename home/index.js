document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const translateY = scrollPosition * 0.5; // Adjust the multiplier for the desired effect
  document.querySelector(
    ".scrolling-section"
  ).style.transform = `translateY(${translateY}px)`;
});

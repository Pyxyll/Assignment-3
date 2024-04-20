document.querySelector(".hover-image").addEventListener("mousemove", (e) => {
  const { left, top, width, height } = e.target.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  e.target.style.setProperty("--rotate-x", y * 50 + "deg");
  e.target.style.setProperty("--rotate-y", x * -50 + "deg");
});

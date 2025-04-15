(() => {
  document.body.onmousemove = (e) => {
    const constraint = 40;
    const face = document.querySelector(".pfp-icon");
    window.requestAnimationFrame(() => {
      const { x, y, width, height } = face.getBoundingClientRect();
      const rotateX = -((e.clientY - y - height / 2) / constraint);
      const rotateY = (e.clientX - x - width / 2) / constraint;
      face.style.transform = `perspective(100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };
  document.querySelectorAll(".work-item").forEach((item) =>
    item.addEventListener("mouseenter", () => {
      document.querySelector(".work-hover-bg").style.transform =
        `translateY(${item.offsetTop}px)`;
    }),
  );
  document.querySelectorAll(".project-card").forEach((item) =>
    item.addEventListener("mouseenter", () => {
      document.querySelector(".project-hover-bg").style.transform =
        `translateX(${item.offsetLeft}px)`;
    }),
  );
})();

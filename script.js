(() => {
  document.body.onmousemove = (e) => {
    const face = document.querySelector(".pfp-icon");
    const { x, y, width, height } = face.getBoundingClientRect();
    const rotateX = -((e.clientY - y - height / 2) / 40);
    const rotateY = (e.clientX - x - width / 2) / 40;
    face.style.transform = `perspective(100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  let workJustEntered = false;
  document.querySelector(".work-items").addEventListener("mouseenter", () => {
    workJustEntered = true;
  });
  document.querySelector(".work-items").addEventListener("mouseleave", () => {
    workJustEntered = false;
  });

  document.querySelectorAll(".work-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const hoverBg = document.querySelector(".work-hover-bg");
      if (workJustEntered) {
        hoverBg.style.transition = "none";
        hoverBg.style.transform = `translateY(${item.offsetTop}px)`;
        void hoverBg.offsetHeight;
        workJustEntered = false;
      }
      hoverBg.style.transition =
        "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic)";
      hoverBg.style.transform = `translateY(${item.offsetTop}px)`;
      hoverBg.style.opacity = "1";
    });
    item.addEventListener("mouseleave", () => {
      document.querySelector(".work-hover-bg").style.opacity = "0";
    });
  });

  let projectsJustEntered = false;
  document
    .querySelector(".projects-grid")
    .addEventListener("mouseenter", () => {
      projectsJustEntered = true;
    });
  document
    .querySelector(".projects-grid")
    .addEventListener("mouseleave", () => {
      projectsJustEntered = false;
    });

  document.querySelectorAll(".project-card").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const hoverBg = document.querySelector(".project-hover-bg");
      if (projectsJustEntered) {
        hoverBg.style.transition = "none";
        hoverBg.style.transform = `translateX(${item.offsetLeft}px)`;
        hoverBg.style.width = `${item.offsetWidth}px`;
        void hoverBg.offsetHeight;
        projectsJustEntered = false;
      }
      hoverBg.style.transition =
        "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic), width 0.25s var(--ease-out-cubic)";
      hoverBg.style.transform = `translateX(${item.offsetLeft}px)`;
      hoverBg.style.width = `${item.offsetWidth}px`;
      hoverBg.style.opacity = "1";
    });
    item.addEventListener("mouseleave", () => {
      document.querySelector(".project-hover-bg").style.opacity = "0";
    });
  });
})();

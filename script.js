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
  let justEnteredWorkItems = false;
  const workItemsContainer = document.querySelector(".work-items");
  if (workItemsContainer) {
    workItemsContainer.addEventListener("mouseenter", () => {
      justEnteredWorkItems = true;
    });
    workItemsContainer.addEventListener("mouseleave", () => {
      justEnteredWorkItems = false;
    });
  }
  document.querySelectorAll(".work-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const hoverBg = document.querySelector(".work-hover-bg");
      if (justEnteredWorkItems) {
        hoverBg.style.transition = "none";
        hoverBg.style.transform = `translateY(${item.offsetTop}px)`;
        void hoverBg.offsetHeight;
        hoverBg.style.transition =
          "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic)";
        hoverBg.style.opacity = "1";
        justEnteredWorkItems = false;
      } else {
        hoverBg.style.transition =
          "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic)";
        hoverBg.style.transform = `translateY(${item.offsetTop}px)`;
        hoverBg.style.opacity = "1";
      }
    });
    item.addEventListener("mouseleave", () => {
      const hoverBg = document.querySelector(".work-hover-bg");
      hoverBg.style.opacity = "0";
    });
  });
  let justEnteredProjects = false;
  const projectsGrid = document.querySelector(".projects-grid");
  if (projectsGrid) {
    projectsGrid.addEventListener("mouseenter", () => {
      justEnteredProjects = true;
    });
    projectsGrid.addEventListener("mouseleave", () => {
      justEnteredProjects = false;
    });
  }
  document.querySelectorAll(".project-card").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const hoverBg = document.querySelector(".project-hover-bg");
      if (justEnteredProjects) {
        hoverBg.style.transition = "none";
        hoverBg.style.transform = `translateX(${item.offsetLeft}px)`;
        hoverBg.style.width = `${item.offsetWidth}px`;
        void hoverBg.offsetHeight;
        hoverBg.style.transition =
          "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic), width 0.25s var(--ease-out-cubic)";
        hoverBg.style.opacity = "1";
        justEnteredProjects = false;
      } else {
        hoverBg.style.transition =
          "transform 0.25s var(--ease-out-cubic), opacity 0.25s var(--ease-out-cubic), width 0.25s var(--ease-out-cubic)";
        hoverBg.style.transform = `translateX(${item.offsetLeft}px)`;
        hoverBg.style.width = `${item.offsetWidth}px`;
        hoverBg.style.opacity = "1";
      }
    });
    item.addEventListener("mouseleave", () => {
      const hoverBg = document.querySelector(".project-hover-bg");
      hoverBg.style.opacity = "0";
    });
  });
})();

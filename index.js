let constraint = 40;
let mouseOverContainer = document.getElementsByTagName("body")[0];
let face = document.getElementsByClassName("penguin-drawing")[0];

function transforms(x, y, el) {
  const box = el.getBoundingClientRect();
  const calcX = -(y - box.y - box.height / 2) / constraint;
  const calcY = (x - box.x - box.width / 2) / constraint;
  return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
}

function transformElement(el, xyEl) {
  el.style.transform = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = (e) => {
  const xy = [e.clientX, e.clientY];
  const position = xy.concat([face]);
  window.requestAnimationFrame(() => {
    transformElement(face, position);
  });
};

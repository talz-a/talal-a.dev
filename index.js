(() => {
  let constraint = 25;
  let mouseOverContainer = document.getElementsByTagName("body")[0];
  let face = document.getElementById("window");

  function transforms(x, y, el) {
    let box = el.getBoundingClientRect();
    let calcX = -(y - box.y - box.height / 2) / constraint;
    let calcY = (x - box.x - box.width / 2) / constraint;
    return (
      "perspective(100px) " +
      "   rotateX(" +
      calcX +
      "deg) " +
      "   rotateY(" +
      calcY +
      "deg) "
    );
  }

  function transformElement(el, xyEl) {
    el.style.transform = transforms.apply(null, xyEl);
  }

  mouseOverContainer.onmousemove = (e) => {
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([face]);

    window.requestAnimationFrame(() => {
      transformElement(face, position);
    });
  };
})();

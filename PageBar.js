let bar;

function pb_init({
  color = "#ff0",
  height = "5",
  shadow = "10px",
  shadowColor = "#f00",
  borderRadius = "10",
} = {}) {
  const style = document.createElement("style");
  style.textContent = `
    .bar{
    height:${height}px;
    width:var(--width);
    background:${color};
    filter:drop-shadow(0 0 ${shadow}px ${shadowColor});
    position:fixed;
    top:0;
    left:0;
    border-radius:${borderRadius}px;
    z-index:10000;
  }`;
  bar = document.createElement("div");
  bar.classList.add("bar");
  bar.style.setProperty("--width", "0");
  document.body.appendChild(style);
  document.body.appendChild(bar);
}

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    (htmlElement.scrollTop /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  bar.style.setProperty("--width", percentOfScreenHeightScrolled + "%");
}

pb_init();
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

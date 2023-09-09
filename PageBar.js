let pb_color = "#ff0"; 
let pb_height = "5";
let pb_shadow = "10px";
let pb_shadowColor = "#f00";
let pb_borderRadius = "10";

function init(color,height,shadow,shadowColor,border){
  let style = document.createElement('style');
  style.textContent=`
  .bar{
  height:${height}px;
  width:var(--width);
  background:${color};
  filter:drop-shadow(0 0 ${shadow}px ${shadowColor});
  position:fixed;
  top:0;
  left:0;
  border-radius:${border}px;
  z-index:10000;
}`;
  let bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style="--width:0;";
  document.body.appendChild(style);
  document.body.appendChild(bar);
}
init(color,height,shadow,shadowColor,borderRadius);
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
var bar = document.querySelector('.bar');

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =((htmlElement.scrollTop ) / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  bar.style.setProperty("--width",percentOfScreenHeightScrolled + '%');
}

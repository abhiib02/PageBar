

function pb_init(color,height,shadow,shadowColor,border){
  let local_color = color ? color : "#ff0"; 
  let local_height = height ? height : "5";
  let local_shadow = shadow ? shadow : "10px";
  let local_shadowColor = shadowColor ? shadowColor : "#f00";
  let local_borderRadius = border ? border : "10";
  let style = document.createElement('style');
  style.textContent=`
  .bar{
  height:${local_height}px;
  width:var(--width);
  background:${local_color};
  filter:drop-shadow(0 0 ${local_shadow}px ${local_shadowColor});
  position:fixed;
  top:0;
  left:0;
  border-radius:${local_borderRadius}px;
  z-index:10000;
}`;
  let bar = document.createElement('div');
  bar.classList.add('bar');
  bar.style="--width:0;";
  document.body.appendChild(style);
  document.body.appendChild(bar);
}
pb_init();
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)
var bar = document.querySelector('.bar');

function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =((htmlElement.scrollTop ) / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  bar.style.setProperty("--width",percentOfScreenHeightScrolled + '%');
}

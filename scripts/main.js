let text = document.getElementById("text");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");
let layer6 = document.getElementById("layer6");
let layer7 = document.getElementById("layer7");
let layer8 = document.getElementById("layer8");
let layer9 = document.getElementById("layer9");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  layer2.style.top = value * 0.66 + "px";
  layer3.style.top = value * 0.5 + "px";
  layer4.style.top = value * 0.33 + "px";
  layer5.style.left = value * 0.15 + "px";
  layer6.style.left = value * 0.15 + "px";
  layer7.style.left = value * 0.15 + "px";
  layer8.style.left = value * -0.15 + "px";
  layer9.style.top = value * 0.05 + "px";
});

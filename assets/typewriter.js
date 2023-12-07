const type1_str = "Mission Statement";
const type2_str = "Our Goals";
const type3_str = "Meet Rosalyn!";
const type4_str = "More About Minnie's Helping Hands";
const type5_str = "Our Impact";
const type6_str = "Services";
const type7_str = "Upcoming Events and Programs";
const type8_str = "Recent Accomplishments and Goals";

window.addEventListener("load", function() {
  executeAsynchronously([
    [type1_str, "type1", 200],
    [type2_str, "type2", 200],
    [type3_str, "type3", 100],
    [type4_str, "type4", 100],
    [type5_str, "services", 100],
    [type6_str, "services_2", 150],
    [type7_str, "services_3", 150],
    [type8_str, "accomplish", 75]
  ]);
});

function executeAsynchronously(texts) {
  texts.forEach(args => type(...args));
}

function type(text, id, delay) {
  const elem = document.getElementById(id);
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      elem.textContent += text.charAt(i);
    }, i * delay);
  }
}
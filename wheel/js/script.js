let wheel = document.getElementById("wheel");
let selectedSection;

function rotateWheel(deg) {
  return new Promise((resolve) => {
    let duration = 5000;

    selectedSection ? (selectedSection.innerText = "") : null;

    !deg ? (deg = 1080 + Math.random() * (7200 + 1 - 1080)) : (duration = 1000);

    let animateWheel = wheel.animate(
      { transform: `rotate(${deg}deg)` },
      { duration: duration, fill: "forwards", easing: "ease-out" }
    );

    animateWheel.onfinish = () => resolve(deg);
  });
}

function checkSection(deg) {
  let sections = document.getElementsByClassName("wheel__section");

  [...sections].forEach((element) => {
    if (!selectedSection) {
      selectedSection = element;
    } else {
      let selectedSectionY = selectedSection.getBoundingClientRect().y;
      let elementY = element.getBoundingClientRect().y;

      elementY > selectedSectionY ? (selectedSection = element) : null;
    }
  });

  !selectedSection.innerText
    ? rotateWheel(deg + 45).then((deg) => checkSection(deg))
    : null;
}

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    rotateWheel().then((deg) => checkSection(deg));
  }
};

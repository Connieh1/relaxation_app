const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 16000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
// const exhaleTime = (totalTime / 5) * 2;

breathAnimation();

function breathAnimation() {
  text.innerText = "Inhale";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Exhale";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

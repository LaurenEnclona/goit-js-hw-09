function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId;

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true; // Disable Start button while running
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false; // Enable Start button when stopped
});

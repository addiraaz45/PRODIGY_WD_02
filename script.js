let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timer = null;

function updateDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  const ms = String(milliseconds).padStart(2, '0');
  document.getElementById("display").innerHTML =
    `${h}:${m}:${s}.<span class="milliseconds">${ms}</span>`;
}

function stopwatch() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;
  timer = setInterval(stopwatch, 10);
}

function stop() {
  clearInterval(timer);
  timer = null;

  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  const ms = String(milliseconds).padStart(2, '0');
  const savedTime = `${h}:${m}:${s}.${ms}`;

  const lapList = document.getElementById("lap-list");
  const lapItem = document.createElement("div");
  lapItem.className = "lap-time";
  lapItem.textContent = savedTime;
  lapList.prepend(lapItem);
}

function reset() {
  stop();
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  updateDisplay();
  document.getElementById("lap-list").innerHTML = '';
}

updateDisplay();

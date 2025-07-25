const clock = document.getElementById("binary-clock");

function createClock() {
  for (let i = 0; i < 6; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      column.appendChild(cell);
    }
    clock.appendChild(column);
  }
}

function updateClock() {
  const now = new Date();
  const digits = [
    Math.floor(now.getHours() / 10),
    now.getHours() % 10,
    Math.floor(now.getMinutes() / 10),
    now.getMinutes() % 10,
    Math.floor(now.getSeconds() / 10),
    now.getSeconds() % 10,
  ];

  const columns = document.querySelectorAll(".column");

  digits.forEach((digit, i) => {
    const bin = digit.toString(2).padStart(4, "0");
    const cells = columns[i].querySelectorAll(".cell");
    for (let j = 0; j < 4; j++) {
      if (bin[j] === "1") {
        cells[j].classList.add("on");
      } else {
        cells[j].classList.remove("on");
      }
    }
  });
}

createClock();
updateClock();
setInterval(updateClock, 1000);

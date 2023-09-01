let color = "black";
let click = true;
let mousedown = false; // New variable to track mouse button state

function populateBoard(size) {
  let board = document.querySelector(".board");

  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mousedown", () => {
      mousedown = true; // Set mousedown to true when mouse button is pressed
    });
    square.addEventListener("mouseup", () => {
      mousedown = false; // Set mousedown to false when mouse button is released
    });
    square.addEventListener("mousemove", colorSquare); // Track mousemove event
    square.style.backgroundColor = "white";
    board.appendChild(square);
  }
}

populateBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("Must be between 2 to 100 squares!");
  }
}

function colorSquare() {
  if (mousedown && click) {
    // Only color if mousedown is true
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      console.log(this.style.backgroundColor);
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  color = `rgb(${r},${g},${b})`;

  console.log(color);

  changeColor(color);
}

function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");

  squares.forEach((div) => (div.style.backgroundColor = "white"));
  mousedown = false; // Reset mousedown when clearing the board
}

// document.querySelector("body").addEventListener("click", (e) => {
//   if (e.target.tagName != "BUTTON") {
//     click = !click;
//     if (click) {
//       document.querySelector(".mode").textContent = "Mode: Coloring";
//     } else {
//       document.querySelector(".mode").textContent = "Mode: Not Coloring";
//     }
//   }
// });

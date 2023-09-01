// global variable
//set the default color that is global variable; it is changeable
let color = "black";

let click = true;

//the variable ${size}, 16 need to be changeable later to the user input
function populateBoard(size) {
  let board = document.querySelector(".board");

  // this is very important! to ensure all square are removed and started from the beginning with clear grid canvas
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  // -- remove to see the difference --

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // change the size of the square n x n in the grid

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    //   board.insertAdjacentElement("beforeend", square);
    board.appendChild(square);
  }
}

// initial size 16 x 16 when the script is loaded
populateBoard(16);

// checks if the input is not less than 2 and not more than 100
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    //turn off the error message
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } //
  else {
    console.log("Must be between 2 to 100 squares!");
    document.querySelector(".error").style.display = "flex";
  }
}

// function change color when mouseover

function colorSquare() {
  // this.style.backgroundColor = color;
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      console.log(this.style.backgroundColor);
    } //
    else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function randomColor() {
  // generate random value for red, gree, blue
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

  // squares.forEach((div) => div.remove()); does not work in this case
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// it targets the whole body element for clicks
document.querySelector("body").addEventListener("click", (e) => {
  //this to make sure whenever a button is clicked the mode is not change needlessly
  // console.log(e.target.tagName); check tagname equals to button
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } //
    else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});

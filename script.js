// Get the canvas element and its 2d drawing context
const canvas = document.getElementById("sketchCanvas");
const ctx = canvas.getContext("2d");

// Initialize drawing variables
let isDrawing = false;

// Set drawing styles
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

// Event listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Function to start drawing
function startDrawing(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
}

// Function to draw when the mouse is moved
function draw(e) {
  if (!isDrawing) return;

  ctx.lineTo(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
  ctx.stroke();
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
  ctx.closePath();
}

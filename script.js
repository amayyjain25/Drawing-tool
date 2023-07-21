// JavaScript for the drawing book

// Get the canvas element and its 2D context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial pen properties
let penSize = 5;
let penColor = '#000000';
let isDrawing = false;

// Function to set the pen size
function setPenSize(size) {
  penSize = size;
}

// Function to set the pen color
function setPenColor(color) {
  penColor = color;
}

// Function to handle mouse down on the canvas
function handleMouseDown(e) {
  isDrawing = true;
  draw(e);
}

// Function to handle mouse move on the canvas
function handleMouseMove(e) {
  if (isDrawing) {
    draw(e);
  }
}

// Function to handle mouse up on the canvas
function handleMouseUp() {
  isDrawing = false;
}

// Function to draw on the canvas
function draw(e) {
  if (!isDrawing) return;

  const { offsetX, offsetY } = e;
  ctx.lineWidth = penSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = penColor;

  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Add event listeners for drawing interactions
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mouseup', handleMouseUp);
canvas.addEventListener('mouseout', handleMouseUp);

// Get the pen size input element and add event listener to set pen size
const penSizeInput = document.getElementById('penSize');
penSizeInput.addEventListener('input', function () {
  setPenSize(this.value);
});

// Get the pen color input element and add event listener to set pen color
const penColorInput = document.getElementById('penColor');
penColorInput.addEventListener('input', function () {
  setPenColor(this.value);
});

// Get the "Clear Canvas" button and add event listener to clear the canvas
const clearCanvasButton = document.getElementById('clearCanvas');
clearCanvasButton.addEventListener('click', clearCanvas);

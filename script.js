const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const penSize = document.querySelector('#pen-size')
const eraserSize = document.querySelector('#eraser-size')
const penColor = document.querySelector('#pen-color')
const resetBtn = document.querySelector('#reset-canvas')
const saveBtn = document.querySelector('#save-canvas')


let lineWidth = 10
let eraserWidth = 10
let lineColor = 'black'
const eraserColor = 'white'

penSize.value = lineWidth
eraserSize.value = lineWidth
penColor.value = 'black'

// colors for line
const RED = 'red'
const BLUE = 'blue'
const GREEN = 'green'
const YELLOW = 'yellow'
const BLACK = 'black'
const WHITE = 'white'

// canvas sizing

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// variables
let painting = false;

function startPosition() {
	painting = true
}

function finishedPosition() {
	painting = false
	ctx.beginPath();
}

function draw(e) {
	if (!painting) return;
	ctx.lineWidth = lineWidth;
	ctx.lineCap = "round";
	ctx.strokeStyle = lineColor
	ctx.lineTo(e.clientX, e.clientY);
	ctx.stroke();
}

const handleWidthChange = evt => {
	if (evt.target.id === 'eraser-size') {
		eraserWidth = parseInt(evt.target.value)
	} else if (evt.target.id === 'pen-size') {
		lineWidth = parseInt(evt.target.value)
	}
}

const handleColorChange = () => {
	lineColor = penColor.value
}

const handleEraserWidth = (evt) => {
	lineWidth = eraserSize.value
}

// EventListeners to draw a line
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

// respond to user input
penSize.addEventListener('input', handleWidthChange)
eraserSize.addEventListener('input', handleWidthChange)
penColor.addEventListener("input", handleColorChange)
eraserSize.addEventListener('input', handleEraserWidth)

// Resizing when screen length changes

window.addEventListener('resize', () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
});

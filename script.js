const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let lineWidth = 10
let lineColor = 'black'

// colors for line
const RED = 'red'
const BLUE = 'blue'
const GREEN = 'green'
const YELLOW = 'yellow'

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

//EventListeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

// Resizing when screen length changes 

window.addEventListener('resize', () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
});

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let lineWidth = 10
let lineColor = 'black'

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
	if (evt.key === '+') {
		lineWidth++
	} else if (evt.key === '-') {
		lineWidth--
	}
}

const handleColorChange = evt => {
	switch (evt.key) {
		case '1':
			lineColor = RED
			break
		case '2':
			lineColor = BLUE
			break
		case '3':
			lineColor = GREEN
			break
		case '4':
			lineColor = YELLOW
			break
		case '5':
			lineColor = BLACK
	}
}

const eraser = (evt) => {
	if (evt.key === 'e') {
		lineColor = WHITE
	}
}

//EventListeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

// respond to user input
window.addEventListener('keypress', handleWidthChange)
window.addEventListener("keypress", handleColorChange)
window.addEventListener('keypress', eraser)

// Resizing when screen length changes

window.addEventListener('resize', () => {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
});

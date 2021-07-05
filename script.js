window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const erasor = document.querySelector(".eraser");
  const brush = document.querySelector(".brush");
  const bl = document.querySelector(".bl");
  const blu = document.querySelector(".blu");
  const gr = document.querySelector(".gr");
  const rd = document.querySelector(".rd");
  const ye = document.querySelector(".ye");
  const wt = document.querySelector(".wt");
  const pencolor = document.querySelector(".pencolor");
  const pensize = document.querySelector(".pensize");

  let lineColor = 'black';
  let lineSize = 10;
  let tempColor = '';

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
    ctx.lineWidth = lineSize;
    ctx.lineCap = "round";
    canvasX = e.pageX - canvas.offsetLeft;
    canvasY = e.pageY - canvas.offsetTop;

    ctx.strokeStyle = lineColor;
    ctx.lineTo(canvasX, canvasY);
    ctx.stroke();
  }

  function handleWidthChange(evt) {
    if (evt.key === '+') {
      lineWidth++
    } else if (evt.key === '-') {
      lineWidth--
    }
  }

  const handleColorChange = evt => {
    switch (evt.key) {
      case '1':
        console.log(1);
        lineColor = 'red';
        break
      case '2':
        lineColor = 'blue';
        break
      case '3':
        lineColor = 'green';
        break
      case '4':
        lineColor = 'yellow';
        break
      case '5':
        lineColor = 'black';
    }
  }

  brush.addEventListener('click', () => {
    lineColor = tempColor;
  })

  erasor.addEventListener('click', () => {
    tempColor = lineColor;
    lineColor = 'white';
  })

  rd.addEventListener('click', () => {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  bl.addEventListener('click', () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  blu.addEventListener('click', () => {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  gr.addEventListener('click', () => {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  ye.addEventListener('click', () => {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  wt.addEventListener('click', () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  })

  pencolor.addEventListener('input', () => {
    lineColor = pencolor.value;
  })

  pensize.addEventListener('input', () => {
    lineSize = pensize.value;
  })



  //EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', finishedPosition);
  canvas.addEventListener('mousemove', draw);

  window.addEventListener('keypress', handleWidthChange);
  window.addEventListener("keypress", handleColorChange);


  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
});



// Resizing when screen length changes 





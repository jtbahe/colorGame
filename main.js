let numSqrs = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll('.square');
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetBtn = document.querySelector("#reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
  setupModeBtns();
  setupSqrs();
  reset();
}

function setupModeBtns() {
  for (var i = 0; i < modeBtns.length; i++) {
      modeBtns[i].addEventListener('click', function() {
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove('selected');
      this.classList.add("selected");
      this.textContent === 'Easy' ? numSqrs = 3 : numSqrs = 6;
      reset();
    })
  }
}

function setupSqrs() {
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squarse
    squares[i].addEventListener('click', function() {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = 'Play Again?';
        changeColors(clickedColor);
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again";
      }
    })
  } 
}



function reset() {
  // generate all new colors
  colors = generateRandomColors(numSqrs);
  // pick a random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = " ";
  resetBtn.textContent = 'New Colors';
   // change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
        squares[i].style.display = 'none';
    }
  }
  
  h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click", function() {
  reset();
})

function changeColors(color)  {
  // loop thru all squares
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  // return that array
  return arr
}

function randomColor() {
  // pick a 'red' from 0 to 255
  let r = Math.floor(Math.random() * 256)
  // pick a 'green' from 0 to 255
  let g = Math.floor(Math.random() * 256)
  // pick a 'blue' from 0 to 255
  let b = Math.floor(Math.random() * 256)
  return `rgb(${r}, ${g}, ${b})`;
}


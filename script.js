const gridEl = document.querySelector('.grid');
let allSquares;
let inputNum;

function generateGrid(num) {
   for (let index = 0; index < (num * num); index++) {
      const squareEl = document.createElement('div');
      squareEl.classList.add('square');
      squareEl.style.width = 800/num + 'px';
      squareEl.style.height = 800/num + 'px';
      gridEl.appendChild(squareEl);
   }
   allSquares = document.querySelectorAll('.square');
   draw();
}

generateGrid(16);

function draw() {
   allSquares.forEach(square => {
      square.addEventListener('mouseover', (e) => {
         e.target.style.backgroundColor = 'black';
      });
   });
}

function changeSize() {
   inputNum = window.prompt('How many squares do you want per side? Please enter a number (max 100)');
   if (!inputNum) return;
   allSquares.forEach(square => {
      square.remove();
   });
   generateGrid(+inputNum);
   draw();
}

function clearGrid() {
   allSquares.forEach(square => {
      square.style.backgroundColor = 'white';
   });
}
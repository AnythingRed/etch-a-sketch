const gridEl = document.querySelector('.grid');

function generateGrid(num) {
   for (let index = 0; index < num; index++) {
      const squareEl = document.createElement('div');
      squareEl.classList.add('square')
      gridEl.appendChild(squareEl);
   }
}
//16x16
generateGrid(256);

let allSquares = document.getElementsByClassName('square');

for (i = 0; i < allSquares.length; i++) {
   allSquares[i].addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'black'
   });
}

const btn = document.getElementById('btn');
const colorPt = document.querySelectorAll('.color-pt');
const hex = document.querySelectorAll('.hex');

btn.addEventListener('click', generateColors);

function generateColors() {
  for (let i = 0; i < colorPt.length; i++) {
    const randomColor = getRandomColor();
    colorPt[i].style.backgroundColor = randomColor;
    hex[i].textContent = randomColor;
  }
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

generateColors();

